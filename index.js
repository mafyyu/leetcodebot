import { Client, Events, GatewayIntentBits } from 'discord.js';
import config from './config.json' assert {type:'json'};
import returntodayFile from './commands/returntoday.js'

const { token } = config;

const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.once(Events.ClientReady,readyClient=>{
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {

    // スラッシュ以外のコマンドの場合は対象外なので早期リターンさせて終了します
    // コマンドにスラッシュが使われているかどうかはisChatInputCommand()で判断しています
    if (!interaction.isChatInputCommand()) return;

    // heyコマンドに対する処理
    if (interaction.commandName === returntodayFile.data.name) {
        try {
            await returntodayFile.execute(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
            } else {
                await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
            }
        }
    } else {
        console.error(`${interaction.commandName}というコマンドには対応していません。`);
    }
});

client.login(token);