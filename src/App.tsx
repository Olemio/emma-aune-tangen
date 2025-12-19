import React from "react";
import { Auth } from "./components/auth";
import { db } from "./config/firebase";
import {
    getDocs,
    collection,
    addDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

function App() {
    const [movieList, setMovieList] = React.useState<any>([]);
    const [newMovieTitle, setNewMovieTitle] = React.useState("");
    const [newReleaseDate, setNewReleaseDate] = React.useState(0);
    const [newReceivedAnOscar, setNewReceivedAnOscar] = React.useState(false);

    const moviesCollectionRef = collection(db, "movies");

    const getMovieList = async () => {
        try {
            const data = await getDocs(moviesCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setMovieList(filteredData);
        } catch (error) {
            console.error("Error fetching movie list:", error);
        }
    };

    const deleteMovie = async (id: string) => {
        try {
            const movieDoc = doc(db, "movies", id);
            await deleteDoc(movieDoc);
            getMovieList();
        } catch (error) {
            console.error("Error deleting movie:", error);
        }
    };

    React.useEffect(() => {
        getMovieList();
    }, []);

    const onSubmitMovie = async () => {
        try {
            await addDoc(moviesCollectionRef, {
                title: newMovieTitle,
                releaseDate: newReleaseDate,
                receiverdAnOscar: newReceivedAnOscar,
            });
            getMovieList();
        } catch (error) {
            console.error("Error adding movie:", error);
        }
    };

    return (
        <>
            <div>hello</div>

            <Auth />

            <div>
                <input
                    placeholder="Movie title..."
                    onChange={(e) => setNewMovieTitle(e.target.value)}
                />
                <input
                    placeholder="Release Date..."
                    type="number"
                    onChange={(e) => setNewReleaseDate(+e.target.value)}
                />
                <input
                    type="checkbox"
                    checked={newReceivedAnOscar}
                    onChange={(e) => setNewReceivedAnOscar(e.target.checked)}
                />
                <label htmlFor="">Received an Oscar</label>
                <button onClick={onSubmitMovie}>Submit movie</button>
            </div>

            <div>
                {movieList.map(
                    (movie: {
                        title: string;
                        releaseDate: number;
                        receiverdAnOscar: boolean;
                        id: string;
                    }) => (
                        <div key={movie.id}>
                            <h1>{movie.title}</h1>
                            <p>{movie.releaseDate}</p>
                            <p>{movie.receiverdAnOscar ? "Yes" : "No"}</p>
                            <button onClick={() => deleteMovie(movie.id)}>
                                Delete Movie
                            </button>
                        </div>
                    )
                )}
            </div>
        </>
    );
}

export default App;
