import React from 'react';

const AppContext = React.createContext({
    post: {},
    comments: [],
    err: false,
    loading: true
});

export default AppContext;