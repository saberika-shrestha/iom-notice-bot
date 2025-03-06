import {
	sendTelegramUpdate,
	reportError
} from '../services/telegramService.js';
import {
	saveToJSON,
	readFromJSON,
	compareNotices
} from '../utils/fileUtils.js';
import { result, routine, notice } from '../services/iomService.js';
import { formatNotice } from '../utils/postFormat.js';

const processUpdates = async (
	type: string,
	fetchFunction: Function,
	filePath: string
) => {
	try {
		const newData = await fetchFunction();
		if (!newData) {
			throw new Error(`EMPTY ${type.toUpperCase()} DATA`);
		}

		const oldData = readFromJSON(filePath);
		const uniqueData = compareNotices(oldData, newData);

		if (uniqueData.length) {
			saveToJSON(newData, filePath);

			await Promise.all(
				uniqueData.map((item) => {
					sendTelegramUpdate(formatNotice(item));
				})
			);
		}
	} catch (error) {
		await reportError(`Error processing ${type}: ${error}`);
	}
};

export const startBot = async () => {
	try {
		await Promise.all([
			processUpdates('routines', routine, 'data/routines.json'),
			processUpdates('results', result, 'data/results.json'),
			processUpdates('notices', notice, 'data/notices.json')
		]);
	} catch (error) {
		await reportError(`Critical bot failure: ${error}`);
	}
};
