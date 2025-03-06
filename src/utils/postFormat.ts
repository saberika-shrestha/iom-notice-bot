import { Notice } from '../types/iomTypes.js';

export const formatNotice = (notice: Notice): string => {
	const { Date: date, Description: description, Url: url } = notice;
	return `<b>📅  Date: </b><u><b>${date}</b></u>\n\n<b>📝  Notice:</b>\n<b><i>${description}</i></b>\n\n<a href="${url}">🔗 Read more</a>\n\n<i>Stay updated for more important news!</i> 💡`;
};
