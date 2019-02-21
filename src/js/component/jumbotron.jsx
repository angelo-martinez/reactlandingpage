import React from "react";

export default class Navbar extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-4">Welcome to AngeloWorld!</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>

					<p className="lead">
						<a
							className="btn btn-primary btn-lg"
							href="#"
							role="button">
							Learn more
						</a>
					</p>
				</div>
			</div>
		);
	}
}
