# Client フォルダー

## 概要
このフォルダーには、GraphQL APIとの通信を担当する低レベルなクライアントクラスが含まれています。

## ファイル構成

### `LeetCodeClient.js`
LeetCodeのGraphQL APIとの通信を担当する共通クライアントクラス。

**主な機能：**
- HTTPリクエストの送信
- レスポンスの受信
- 基本的なエラーハンドリング
- 通信設定の管理（ヘッダー、タイムアウトなど）

**役割：**
- 通信の基本処理のみを担当
- データの内容には関与しない
- 他のサービスから再利用可能

## 使用例
```javascript
import LeetCodeClient from './client/LeetCodeClient.js';

const client = new LeetCodeClient();
const result = await client.executeQuery(query, variables);
```

## 設計思想
- **単一責任の原則**: 通信処理のみに集中
- **再利用性**: 複数のサービスから利用可能
- **保守性**: 通信設定の変更が容易
