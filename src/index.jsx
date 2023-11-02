import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";   

function App() {
    const [count, increment] = useState(0);
    useEffect(() =>{
        window.alert("გვერდი ჩაიტვირთა");
    }, [])

    useEffect(() =>{
        window.alert("გვერდი განახლდა");
    }, [count,])

    return(
        <React.Fragment>
            <button type="button" onClick={() => increment(count + 1)}>Click</button>
            <p>{count}</p>
        </React.Fragment>
    )
}


const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);