import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {like, dislike} from '../data/likedMovies'

export default ({imdbID}) => {
    const likedMovies = useSelector(state => state.likedMovies)
    const dispatch = useDispatch();
    const liked = likedMovies.includes(imdbID);

    const handleOnChange = e => {
        if(liked) {
            dispatch(dislike(imdbID));
        } else {
            dispatch(like(imdbID));
        }
    }

    return(
        <div>
            <input type="checkbox" checked={liked} onChange={handleOnChange}/>
            like
        </div>
    )
}