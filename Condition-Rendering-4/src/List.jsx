import React from "react";
import "./Style.css"


export default function List({ item, isPacked, isHeavy }) {
    return (
        <div className="List" style={{ border: "2px solid", margin: "10px", padding: "10px" }}>
            <p>Item name:- {item}</p>
            <p style={{ backgroundColor: isPacked ? "green" : "", display: "inline-block" }}>Packed:- {isPacked}</p>
            {isPacked ? <img src="https://w7.pngwing.com/pngs/405/55/png-transparent-checked-logo-check-mark-green-check-angle-leaf-triangle-thumbnail.png" /> : <img src="https://cdn-icons-png.freepik.com/512/169/169779.png" />}
            <br />
            <p style={{ backgroundColor: isHeavy ? "black" : "", color: isHeavy ? "white" : '', display: "inline-block" }}>Heavy{isHeavy}</p>
        </div>
    )
}