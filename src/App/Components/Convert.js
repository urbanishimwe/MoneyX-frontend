import React, { Component } from 'react';
import { SafeAnchor } from 'react-bootstrap';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies } from '../../Redux/Actions/home.action';
import { postCurrencies } from '../../Redux/Actions/convert.action';

class Convert extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.renderCurrencies = this.renderCurrencies.bind(this);
	}
	componentDidMount() {
		this.props.getCurrencies();
	}
	renderCurrencies() {
		this.props.postCurrencies();
	}
	render() {
		return (
			<div className='panel-container bg-white'>
				<SafeAnchor href='/' className='p-3 bg-light font-weight-bold text-decoration-none'>
					Home
				</SafeAnchor>
				<div className='panel panel-default bg-white'>
					<div className='panel-heading mx-4 my-4 px-2 py-2 text-secondary font-weight-bold'>
						MoneyX - Realtime currency converter
					</div>
					<div className='panel-body mx-5 my-5 px-2 py-2'></div>
					<div className='card'>
						<div className='card-body'></div>
						<div className={this.props.convertErrorCSS}>
							{this.props.isCurrencies ? (
								<span> list of currencies </span>
							) : (
								<span> error occured! </span>
							)}
						</div>
					</div>
					<div className='panel-footer text-secondary'> MoneyX © 2018 </div>
				</div>
			</div>
		);
	}
}

Convert.propTypes = {
	from: propTypes.string,
	to: propTypes.string,
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
