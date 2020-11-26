import React from "react"
import './css/HugeTitleBar.css'

function HugeTitleBar(props) {
    return (
        <div className={"titleBar"}>
            <h1 className="title"> Lottery Sim</h1>
            <p>See just how bad your odds are :)</p>
        </div>
    )
}

export default HugeTitleBar