import React, { useEffect, useState } from "react";
import { Login } from "./components/auth/Login";
import { Registration } from "./components/auth/Registration";
import { Wrapper } from "./components/wrapper/Wrapper";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { AuthProvider } from "./provider/AuthProvider";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./provider/ThemeProvider";

import "./App.scss";
import { PreLoader } from "./components/pre_loader/PreLoader";

export const App = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1600);
	}, []);

	return (
		<>
			<ThemeProvider>
				<Layout>
					{loading ? (
						<PreLoader />
					) : (
						<div>
							<AuthProvider>
								<Routes>
									<Route path="/login" element={<Login />} />
									<Route path="/register" element={<Registration />} />
									<Route
										path="*"
										element={
											<ProtectedRoute>
												<Wrapper />
											</ProtectedRoute>
										}
									/>
								</Routes>
							</AuthProvider>
						</div>
					)}
				</Layout>
			</ThemeProvider>
		</>
	);
};
