import React, { useState, useEffect } from "react";

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
	const [winner, setWinner] = useState("");

	useEffect(() => {
		validarGanador();
		if (winner != "") {
			alert("winner is: " + winner);
		}
	});

	function validarGanador() {
		for (let i = 0; i < game.length; i = i + 3) {
			if (
				game[i] != " " &&
				game[i] == game[i + 1] &&
				game[i] == game[i + 2]
			) {
				setWinner(game[i]);
			}
		}
		for (let i = 0; i < game.length; i = i + 1) {
			if (
				game[i] != " " &&
				game[i] == game[i + 4] &&
				game[i] == game[i + 8]
			) {
				setWinner(game[i]);
			}
		}
		for (let i = 0; i < game.length; i = i + 2) {
			if (
				game[i] != " " &&
				game[i] == game[i + 2] &&
				game[i] == game[i + 4]
			) {
				setWinner(game[i]);
			}
		}
		for (let i = 0; i < game.length; i = i + 1) {
			if (
				game[i] != " " &&
				game[i] == game[i + 3] &&
				game[i] == game[i + 6]
			) {
				setWinner(game[i]);
			}
		}
	}

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
			<div className="text-center">
				<h1>Ta-Te-Ti</h1>
			</div>
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
