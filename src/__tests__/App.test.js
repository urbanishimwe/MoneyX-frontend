import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import App from '../App/App';

it('Renders without crushing', () => {
	const div = document.createElement('div');
	render(<App />, div);
});
