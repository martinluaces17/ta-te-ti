import React, { useState, useEffect } from "react";

import { func } from "prop-types";

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
	const [playerOne, setPlayerOne] = useState("");
	const [playerTwo, setPlayerTwo] = useState("");
	const [playerList, setPlayerList] = useState([]);

	useEffect(() => {
		validarGanador();
		if (winner == "X") {
			alert("El ganador es: " + playerList[0]);
		} else if (winner == "O") {
			alert("El ganador es: " + playerList[1]);
		}
	});

	const names = e => {
		e.preventDefault();
		setPlayerList([playerOne, playerTwo]);
	};

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
		for (let i = 2; i < game.length; i = i + 3) {
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
				<h3>{alert}</h3>
			</div>
			<div className="sidebar">
				<h4 className="text-center">Choose your weapon</h4>
				<div className="text-center">
					<form
						className="form justify-content-center"
						onSubmit={names}>
						<div className="form-group mx-sm-3 mb-2">
							<i className="fas fa-times"></i>
							<input
								type="text"
								className="form-control"
								placeholder="Ingrese su nombre"
								onChange={e => setPlayerOne(e.target.value)}
								value={playerOne}
							/>
						</div>

						<div className="form-group mx-sm-3 mb-2">
							<i className="far fa-circle" />
							<input
								type="text"
								className="form-control"
								placeholder="Ingrese su nombre"
								onChange={e => setPlayerTwo(e.target.value)}
								value={playerTwo}
							/>
						</div>
						<button type="submit" className="btn btn-success mt-3">
							Comenzar!
						</button>
					</form>
				</div>
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
