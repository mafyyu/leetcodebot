import LeetCodeClient from '../client/LeetCodeClient.js';
import { getTodayQuestionQuery } from '../queries/todayQuestion.js';

class TodayQuestionService {
  constructor() {
    this.client = new LeetCodeClient();
  }

  async getTodayQuestion() {
    try {
      const queryData = getTodayQuestionQuery();
      const result = await this.client.executeQuery(queryData.query);
      
      if (result.errors) {
        throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
      }
      
      const question = result.data.activeDailyCodingChallengeQuestion.question;
      return question.title;
    } catch (error) {
      console.error('Failed to get today question:', error);
      throw error;
    }
  }
}

export default TodayQuestionService;