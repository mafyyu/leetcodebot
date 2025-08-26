// 問題詳細を取得するクエリ
export const GET_QUESTION_DETAIL = `
  query getQuestionDetail($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
      questionId
      title
      content
      difficulty
      stats
      status
    }
  }
`;

export const getQuestionDetailQuery = (titleSlug) => ({
  query: GET_QUESTION_DETAIL,
  variables: { titleSlug }
});