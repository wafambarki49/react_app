export default function reducer(state, action) {
    switch (action.type) {
        case "GET_POST":
            return {
                ...state,
                post: action.payload
            }
        case "GET_COMMENTS":
            return {
                ...state,
                comments: action.payload
            }
        case "SET_ERROR":
            return {
                ...state,
                err: action.payload
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}