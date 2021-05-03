import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	const [game, setGame] = useState([
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" "
	]);

	const [player, setPlayer] = useState("X");

	const marcar = i => {
		let cambioTurno = false;
		let newGame = game.map((e, index) => {
			if (i == index && e == " ") {
				cambioTurno = true;
				return player;
			} else return e;
		});
		if (cambioTurno) {
			player === "X" ? setPlayer("O") : setPlayer("X");
		}

		setGame(newGame);
	};
	return (
		<div className="container-fluid content">
			<div className="row">
				{game.map((e, i) => {
					return (
						<div
							key={i}
							className="col-4 tic-box border"
							onClick={() => {
								marcar(i);
							}}>
							<p>{e}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
