import React, { useEffect } from 'react';
import {ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { getAllComments } from '../../context/actions';
import { useDispatch, useSelector } from "react-redux";

const Comments = props => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments);
  const { id } = props.match.params;

  const error = useSelector(state => state.error);
  useEffect(() => {
    dispatch(getAllComments(id));

  }, [dispatch,id]);
  let commentsView = <p>please wait while loading....</p>

  if (error) {
    commentsView = <p>Something Went Wrong</p>
  }


  if (!error) {
    commentsView = comments.map(hit =>
      <ListGroupItem key={hit.id}>
        <ListGroupItemHeading className="text-info">Email <span className="text-muted">{hit.email}</span></ListGroupItemHeading>
        <ListGroupItemText className="text-warning"> {hit.body}</ListGroupItemText>
      </ListGroupItem>
    )
  }
  return (<div>{commentsView}</div>);
}

export default Comments;