import React, { useEffect } from 'react';
import { Button } from 'reactstrap';
import { getNewPost } from '../../context/actions';
import { useDispatch, useSelector } from "react-redux";

const Posts = props => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.post);
  const error = useSelector(state => state.error);

  const navigateToComments = (id) => {
    props.history.push('/' + id + '/comments')
  }
  useEffect(() => {
    const id = Math.floor(Math.random() * 100) + 1;
    dispatch(getNewPost(id));

  }, {});
  let postView = <p>please wait while loading....</p>

  if (error) {
    postView = <p className="text-warning">Something Went Wrong</p>
  }

  if (!error) {
    postView =
      <div>
        <h1 className="text-success">{post.title}</h1>
        <p className="text-info">{post.body}</p>
        <Button color="primary" onClick={(id) => navigateToComments(post.id)}>Show Comments</Button>

      </div>
  }
  return (<div>{postView}</div>);






}
export default Posts;