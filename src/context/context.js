import React from 'react';

const AppContext = React.createContext({
    post: {},
    comments: []
});

export default AppContext;