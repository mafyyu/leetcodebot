const query =`
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


const variables = {
  titleSlug: "two-sum"
};
//queryに用いる引数の設定


fetch('https://leetcode.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',//JSONデータ送る合図みたいなやつ
    'Referer': 'https://leetcode.com', // あると安全
    'User-Agent': 'Mozilla/5.0',       // あると安全
  },
  body: JSON.stringify({
    query,
    variables
  })
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(e => console.error(e));

//fetchメソッドでHTTPリクエストを送る