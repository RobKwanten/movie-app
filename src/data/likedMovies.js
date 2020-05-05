// INITIAL STATE -------------------------------------------------------------------------------------------------------------------------

export const initialState = ['tt0387564','test', 'test']

// TYPES ---------------------------------------------------------------------------------------------------------------------------------

const LIKE = 'LIKE';
const DISLIKE = 'DISLIKE';

// ACTION CREATORS -----------------------------------------------------------------------------------------------------------------------

export const like = imdbID => ({
    type: LIKE,
    payload: imdbID
})

export const dislike = imdbID => ({
    type: DISLIKE,
    payload: imdbID
})

// REDUCERS ------------------------------------------------------------------------------------------------------------------------------

export default (state = initialState, {type,payload}) => {
    switch(type){
        case LIKE:
            return[...state, payload]
        case DISLIKE:
            return state.filter(imbdID=>imbdID!==payload)   
        default:
            return state;
    }
} 