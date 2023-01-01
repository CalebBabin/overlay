import React from "react";

export default class Scene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			elements: [],
		};
	}

	render() {
		return (
			<div style={{
				aspectRatio: '16/9',
				width: '100%',
				height: 'auto',
				backgroundColor: 'black',
			}}>
				{this.state.elements}
			</div>
		);
	}
}