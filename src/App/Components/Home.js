import React, { Component } from 'react';
import { SafeAnchor } from 'react-bootstrap';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies } from '../../Redux/Actions/home.action';

class Home extends Component {
	constructor(props) {
		super(props);
		this.renderCurrencies = this.renderCurrencies.bind(this);
	}
	componentDidMount() {
		this.props.getCurrencies();
	}
	renderCurrencies() {
		return Object.keys(this.props.currencies).map(currency => (
			<div className='panel bg-light my-2 border border-primary'>
				<span className='badge-dark'> {currency} </span>
				<span className='badge-light'> {this.props.currencies[currency]} </span>
			</div>
		));
	}
	render() {
		return (
			<div className='panel-container bg-white'>
				<div className='panel panel-default bg-white'>
					<div className='panel-heading mx-4 my-4 px-2 py-2 text-secondary font-weight-bold'>
						MoneyX - Realtime currency converter
					</div>
					<div className='panel-body mx-5 my-5 px-2 py-2'>
						<SafeAnchor
							className='p-3 bg-light font-weight-bold text-decoration-none display-block'
							href='/stats'
						>
							Get Statistics
						</SafeAnchor>
						<SafeAnchor
							className='p-3 bg-light font-weight-bold button-left text-decoration-none display-block'
							href='/convert'
						>
							Currency converter
						</SafeAnchor>
					</div>
					<div className='card'>
						<div className='card-body'>
							{this.props.isCurrencies ? this.renderCurrencies() : 'currencies loading....'}
						</div>
						<div className='alert-primary'>
							{this.props.currenciesError === false ? (
								<span>list of currencies </span>
							) : (
								<span> error occured! refresh the page </span>
							)}
						</div>
					</div>
					<div className='panel-footer text-secondary'> MoneyX © 2018 </div>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	currencies: propTypes.object,
	currenciesError: propTypes.bool,
	isCurrencies: propTypes.bool,
};

const mapStateToProps = props => {
	return {
		currenciesError: props.HomeReducer.currenciesError,
		currencies: props.HomeReducer.currencies,
		isCurrencies: props.HomeReducer.isCurrencies,
	};
};

export default connect(mapStateToProps, { getCurrencies })(Home);
