import { REST, Routes } from 'discord.js';
import heyFile from './commands/hey.js';
import config from './config.json' assert { type: 'json' };
import returntodayFile from './commands/returntoday.js';

const { applicationId, guidId, token } = config;

// 登録コマンドを呼び出してリスト形式で登録
const commands = [returntodayFile.data.toJSON()];

// DiscordのAPIには現在最新のversion10を指定
const rest = new REST({ version: '10' }).setToken(token);

// Discordサーバーにコマンドを登録
(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(applicationId, config.guidId),
			{ body: commands },
		);
		console.log('サーバー固有のコマンドが登録されました！');
	}
	catch (error) {
		console.error('コマンドの登録中にエラーが発生しました:', error);
	}
})();