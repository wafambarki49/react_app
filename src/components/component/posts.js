import React, { useState, useEffect, useContext } from 'react';
import { Button } from 'reactstrap';
import AppContext from '../../context/context';
const Posts = (props) => {

  const { state, dispatch } = useContext(AppContext);

  const getData = () => {
    const id = Math.floor(Math.random() * 100) + 1;
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        const obj = { data: data, err: false, loading: false}

        dispatch({ type: "GET_POST", payload: obj })
      })
      .catch(error => dispatch({ type: "SET_POST_ERROR", payload: true })
      );
  }

  const navigateToComments = () => {
    const id = state.post.id;
    props.history.push('/' + id + '/comments')
  }

  useEffect(() => {
    getData();
  }, {});



  let postView = <p>please wait while loading....</p>

  if (state.postErr) {
    postView = <p className="text-warning">Something Went Wrong</p>
  }

  if (!state.postloading && !state.postErr) {
    postView =
      <div>
        <h1 className="text-success">{state.post.title}</h1>
        <p className="text-info">{state.post.body}</p>
        <Button color="primary" onClick={navigateToComments.bind(this)}>Show Comments</Button>

      </div>
  }


  return (
    <div>
      {postView}
    </div>


  );


}
export default Posts;