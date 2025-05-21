export const todayQuestion = async()=>{
  const query =`
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
  const res = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',//JSONデータ送る合図みたいなやつ
      'Referer': 'https://leetcode.com', // あると安全
      'User-Agent': 'Mozilla/5.0',       // あると安全
    },
    body: JSON.stringify({query})
  });
  const data = await res.json();
  return JSON.stringify(data.data.activeDailyCodingChallengeQuestion.question.title)
}