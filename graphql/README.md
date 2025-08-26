# GraphQL フォルダー

## 概要
このフォルダーには、LeetCodeのGraphQL APIと通信するためのコードが含まれています。既存のコードを整理し、より保守性と再利用性の高い構造に改善しています。

## フォルダー構成

```
graphql/
├── client/           # 通信処理を担当
├── services/         # ビジネスロジックを担当
├── queries/          # GraphQLクエリの定義
├── getQuestionDetail.js  # 既存ファイル（問題詳細取得）
├── todayQuestion.js      # 既存ファイル（今日の問題取得）
└── README.md         # このファイル
```

## 各フォルダーの役割

### `client/`
- **LeetCodeClient.js**: GraphQL APIとの通信を担当する共通クライアント
- 低レベルな通信処理（HTTPリクエスト、レスポンス処理）

### `services/`
- **QuestionService.js**: 問題詳細の取得に関するビジネスロジック
- **TodayQuestionService.js**: 今日の問題の取得に関するビジネスロジック
- データの検証、加工、エラーハンドリング

### `queries/`
- GraphQLクエリの定義
- クエリを構築するヘルパー関数
- クエリとロジックの分離


## 既存ファイルとの関係

現在の `getQuestionDetail.js` と `todayQuestion.js` は既存の機能を維持しつつ、新しいサービス層からも利用可能です。

## 使用例

### 既存の方法（変更なし）
```javascript
import { getQuestionDetail } from './graphql/getQuestionDetail.js';
import { todayQuestion } from './graphql/todayQuestion.js';
```

### 新しい方法（サービス経由）
```javascript
import QuestionService from './graphql/services/QuestionService.js';
import TodayQuestionService from './graphql/services/TodayQuestionService.js';
```

## 設計の利点

1. **コードの重複排除**: 共通処理を集約
2. **保守性向上**: 責任の分離と明確化
3. **拡張性**: 新しい機能の追加が容易
4. **テスト容易性**: 各コンポーネントを個別にテスト可能
5. **再利用性**: 共通コンポーネントの再利用

## 移行計画

1. 新しいサービス層の実装
2. 既存コードの動作確認
3. 段階的な移行（オプション）
4. 既存コードの削除（オプション）
