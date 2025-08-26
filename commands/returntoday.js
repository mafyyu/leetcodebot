// import { getQuestionDetail } from '../graphql/getQuestionDetail.js';
// import { todayQuestion } from '../graphql/todayQuestion.js';
import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { compile } from 'html-to-text';
import { returnUrl } from '../utils/returnUrl.js';
import QuestionService from '../graphql/services/questionDetailService.js';
import TodayQuestionService from '../graphql/services/todayQuestionService.js';

const questionService = new QuestionService();
const todayQuestionService = new TodayQuestionService();

const data = new SlashCommandBuilder()
	.setName('today')
	.setDescription('DailyQuestionの問題文、難易度が表示されます。');

async function execute(interaction) {
	const questiontitle = await todayQuestionService.getTodayQuestion();
	const titleSlug = questiontitle.toLowerCase().replaceAll((' '), ('-')).replaceAll(/"/g, '');
	const questionDetail = await questionService.getQuestionDetail(titleSlug);
    const url = await returnUrl();

	const options = {
		selectors:[
			{ selector: 'code', format: 'inline' },
		],
	};

	const toText = compile(options);
	const text = toText(questionDetail.content.replaceAll(/<code>/g, '`').replaceAll(/<\/code>/g, '`'));

	
	const f = text.indexOf('Example');
	const e = text.indexOf('Constraints');


	const embed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle(`${questiontitle.replaceAll(/"/g, '')}`)
		.setURL(url)
		.setDescription(`${questionDetail.questionId},${questionDetail.difficulty}`)
		.addFields(
			{ name: 'Contents', value: `${text.slice(0, f)}`, inline: true },
			{ name : 'Constraints', value: `${text.slice(e)}`, inline: true },
		)
		// .setTimestamp();

	await interaction.reply({ embeds: [embed] });
}
export default { data, execute };