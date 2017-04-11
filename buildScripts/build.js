/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Gerando bundle mimificado para produção. Aguarde um momento...'));

webpack(webpackConfig).run((err, stats) => {
	if (err) {
		console.log(chalk.red(err));
		return 1;
	}

	const jsonStats = stats.toJson();

	if (jsonStats.hasErrors)
		return jsonStats.errors.map(error => console.log(chalk.red(error)));

	if (jsonStats.hasWarnings) {
		console.log(chalk.yellow('Webpack gerou os seguintes warnings: '));
		jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
	}

	console.log(`Webpack stats: ${stats}`);

	console.log(chalk.green('Seu app foi construido para produção e escrito para /dist:'));

	return 0;
});
