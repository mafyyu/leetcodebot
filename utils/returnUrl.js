import TodayQuestionService from '../graphql/services/todayQuestionService.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';


export async function returnUrl() {
	const todayQuestionService = new TodayQuestionService();
	const questiontitle = await todayQuestionService.getTodayQuestion();
	const titleSlug = questiontitle.toLowerCase().replaceAll((' '), ('-')).replaceAll(/"/g, '');

	// leetcodeの変更時間に合わせてる
	dayjs.extend(utc);
	const now = dayjs().utc(); // 9:00変更だからイギリス時間にしている
	const dailyDay = now.format('YYYY-MM-DD');
    const url = `https://leetcode.com/problems/${titleSlug.replaceAll(/'/g, '')}/description/?envType=daily-question&envId=${dailyDay}`;

    return url
}
