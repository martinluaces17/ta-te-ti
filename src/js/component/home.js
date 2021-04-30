import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<h1>Ta-Te-Ti</h1>
			<div className="container">
				<div className="row">
					<button className="col-4 col1"></button>
					<button className="col-4 col2"></button>
					<button className="col-4 col3"></button>
				</div>
				<div className="row">
					<button className="col-4 col4"></button>
					<button className="col-4 col5"></button>
					<button className="col-4 col6"></button>
				</div>
				<div className="row">
					<button className="col-4 col7"></button>
					<button className="col-4 col8"></button>
					<button className="col-4 col9"></button>
				</div>
			</div>
		</div>
	);
}
