// GraphQLクライアントの共通処理
class LeetCodeClient {
    constructor() {
      this.baseUrl = 'https://leetcode.com/graphql';
      this.headers = {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
        'User-Agent': 'Mozilla/5.0'
      };
    }
  
    async executeQuery(query, variables = {}) {
      try {
        const response = await fetch(this.baseUrl, {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({ query, variables })
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
      } catch (error) {
        console.error('GraphQL query failed:', error);
        throw error;
      }
    }
  }
  
  export default LeetCodeClient;