# LeetCode Discord Bot

## 📖 概要

LeetCodeの日次問題をDiscordサーバーに自動で投稿し、学習を促進するDiscord Botです。

## ✨ 主な機能

- **問題詳細表示**: 問題文、制約、難易度を分かりやすく表示
- **スラッシュコマンド**: `/today`コマンドで問題を手動取得

## 🚧 作成途中の機能

- **イベント表示**: 作成されたDiscordイベントの一覧表示
- **ランダム問題**: `/random`コマンドでランダムなLeetCode問題を表示
- **問題履歴**: 過去に投稿された問題の履歴管理
- **統計機能**: 問題解決の進捗や参加者の統計表示

## 🚀 技術スタック

- **Node.js**: ランタイム環境
- **Discord.js**: Discord Bot API
- **GraphQL**: LeetCode APIとの通信
- **Docker**: コンテナ化とデプロイ
- **node-cron**: スケジュールタスク管理
- **dayjs**: 日付・時刻処理

## 🛠️ セットアップ

### 前提条件

- Docker & Docker Compose
- Discord Bot Token
- Discord Guild ID

### インストール

1. **リポジトリのクローン**
```bash
git clone <repository-url>
cd leetcodebot
```

2. **依存関係のインストール**
```bash
npm install
```

3. **環境変数の設定**
```bash
# .envファイルを作成
TOKEN=your_discord_bot_token
GUILD_ID=your_discord_guild_id
APPLICATION_ID=your_discord_application_id
```

4. **Dockerでの起動**
```bash
docker compose up -d --build
```

## 📱 使用方法

### スラッシュコマンド

- **`/today`**: 今日のLeetCode問題を表示
- **`/random`**: ランダムなLeetCode問題を表示（開発中）

