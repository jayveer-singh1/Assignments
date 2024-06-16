import React, { useState } from "react";

export default function From1() {
    let [name, setName] = useState('')
    let [password, setPassword] = useState('')
    let [textArea, setTextArea] = useState('')
    let [number, setNumber] = useState('')
    let [search, setSearch]=useState('')

    function changeName(e) {
        setName(e.target.value)
    }
    return (
        <form action="">
            <label htmlFor="">Name:-
                <input type="text" on onChange={changeName} value={name} />
            </label>
            <p>{name}</p>

            <label htmlFor="">Password:-
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <p>{password}</p>

            <label htmlFor="">Address:-<br />
                <textarea onChange={(e) => (setTextArea(e.target.value))}></textarea>
            </label>
            <p>{textArea}</p>

            <label htmlFor="">Phone No.:-
                <input type="number" onChange={(e) => setNumber(e.target.value)} />
            </label>
            <p>{number}</p>

            <label htmlFor="">Search:-
                <input type="search" onChange={(e)=>setSearch(e.target.value)}/>
            </label>
            <p>{search}</p>

            <input type="submit"  onClick={(e)=>e.preventDefault()}/>
            <br />
            <br />
            <br />
            <br />
            <hr />
            <br />
        </form>
    )
} 
