import React from "react";
import { Auth } from "./components/auth";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";

function App() {
    const [movieList, setMovieList] = React.useState<any>([]);

    const moviesCollectionRef = collection(db, "movies");

    React.useEffect(() => {
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
        getMovieList();
    }, []);

    return (
        <>
            <div>hello</div>

            <Auth />

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
                        </div>
                    )
                )}
            </div>
        </>
    );
}

export default App;
