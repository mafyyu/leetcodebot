export const getQuestionDetail = async (titleSlug) => {

	const query = `
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
		titleSlug: titleSlug,
	};
	console.log('variables', variables);
	// queryに用いる引数の設定


	const res = await fetch('https://leetcode.com/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// JSONデータ送る合図みたいなやつ
			'Referer': 'https://leetcode.com',
			// あると安全
			'User-Agent': 'Mozilla/5.0',
			// あると安全
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const data = await res.json();
	return JSON.stringify(data);

	// fetchメソッドでHTTPリクエストを送る
};