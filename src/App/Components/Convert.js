import React, { Component } from 'react';
import { SafeAnchor } from 'react-bootstrap';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies } from '../../Redux/Actions/home.action';
import { postCurrencies } from '../../Redux/Actions/convert.action';

class Convert extends Component {
	constructor(props) {
		super(props);
		this.state = {
			originalCurrency: 'USD - United States Dollar',
			convertCurrency: 'RWF - Rwandan Franc',
		};
		this.convert = this.convert.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderSelectOption = this.renderSelectOption.bind(this);
		this.selectStateChange = this.selectStateChange.bind(this);
	}
	componentDidMount() {
		this.props.getCurrencies();
	}
	convert() {
		this.props.postCurrencies();
	}
	handleSubmit(event) {
		event.preventDefault();
		const money = document.getElementById('money').value;
		const from = document
			.getElementById('fromSelect')
			.value.split('-')[0]
			.trim();
		const to = document
			.getElementById('toSelect')
			.value.split('-')[0]
			.trim();
		if (/^[0-9]{1,}\.{0,}[0-9]{0,}$/.test(money)) {
			this.props.postCurrencies({ from, to, money });
		}
	}
	selectStateChange(event) {
		this.setState({
			originalCurrency: document.getElementById('fromSelect').value,
			convertCurrency: document.getElementById('toSelect').value,
		});
	}
	renderSelectOption(type) {
		return (
			<select
				className='form-control'
				id={type === 'to' ? 'toSelect' : 'fromSelect'}
				onChange={this.selectStateChange}
			>
				{Object.keys(this.props.currencies).map(element => {
					const [key, value] = [element, this.props.currencies[element]];
					if (
						(`${key} - ${value}` === this.state.originalCurrency && type === 'from') ||
						(`${key} - ${value}` === this.state.convertCurrency && type === 'to')
					) {
						return <option selected> {`${key} - ${value}`} </option>;
					}
					return <option> {`${key} - ${value}`} </option>;
				})}
			</select>
		);
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
					href='/stats'
					className='p-3 bg-light font-weight-bold text-decoration-none button-left display-block'
				>
					Statistics
				</SafeAnchor>
				<div className='panel panel-default bg-white'>
					<div className='panel-heading mx-4 my-4 px-2 py-2 text-secondary font-weight-bold'>
						currency converter
					</div>
					<div className='panel-body mx-5 my-5 px-2 py-2'>
						<div className='card p-5'>
							<h3 className='card-title'>
								{this.props.to + ' ' + this.state.convertCurrency + ' equals'}
							</h3>
							<p className='text-secondary'>
								{this.props.from + ' ' + this.state.originalCurrency + ' equals'}{' '}
							</p>
							<br /> <br />
							<form onSubmit={this.handleSubmit}>
								<input
									type='text'
									className='form-control'
									id='money'
									placeholder={'0 ' + this.state.originalCurrency}
								/>
								{this.props.isCurrencies ? this.renderSelectOption('from') : 'loading.....'}
								{this.props.isCurrencies ? this.renderSelectOption('to') : 'loading.....'}
								<input type='submit' className='btn btn-primary' value='convert' />
							</form>
						</div>
					</div>
					<div className='panel-footer text-secondary'>MoneyX © 2018</div>
				</div>
			</div>
		);
	}
}

Convert.propTypes = {
	from: propTypes.number,
	to: propTypes.number,
	isCurrencies: propTypes.bool,
	convertError: propTypes.bool,
	convertErrorCSS: propTypes.string,
	currencies: propTypes.object,
};

const mapStateToProps = props => {
	return {
		from: props.ConvertReducer.from,
		to: props.ConvertReducer.to,
		convertError: props.ConvertReducer.convertError,
		convertErrorCSS: props.ConvertReducer.convertErrorCSS,
		isCurrencies: props.HomeReducer.isCurrencies,
		currencies: props.HomeReducer.currencies,
	};
};

export default connect(mapStateToProps, { getCurrencies, postCurrencies })(Convert);
