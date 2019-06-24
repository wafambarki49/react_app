import React from 'react';

const AppContext = React.createContext({
    post: {},
    comments: [],
    postErr: false,
    commentErr: false,
    postloading: true,
    commentloading: true
});

export default AppContext;