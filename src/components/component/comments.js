import React, { Component } from 'react';
import {ListGroup,ListGroupItem,ListGroupItemHeading,ListGroupItemText} from 'reactstrap';
class Comments extends Component {


  constructor(props) {
    super(props);

    this.state = {
      comment: [],
      err: false,
      loading: true
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(comment => {
        this.setState({ comment, loading: false, err: false })
      })
      .catch(err => {
        this.setState({ err: true })
      })

  }



  render() {
    let commentsView = <p>please wait while loading....</p>

    if (this.state.err) {
      commentsView = <p>Something Went Wrong</p>
    }


    if (this.state.loading === false && this.state.err === false) {
      commentsView = this.state.comment.map(hit =>
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
}
export default Comments;