import React, { Component } from 'react';
import { SafeAnchor } from 'react-bootstrap';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies } from '../../Redux/Actions/home.action';
import { postCurrency } from '../../Redux/Actions/stat.action';

class Stat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toConvert: ['GBP', 'EUR', 'CHF', 'JPY', 'CAD', 'AUD', 'AED', 'RUB', 'NGN', 'RWF'],
			base: 'USD',
			amount: 1,
		};
		this.renderStat = this.renderStat.bind(this);
	}
	componentWillMount() {
		this.props.getCurrencies();
		this.props.postCurrency(this.state.toConvert, this.state.base, this.state.amount);
	}
	renderStat() {
		return this.state.toConvert.map(ele => (
			<div className='card-body'>
				<h5 className='card-title'> {this.props.currencies[ele]}</h5>
				<span className='btn btn-primary'>
					{this.props.convertedCurrencies.filter(element => new RegExp(ele).test(element))}
				</span>
			</div>
		));
	}
	render() {
		return (
			<div className='panel-container bg-white'>
				<SafeAnchor
					href='/'
					className='p-3 bg-light font-weight-bold text-decoration-none display-block'
				>
					Home
				</SafeAnchor>
				<SafeAnchor
					href='/convert'
					className='p-3 bg-light font-weight-bold text-decoration-none button-left display-block'
				>
					Convert
				</SafeAnchor>
				<div className='panel panel-default bg-white'>
					<div className='panel-heading mx-4 my-4 px-2 py-2 text-secondary font-weight-bold'>
						Global currencies
					</div>
					<div className='panel-body mx-5 my-5 px-2 py-2'>
						<div className='btn btn-primary'>
							Compare With United State Dollar{' '}
							<span className='badge badge-light'> {this.state.amount + this.state.base} </span>
						</div>
						<br />
						<br />
						<div className='card'>
							{this.props.isCurrencies && this.props.convertAll ? this.renderStat() : ''}
						</div>
						<div className={this.props.convertAllCSS + ' p-1'}>
							{this.props.isCurrencies && this.props.convertAll
								? 'up to date currency'
								: 'please wait...'}
						</div>
					</div>
					<div className='panel-footer text-secondary'>MoneyX © 2018</div>
				</div>
			</div>
		);
	}
}

Stat.propTypes = {
	convertedCurrencies: propTypes.array,
	convertAll: propTypes.bool,
	isCurrencies: propTypes.bool,
	convertAllCSS: propTypes.string,
	currencies: propTypes.object,
};

const mapStateToProps = props => {
	return {
		convertedCurrencies: props.StatReducer.convertedCurrencies,
		convertAll: props.StatReducer.convertAll,
		convertAllCSS: props.StatReducer.convertAllCSS,
		isCurrencies: props.HomeReducer.isCurrencies,
		currencies: props.HomeReducer.currencies,
	};
};

export default connect(mapStateToProps, { getCurrencies, postCurrency })(Stat);
