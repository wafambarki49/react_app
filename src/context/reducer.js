export default function reducer(state, action) {
    switch (action.type) {
        case "GET_POST":
            return {
                ...state,
                post: action.payload.data,
                postErr: action.payload.err,
                postloading: action.payload.loading
            }
        case "GET_COMMENTS":
            return {
                ...state,
                comments: action.payload.data,
                commentErr: action.payload.err,
                commentloading: action.payload.loading
            }
        case "SET_POST_ERROR":
            return {
                ...state,
                postErr: action.payload
            }
        case "SET_COMMENT_ERROR":
            return {
                ...state,
                commentErr: action.payload
            }
        default:
            return state;
    }
}