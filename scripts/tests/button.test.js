/**
 * @jest-environment jsdom
 */

const buttonClick = require('../button');

beforeEach(() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync('index.html', 'utf8');
    document.open();
    document.write(fileContents);
    document.close();
});

describe('DOM Tests', () =>{
    test('expect p content to change', () =>{
        buttonClick();
        expect(document.getElementById('par').innerHTML).toEqual('You Clicked');
    });
    test('expect h1 to exist', () =>{
        expect(document.getElementsByTagName('h1').length).toBe(1);
    });
});