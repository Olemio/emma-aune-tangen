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
    const [isOpen, setIsOpen] = React.useState(false);

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
                <button className="cursor-pointer" onClick={signInWithGoogle}>
                    Logg inn
                </button>
            ) : (
                <div className="relative">
                    <img
                        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
                        className="rounded-full h-8 cursor-pointer"
                        src={user.photoURL ?? ""}
                        alt="profile"
                    />
                    {isOpen && user.displayName ? (
                        <div className="absolute flex flex-col gap-4 w-40 right-0 top-10 bg-slate-50 rounded border border-slate-200 p-4 text-sm">
                            <p className="text-center truncate">
                                {user.displayName}
                            </p>
                            <button
                                className="rounded border border-slate-200 cursor-pointer"
                                onClick={logout}
                            >
                                Logout
                            </button>
                        </div>
                    ) : null}
                </div>
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
