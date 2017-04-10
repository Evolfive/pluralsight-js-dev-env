import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Nosso primeiro teste', () => {
	it('deve passar', () => {
		expect(true).to.equal(true);
	});
});

describe('index.html', () => {
	it('deve ter h1 que diz Users', (done) => {
		const index = fs.readFileSync('./src/index.html', 'utf-8');
		jsdom.env(index, (err, window) => {
			const h1 = window.document.getElementsByTagName('h1')[0];
			expect(h1.innerHTML).to.equal("Users");
			done();
			window.close();
		});
	});
});
