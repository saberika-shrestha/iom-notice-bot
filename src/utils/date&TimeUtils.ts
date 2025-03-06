export const getFormattedDate = (publishDate: string): string => {
	const date = new Date(publishDate);
	const dateFormatter = new Intl.DateTimeFormat('en-US', {
		weekday: 'long', // Full day name (Wednesday)
		month: 'long', // Full month name (September)
		day: '2-digit', // Day with 2 digits (18)
		year: 'numeric', // Full year (2024)
		timeZone: 'Asia/Kathmandu' // Set to Nepal Time
	});
	const formattedDate = dateFormatter.format(date);
	return formattedDate;
};
