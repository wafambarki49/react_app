import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { getAllComments } from '../../context/actions';
import { connect } from "react-redux";


class Comments extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.onGetComments(id);
  }

  render() {

    let commentsView = <p>please wait while loading....</p>

    if (this.props.error) {
      commentsView = <p>Something Went Wrong</p>
    }


    if (!this.props.error) {
      commentsView = this.props.comments.map(hit =>
        <ListGroupItem key={hit.id}>
          <ListGroupItemHeading className="text-info">Email <span className="text-muted">{hit.email}</span></ListGroupItemHeading>
          <ListGroupItemText className="text-warning"> {hit.body}</ListGroupItemText>
        </ListGroupItem>
      )
    }

    return (
      <ListGroup>
        {commentsView}
      </ListGroup>
    )
  }

}

const mapStateToProps = state => {
  return {
    comments: state.comments,
    error: state.error
  };
};

const mapDisptachToProps = dispatch => {
  return {
    onGetComments: id => dispatch(getAllComments(id))
  };
};


export default connect(
  mapStateToProps,
  mapDisptachToProps
)(Comments);