import React from "react";
import { Data } from "./Data";
import List from "./List";

export default function Lists() {
    return(
        <div>
            {Data.map((value, index)=>{
                return <List {...value}/>
            })}
        </div>
    )
}