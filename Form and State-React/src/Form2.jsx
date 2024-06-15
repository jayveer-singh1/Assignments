import React, { useState } from "react";

export default function Form2() {
    let [number, setNumber] = useState('')

    function Count(e) {
        let value=e.target.value;
        setNumber(value.length )
    }
    return (
        <>
            <form action="">
                <input type="number" onChange={Count}/>
                <p>{number}</p>
            </form>
        </>
    )
} 

