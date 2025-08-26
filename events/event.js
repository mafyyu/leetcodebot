import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import TodayQuestionService from '../graphql/services/todayQuestionService.js';

dayjs.extend(utc);

async function event(guild){
    console.log("eventが実行されました");

    const todayQuestionService = new TodayQuestionService();
    const title = await todayQuestionService.getTodayQuestion();
    const now = dayjs();
    const start = now.hour(9).minute(0).second(0).toDate();
    const end = now.add(1, 'day').hour(8).minute(59).second(0).toDate();
    
    
    if (now.hour() < 9) {
        const res = await guild.scheduledEvents.create({
            name: title,
            scheduledStartTime: start,
            scheduledEndTime: end,
            privacyLevel: 2,
            description: "今日の問題を解きましょう！",
            entityType:3,
            entityMetadata: {
                location: "https://leetcode.com/",
            }
        })
    };
}

export default event;

