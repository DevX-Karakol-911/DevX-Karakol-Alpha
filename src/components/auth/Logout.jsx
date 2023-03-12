import React from "react";
import { UserAuth } from "../../provider/AuthProvider.jsx";
import icon from "../../assets/arrow-right-from-bracket-solid.svg";

import scss from "./Auth.module.scss";

export const Logout = () => {
	const { logOut, user } = UserAuth();

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={scss.logout}>
			<div className={scss.user}>
				<img src={user?.photoURL} alt="User" />
				<div className={scss.text}>
					<p>Hi, {user?.displayName}</p>
					<p>{user?.email}</p>
				</div>
			</div>
			<img
				className={scss.button}
				src={icon}
				alt="Logout"
				onClick={handleSignOut}
			/>
		</div>
	);
};
