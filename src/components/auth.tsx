import React from "react";
import { auth, googleProvider } from "../config/firebase";
import {
    // createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";

export const Auth = () => {
    const [user, setUser] = React.useState(auth.currentUser);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("Auth state changed:", currentUser);
        });

        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <>
            {!user ? (
                <button onClick={signInWithGoogle}>Sign in with Google</button>
            ) : (
                <>
                    <p className="">{user.displayName}</p>
                    <img
                        onClick={logout}
                        className="rounded-full h-8 cursor-pointer"
                        src={user.photoURL ?? ""}
                        alt="profile"
                    />
                </>
            )}
        </>
    );
};

// export const AuthTemp = () => {
//     const [email, setEmail] = React.useState("");
//     const [password, setPassword] = React.useState("");

//     const signIn = async () => {
//         try {
//             await createUserWithEmailAndPassword(auth, email, password);
//         } catch (error) {
//             console.error("Error signing in:", error);
//         }
//     };
//     const signInWithGoogle = async () => {
//         try {
//             await signInWithPopup(auth, googleProvider);
//         } catch (error) {
//             console.error("Error signing in with Google:", error);
//         }
//     };

//     const logout = async () => {
//         try {
//             await signOut(auth);
//         } catch (error) {
//             console.error("Error logging out:", error);
//         }
//     };

//     return (
//         <div>
//             <input
//                 type="email"
//                 placeholder="Email..."
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="Password..."
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={signIn}>Sign in</button>

//             <button onClick={signInWithGoogle}>Sign in with Google</button>

//             <button onClick={logout}>Logout</button>
//         </div>
//     );
// };
