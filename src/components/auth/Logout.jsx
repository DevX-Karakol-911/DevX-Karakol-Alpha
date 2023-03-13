import React from "react";
import { UserAuth } from "../../provider/AuthProvider.jsx";
import { useTheme } from "../../hook/useTheme.jsx";
import logout from "../../assets/logout.svg";
import logoutDark from "../../assets/logout-dark.svg";

import "./Auth.scss";

export const Logout = () => {
	const { isDark, setIsDark } = useTheme();
	const { logOut, user } = UserAuth();

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='logout__dasefae'>
			<div className='user'>
				<img src={user?.photoURL} alt="User" />
				<div className='text'>
					<p>Hi, {user?.displayName}</p>
					<p>{user?.email}</p>
				</div>
			</div>
			<div className="button" onClick={handleSignOut}>
				{isDark ? (
					<img src={logout} alt="logout" />
				) : (
					<img src={logoutDark} alt="logout" />
				)}
			</div>
		</div>
	);
};
