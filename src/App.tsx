import React from "react";

function App() {
    const [test, setTest] = React.useState(0);
    return (
        <>
            <div>hello</div>
            {test}
            <button onClick={() => setTest((prev) => prev + 1)}></button>
        </>
    );
}

export default App;
