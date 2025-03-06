import fs from 'fs';
import path from 'path';
import { Notice } from '../types/iomTypes.js';

export const saveToJSON = (data: any, filePath: string): void => {
	try {
		const fullPath = path.resolve(filePath);
		fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
	} catch (error) {
		console.error('Error saving data:', error);
		throw error;
	}
};

export const readFromJSON = (filePath: string): any => {
	try {
		const fullPath = path.resolve(filePath);
		const data = fs.readFileSync(fullPath, 'utf-8');
		return JSON.parse(data);
	} catch (error) {
		console.error('Error reading data:', error);
		return null;
	}
};

export const compareNotices = (
	oldNotices: Notice[],
	newNotices: Notice[]
): Notice[] => {
	const oldNoticesSet = new Set(
		oldNotices.map((notice) => JSON.stringify(notice))
	);
	const uniqueNotices = newNotices.filter(
		(notice) => !oldNoticesSet.has(JSON.stringify(notice))
	);
	return uniqueNotices;
};
