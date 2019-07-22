import AppContext from './context';

const reducer = (state = AppContext, action) => {
    switch (action.type) {
        case "GET_POST":
            return {
                ...state,
                post: action.post,
                error: action.error
            }
        case "GET_COMMENTS":
            return {
                ...state,
                comments: action.comments,
                error: action.error
            }
        default:
            return state;
    }
}

export default reducer;