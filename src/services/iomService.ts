import axios from 'axios';
import * as cheerio from 'cheerio';
import { getFormattedDate } from '../utils/date&TimeUtils.js';
import { Notice } from '../types/iomTypes.js';
import { endpoints } from '../config/config.js';

const fetchNoticesFromTable = async (endpoint: string): Promise<Notice[]> => {
	try {
		const currentNotices: Notice[] = [];
		const response = await axios.get(endpoint);
		const $ = cheerio.load(response.data);
		const rows = $(
			'.table.table-striped.table-bordered.dTableR tbody tr'
		).slice(0, 5);

		rows.each((_index, element) => {
			const row = $(element);
			const date = getFormattedDate(row.find('td').eq(0).text().trim());
			const description = row.find('td').eq(2).text().trim();
			const url = row.find('td').eq(3).find('a').attr('href') || endpoint;

			currentNotices.push({ Date: date, Description: description, Url: url });
		});

		return currentNotices;
	} catch (err) {
		throw err;
	}
};

const fetchNoticesFromNewsListing = async (): Promise<Notice[]> => {
	try {
		const currentNotices: Notice[] = [];
		const noticePage = await axios.get(endpoints.notice);
		const $ = cheerio.load(noticePage.data);
		const rows = $('.news-listing').slice(0, 5);

		for (const element of rows.toArray()) {
			const row = $(element);
			const href = row.find('a.btn').attr('href');

			if (!href) continue;

			const noticeResponse = await axios.get(href);
			const $$ = cheerio.load(noticeResponse.data);
			const date = getFormattedDate($$('.date').text().trim());
			const description = $$('.span12 h2').text().trim();
			let url =
				$$('.date').siblings('p').find('a').attr('href') ||
				$$('.modal-body img').attr('src') ||
				'';

			currentNotices.push({ Date: date, Description: description, Url: url });
		}

		return currentNotices;
	} catch (err) {
		throw err;
	}
};

export const result = () => fetchNoticesFromTable(endpoints.result);
export const routine = () => fetchNoticesFromTable(endpoints.routine);
export const notice = fetchNoticesFromNewsListing;
