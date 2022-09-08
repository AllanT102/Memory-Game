import React from "react";

const Scoreboard = (props) => {

    return (
        <div style={{display: "flex", flexDirection:"column", width: "100%", justifyContent: "center", gap: "5%", alignItems:"center"}}>
            <p style={{fontSize: "1.7em"}}>Click on pokemon that you haven't clicked on before!</p>
            <div style={{display: "flex", width: "100%", justifyContent: "center", gap: "5%"}}>
                <p style={{fontSize: "1.7em"}}>Score: {props.score}</p>
                <p style={{fontSize: "1.7em"}}>Highscore: {props.hs}</p>
            </div>
        </div>
    )
}

export default Scoreboard;