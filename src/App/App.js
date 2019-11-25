import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux';
import Home from '../App/Components/Home';
import Convert from '../App/Components/Convert';
import Stat from '../App/Components/Stat';
import NotFound from '../App/Components/NotFound';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/stats' component={Stat} />
						<Route exact path='/convert' component={Convert} />
						<Route exact path='*' component={NotFound} />
					</Switch>
				</Router>
			</Provider>
		);
	}
}

export default App;
