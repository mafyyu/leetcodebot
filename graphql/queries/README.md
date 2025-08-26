# Queries フォルダー

## 概要
このフォルダーには、GraphQLクエリの定義と、クエリを構築するためのヘルパー関数が含まれています。

## ファイル構成

### `questionDetail.js`
問題詳細を取得するためのGraphQLクエリとヘルパー関数。

**内容：**
- `GET_QUESTION_DETAIL`: 問題詳細を取得するGraphQLクエリ
- `getQuestionDetailQuery(titleSlug)`: クエリと変数を構築するヘルパー関数

**クエリの取得項目：**
- questionId: 問題のID
- title: 問題のタイトル
- content: 問題の内容
- difficulty: 難易度
- stats: 統計情報
- status: ステータス

### `todayQuestion.js`
今日の問題を取得するためのGraphQLクエリとヘルパー関数。

**内容：**
- `GET_TODAY_QUESTION`: 今日の問題を取得するGraphQLクエリ
- `getTodayQuestionQuery()`: クエリを構築するヘルパー関数

**クエリの取得項目：**
- questionId: 問題のID
- title: 問題のタイトル
- titleSlug: 問題のスラッグ
- difficulty: 難易度

## 使用例
```javascript
import { getQuestionDetailQuery, getTodayQuestionQuery } from './queries/';

// 問題詳細のクエリを構築
const questionQuery = getQuestionDetailQuery('two-sum');

// 今日の問題のクエリを構築
const todayQuery = getTodayQuestionQuery();
```

## 設計思想
- **クエリの分離**: GraphQLクエリとロジックを分離
- **再利用性**: 同じクエリを複数の場所で使用可能
- **保守性**: クエリの変更が容易
- **可読性**: クエリの内容が明確
