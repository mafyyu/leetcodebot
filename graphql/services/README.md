# Services フォルダー

## 概要
このフォルダーには、ビジネスロジックとデータ処理を担当するサービスクラスが含まれています。

## ファイル構成

### `QuestionService.js`
問題詳細の取得に関するビジネスロジックを担当するサービスクラス。

**主な機能：**
- 問題詳細の取得
- データの検証・加工
- エラー時の適切な処理
- ビジネスルールの適用

**役割：**
- クエリの構築
- クライアントを使って通信
- レスポンスデータの加工・検証
- 適切な形式でデータを返す

### `TodayQuestionService.js`
今日の問題の取得に関するビジネスロジックを担当するサービスクラス。

**主な機能：**
- 今日の問題の取得
- データの正規化
- エラーハンドリング
- 既存のtodayQuestion関数との互換性維持

## 使用例
```javascript
import QuestionService from './services/QuestionService.js';
import TodayQuestionService from './services/TodayQuestionService.js';

const questionService = new QuestionService();
const todayService = new TodayQuestionService();

// 問題詳細を取得
const questionDetail = await questionService.getQuestionDetail('two-sum');

// 今日の問題を取得
const todayQuestion = await todayService.getTodayQuestion();
```

## 設計思想
- **ビジネスロジックの集約**: 特定の機能に関する処理を一箇所にまとめる
- **再利用性**: 複数の場所から利用可能
- **保守性**: ビジネスルールの変更が容易
- **テスト容易性**: ロジック部分を個別にテスト可能
