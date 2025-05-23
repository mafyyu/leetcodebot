import { getQuestionDetail } from '../graphql/getQuestionDetail.js';
import { todayQuestion } from '../graphql/todayQuestion.js';
import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { compile } from 'html-to-text';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';

const data = new SlashCommandBuilder()
	.setName('today')
	.setDescription('DailyQuestionの問題文、難易度が表示されます。');

async function execute(interaction) {
	const questiontitle = await todayQuestion();
	const titleSlug = questiontitle.toLowerCase().replaceAll((' '), ('-')).replaceAll(/"/g, '');
	const questionDetail = await getQuestionDetail(titleSlug);


	// leetcodeの変更時間に合わせてる
	dayjs.extend(utc);
	const now = dayjs().utc(); // 9:00変更だからイギリス時間にしている
	const dailyDay = now.format('YYYY-MM-DD');

	const options = {
		selectors:[
			{ selector: 'code', format: 'inline' },
		],
	};

	const toText = compile(options);
	const text = toText(questionDetail.data.question.content.replaceAll(/<code>/g, '`').replaceAll(/<\/code>/g, '`'));

	// exampleの部分を削除
	const f = text.indexOf('Example');
	const e = text.indexOf('Constraints');


	const embed = new EmbedBuilder()

		.setColor(0x0099FF)
		.setTitle(`${questiontitle.replaceAll(/"/g, '')}`)
		.setURL(`https://leetcode.com/problems/${titleSlug.replaceAll(/'/g, '')}/description/?envType=daily-question&envId=${dailyDay}`)
		.setDescription(`${questionDetail.data.question.questionId},${questionDetail.data.question.difficulty}`)
		.addFields(
			{ name: 'Contents', value: `${text.slice(0, f)}`, inline: true },
			{ name : 'Constraints', value: `${text.slice(e)}`, inline: true },
		)
		// .setTimestamp();

	await interaction.reply({ embeds: [embed] });
}
export default { data, execute };