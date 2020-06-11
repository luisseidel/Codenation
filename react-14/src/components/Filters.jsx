import React from 'react';


class Filters extends React.Component {
	render() {
	return ( 
		<div data-testid="filters" className="container">
            <section className="filters">
			{this.props.children}
			</section>
		</div>
	)}
}

export default Filters;
