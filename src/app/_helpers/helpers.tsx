import monthsDict from './monthsDict';

export function getDateFromPosts(rawDate: string) {
	// example default format from SANITY: 2017-02-12T09:15:00Z
	const YMD: string[] = rawDate.split('T')[0].split('-');

	const parsedMonth = parseInt(YMD[1]); // parseInt to remove leading 0's

	const month = monthsDict[parsedMonth - 1].abbreviation;
	const day = YMD[2];
	const year = YMD[0];

	return `${month} ${day}, ${year}`;
}
