import LeetCodeClient from '../client/LeetCodeClient.js';
import { getQuestionDetailQuery } from '../queries/questionDetail.js';

class QuestionService {
  constructor() {
    this.client = new LeetCodeClient();
  }

  async getQuestionDetail(titleSlug) {
    try {
      const queryData = getQuestionDetailQuery(titleSlug);
      const result = await this.client.executeQuery(queryData.query, queryData.variables);
      
      if (result.errors) {
        throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
      }
      
      return result.data.question;
    } catch (error) {
      console.error('Failed to get question detail:', error);
      throw error;
    }
  }
}

export default QuestionService;