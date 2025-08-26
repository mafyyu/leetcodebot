import dotenv from 'dotenv';
dotenv.config();
import { REST, Routes } from 'discord.js';
import returntodayFile from './commands/returntoday.js';

// 登録コマンドを呼び出してリスト形式で登録
const commands = [returntodayFile.data.toJSON()];

// DiscordのAPIには現在最新のversion10を指定
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

// Discordサーバーにコマンドを登録
(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(process.env.APPLICATION_ID, process.env.GUILD_ID),
			{ body: commands },
		);
		console.log('サーバー固有のコマンドが登録されました！');
	}
	catch (error) {
		console.error('コマンドの登録中にエラーが発生しました:', error);
	}
})();