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


fetch('https://leetcode.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',//JSONデータ送る合図みたいなやつ
    'Referer': 'https://leetcode.com', // あると安全
    'User-Agent': 'Mozilla/5.0',       // あると安全
  },
  body: JSON.stringify({
    query
  })
})
  .then(res => res.json())
  .then(data => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(e => console.error(e));