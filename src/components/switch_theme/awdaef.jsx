import React, { useEffect, useState } from "react";
import { db } from "../../../../firebaseConfig.js";
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	query,
	updateDoc
} from "firebase/firestore";

import "../../Style.scss";
import { PreLoader } from "../../../../pre_loader/PreLoader.jsx";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminFullStack = () => {
	const [participants, setParticipants] = useState([]);
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(true);
	const [buttonText, setButtonText] = useState("Copy Users 💎");

	// Add User
	const createTodo = async (e) => {
		e.preventDefault(e);
		if (input === "") {
			alert("Please enter a valid User");
			return;
		}
		const [first, last] = input.split(" ");
		await addDoc(collection(db, "FullStack"), {
			first,
			last,
			status: "Waiting"
		});
		setInput("");
	};

	// Read users from firebase
	useEffect(() => {
		const q = query(collection(db, "FullStack"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let todosArr = [];
			querySnapshot.forEach((doc) => {
				todosArr.push({ ...doc.data(), id: doc.id });
			});
			todosArr.sort((a, b) => (a.first > b.first ? 1 : -1));
			setParticipants(todosArr);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	const handleClick = (status, name) => {
		const updatedParticipants = participants.map((participant) => {
			if (participant.first === name) {
				updateDoc(doc(db, "FullStack", participant.id), { status });
				return { ...participant, status };
			}
			return participant;
		});
		setParticipants(updatedParticipants);
	};

	const handleCopyUser = (name) => {
		const userName = `User ${name} has been copied.`;
		navigator.clipboard.writeText(name);
		toast(userName, { autoClose: 2000 });
	};

	const presentAll = () => {
		const updatedParticipants = participants.map((participant) => {
			updateDoc(doc(db, "FullStack", participant.id), { status: "Present" });
			return { ...participant, status: "Present" };
		});
		setParticipants(updatedParticipants);
	};
	const absentAll = () => {
		const updatedParticipants = participants.map((participant) => {
			updateDoc(doc(db, "FullStack", participant.id), { status: "Absent" });
			return { ...participant, status: "Absent" };
		});
		setParticipants(updatedParticipants);
	};

	const excusedAll = () => {
		const updatedParticipants = participants.map((participant) => {
			updateDoc(doc(db, "FullStack", participant.id), { status: "Excused" });
			return { ...participant, status: "Excused" };
		});
		setParticipants(updatedParticipants);
	};

	const resetAll = () => {
		const updatedParticipants = participants.map((participant) => {
			updateDoc(doc(db, "FullStack", participant.id), { status: "Waiting" });
			return { ...participant, status: "Waiting" };
		});
		setParticipants(updatedParticipants);
	};

	const deleteAll = async () => {
		participants.forEach(async (participant) => {
			await deleteDoc(doc(db, "FullStack", participant.id));
		});
		setParticipants([]);
	};

	// Delete todo
	const deleteTodo = async (id) => {
		await deleteDoc(doc(db, "FullStack", id));
	};

	const copyUsers = () => {
		let presentUsers = "";
		if (presentParticipants.length > 0) {
			presentUsers = presentParticipants
				.map(
					(participant, index) =>
						`${index + 1}. ${participant.first} ${participant.last}`
				)
				.join("\n");
		}

		const absentUsers =
			absentParticipants.length > 0
				? absentParticipants
						.map(
							(participant, index) =>
								`${index + 1}. ${participant.first} ${participant.last}`
						)
						.join("\n")
				: "";

		const excusedUsers =
			excusedParticipants.length > 0
				? excusedParticipants
						.map(
							(participant, index) =>
								`${index + 1}. ${participant.first} ${participant.last}`
						)
						.join("\n")
				: "";

		const clipboardText = `*🚀Full-Stack🚀*\n\n${
			presentUsers !== "" ? `_*Present✅*_\n${presentUsers}\n\n` : ""
		}${absentUsers !== "" ? `_*Absent❌*_\n${absentUsers}\n\n` : ""}${
			excusedUsers !== "" ? `_*Excused⚠️*_\n${excusedUsers}` : ""
		}`;

		navigator.clipboard.writeText(clipboardText);

		setButtonText("Copied!🥳");

		setTimeout(() => {
			setButtonText("Copy Users 💎");
		}, 1000);
	};

	const peopleParticipants = participants.filter(
		(participant) => participant.status === "Waiting"
	);
	const presentParticipants = participants.filter(
		(participant) => participant.status === "Present"
	);
	const excusedParticipants = participants.filter(
		(participant) => participant.status === "Excused"
	);
	const absentParticipants = participants.filter(
		(participant) => participant.status === "Absent"
	);

	return (
		<>
			<div className="all__users__list">
				<div className="container">
					<h1 className="attendance">Attendance for Elcho911📊</h1>
					<ToastContainer />
					<form onSubmit={createTodo}>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type="text"
							placeholder="First name & Last name"
						/>
						<button>Added ➕</button>
					</form>
					<div>
						<div className="all__buttons">
							<button className="top__button copy__button" onClick={copyUsers}>
								{buttonText}
							</button>
							<button
								className="top__button present__button"
								onClick={presentAll}
							>
								Present All ✅
							</button>
							<button className="top__button" onClick={absentAll}>
								Absent All ❌
							</button>
							<button className="top__button" onClick={excusedAll}>
								Excused All ⚠️
							</button>
							<button className="top__button reset__button" onClick={resetAll}>
								Reset All ♻️
							</button>
							<button className="top__button" onClick={deleteAll}>
								Delete All 🚫
							</button>
						</div>

						<h1>🚀Full-Stack🚀</h1>
						<div className="render__flex">
							<div className="render__block">
								<div className="render__users">
									<h2>Present✅</h2>
									{loading ? (
										<PreLoader />
									) : (
										<>
											{presentParticipants.map((participant, index) => (
												<div
													className="render__users__list present"
													first={participant.first}
													last={participant.last}
													key={participant.id}
													onClick={() => handleCopyUser(participant.first)}
												>
													<p>
														{index + 1}. {participant.first} {participant.last}
													</p>
													<div>
														<button
															onClick={(event) => {
																event.stopPropagation();
																handleClick("Absent", participant.first);
															}}
														>
															<span>Absent</span> ❌
														</button>
														<button
															onClick={(event) => {
																event.stopPropagation();
																handleClick("Excused", participant.first);
															}}
														>
															<span>Excused</span> ⚠️
														</button>
														<button
															onClick={(event) => {
																event.stopPropagation();
																handleClick("Waiting", participant.first);
															}}
														>
															<span>Reset</span> ♻️
														</button>
													</div>
												</div>
											))}
										</>
									)}
								</div>

								<div className="render__users">
									<h2>Absent❌</h2>
									{loading ? (
										<PreLoader />
									) : (
										<>
											{absentParticipants.map((participant, index) => (
												<div
													className="render__users__list absent"
													first={participant.first}
													last={participant.last}
													key={participant.id}
													onClick={() => handleCopyUser(participant.first)}
												>
													<p>
														{index + 1}. {participant.first} {participant.last}
													</p>
													<div>
														<button
															onClick={(event) => {
																event.stopPropagation();
																handleClick("Present", participant.first);
															}}
														>
															<span>Present</span> ✅
														</button>
														<button
															onClick={(event) => {
																event.stopPropagation();
																handleClick("Excused", participant.first);
															}}
														>
															<span>Excused</span> ⚠️
														</button>
														<button
															onClick={(event) => {
																event.stopPropagation();
																handleClick("Waiting", participant.first);
															}}
														>
															<span>Reset</span> ♻️
														</button>
													</div>
												</div>
											))}
										</>
									)}
								</div>

								<div className="render__users">
									<h2>Excused⚠️</h2>
									{loading ? (
										<PreLoader />
									) : (
										<>
											{excusedParticipants.map((participant, index) => (
												<div
													className="render__users__list excused"
													first={participant.first}
													last={participant.last}
													key={participant.id}
													onClick={() => handleCopyUser(participant.first)}
												>
													<p>
														{index + 1}. {participant.first} {participant.last}
													</p>
													<div>
														<button
															onClick={(event) => {
																event.stopPropagation();
																handleClick("Present", participant.first);
															}}
														>
															<span>Present</span> ✅
														</button>
														<button
															onClick={(event) => {
																event.stopPropagation();
																handleClick("Absent", participant.first);
															}}
														>
															<span>Absent</span> ❌
														</button>
														<button
															onClick={(event) => {
																event.stopPropagation();
																handleClick("Waiting", participant.first);
															}}
														>
															<span>Reset</span> ♻️
														</button>
													</div>
												</div>
											))}
										</>
									)}
								</div>
							</div>

							{/* ! Waiting👤 */}
							<div className="render__block">
								<div className="render__users">
									<h2>Waiting👤</h2>
									{loading ? (
										<PreLoader />
									) : (
										<>
											{peopleParticipants.map((participant, index) => (
												<div
													className="render__users__list waiting"
													first={participant.first}
													last={participant.last}
													key={participant.id}
													onClick={() => handleCopyUser(participant.first)}
												>
													<p>
														{index + 1}. {participant.first} {participant.last}
													</p>
													<div>
														<button
															onClick={(event) => {
																event.stopPropagation();
																handleClick("Present", participant.first);
															}}
														>
															<span>Present</span> ✅
														</button>
														<button
															onClick={(event) => {
																event.stopPropagation();
																handleClick("Absent", participant.first);
															}}
														>
															<span>Absent</span> ❌
														</button>
														<button
															onClick={(event) => {
																event.stopPropagation();
																handleClick("Excused", participant.first);
															}}
														>
															<span>Excused</span> ⚠️
														</button>
														<span
															onClick={(event) => {
																event.stopPropagation();
																deleteTodo(participant.id);
															}}
														>
															...
														</span>
													</div>
												</div>
											))}
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};