// 今日の問題を取得するクエリ
export const GET_TODAY_QUESTION = `
  query questionOfToday {
    activeDailyCodingChallengeQuestion {
      question {
        questionId
        title
        titleSlug
        difficulty
      }
    }
  }
`;

export const getTodayQuestionQuery = () => ({
  query: GET_TODAY_QUESTION
});