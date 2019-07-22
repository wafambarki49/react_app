export const GetPost = (post,error) => {
    return {
        type: 'GET_POST',
        post: post,
        error: error
    }
}

export const GetComments = (comments,error) => {
    return {
        type: 'GET_COMMENTS',
        comments: comments,
        error: error
        }
}

export const getNewPost = (id) => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(post => {
                dispatch(GetPost(post,false))
            })
            .catch(error => dispatch(GetPost({},true)));
    }
};

export const getAllComments = (id) => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(comments => {
                if (comments) {
                    dispatch(GetComments(comments,false))
                } else {
                    dispatch(GetComments([],true))
                }
            })
            .catch(error => {
                dispatch(GetComments([],true))
            });
    }
};