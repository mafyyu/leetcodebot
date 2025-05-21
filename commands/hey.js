import { getQuestionDetail } from "../graphql/getQuestionDetail.js"
import { todayQuestion } from "../graphql/todayQuestion.js";
import { SlashCommandBuilder } from 'discord.js';

const questiontitle = await todayQuestion();
const titleSlug = questiontitle.toLowerCase().replaceAll((" "),("-")).replaceAll(/"/g,"");
const questinDetail = await getQuestionDetail(titleSlug);

const data = new SlashCommandBuilder().setName('today').setDescription('コマンドを入力するとDailyQuestionが表示されます。')
const execute = async function (interaction) {
    await interaction.reply(questiontitle);
}


export default { data, execute };