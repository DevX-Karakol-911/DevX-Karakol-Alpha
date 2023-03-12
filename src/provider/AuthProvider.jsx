import {
	useContext,
	createContext,
	useEffect,
	useState,
	useMemo,
	useCallback,
} from "react";
import {
	GoogleAuthProvider,
	signInWithRedirect,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const UserContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const provider = useMemo(() => {
		return new GoogleAuthProvider();
	}, []);

	const googleSignIn = useCallback(() => {
		// signInWithRedirect(auth, provider);
		signInWithPopup(auth, provider);
	}, [provider]);

	const logOut = useCallback(() => {
		signOut(auth);
	}, []);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			// console.log("User", currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<UserContext.Provider value={{ googleSignIn, logOut, user }}>
			{children}
		</UserContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(UserContext);
};
