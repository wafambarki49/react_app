import React, { useState,useEffect,useContext } from 'react';
import AppContext from '../../context/context';
import {ListGroup,ListGroupItem,ListGroupItemHeading,ListGroupItemText} from 'reactstrap';

const Comments = (props) =>  {

  const {state,dispatch} = useContext(AppContext);
  const [err,setErr] = useState(false);
  const [loading,setLoading] = useState(true);

  const getComments = () => {
    const id = props.match.params.id;
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(comment => {
        dispatch({type:"GET_COMMENTS",payload: comment})
        setErr(false)
        setLoading(false)
      })
      .catch(err => {
        setErr(true)
      })
  }

  useEffect(() => {
    getComments()
  },[])
  


    let commentsView = <p>please wait while loading....</p>

    if (err) {
      commentsView = <p>Something Went Wrong</p>
    }


    if (!loading && !err ) {
      commentsView = state.comments.map(hit =>
        <ListGroupItem  key={hit.id}>
          <ListGroupItemHeading className="text-info">Email <span className="text-muted">{hit.email}</span></ListGroupItemHeading>
          <ListGroupItemText className="text-warning"> {hit.body}</ListGroupItemText>
        </ListGroupItem>
      )
    }


    return (
      <ListGroup>
          {commentsView}
      </ListGroup>


    );

  
}
export default Comments;