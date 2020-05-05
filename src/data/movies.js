import axios from 'axios';

// INITIAL STATE -------------------------------------------------------------------------------------------------------------------------

const initialState = {
    loading: false,
    error: "",
    data: []
};

// TYPES ---------------------------------------------------------------------------------------------------------------------------------
 
const FETCH_MOVIES_START = "FETCH_MOVIES_START";
const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";

// ACTION CREATORS -----------------------------------------------------------------------------------------------------------------------

export const getMovies = str => dispatch => {
    dispatch(setStart());
    axios
    .get(`http://www.omdbapi.com/?apikey=37404631&s=${str}`)
    .then(response => {
        if(response.data.Response === 'False'){
            dispatch(setError('No movies found'));
        } else {
            dispatch(setMovies(response.data.Search));
        }
    })
    .catch(error =>  dispatch(setError('API could not be reached')))
}

export const setError = msg => ({type: FETCH_MOVIES_ERROR, payload: msg})
export const setMovies = movies => ({type: FETCH_MOVIES_SUCCESS, payload: movies})
export const setStart = () => ({type: FETCH_MOVIES_START}
)
// REDUCERS ------------------------------------------------------------------------------------------------------------------------------

export default (state = initialState, {type,payload}) => {
    switch(type){
        case FETCH_MOVIES_START:
            return{
                ...state,
                loading: true,
                error:''
            };
        case FETCH_MOVIES_SUCCESS:
            return{
                ...state,
                loading: false,
                data: payload
            };
        case FETCH_MOVIES_ERROR:
            return{
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}