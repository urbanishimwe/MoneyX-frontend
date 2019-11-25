import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='panel-container bg-white'>
					<h1 className='text-secondary'>404</h1>
					<p className='text-secondary'> Page Not Found! </p>
					<Link to='/' className='text-decoration-none'>
						Back to Homepage
					</Link>
				</div>
			</React.Fragment>
		);
	}
}

export default NotFound;
