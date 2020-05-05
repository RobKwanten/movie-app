import React from "react";
import { initialState } from "../data/likedMovies"

export default () => {
    console.log(initialState)
    return (
        <ul>
            {initialState.map(Movie=><li>{Movie}</li>)}
        </ul>
    )
}