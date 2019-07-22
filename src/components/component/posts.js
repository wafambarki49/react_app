import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { getNewPost } from '../../context/actions';
import { connect } from "react-redux";

class Posts extends Component {

  componentDidMount() {
    const id = Math.floor(Math.random() * 100) + 1;
    this.props.onGetPost(id);
  }

  navigateToComments = (id) => {
    this.props.history.push('/' + id + '/comments')
  }


  render() {

    let postView = <p>please wait while loading....</p>

    if (this.props.error) {
      postView = <p className="text-warning">Something Went Wrong</p>
    }

    if (!this.props.error) {
      postView =
        <div>
          <h1 className="text-success">{this.props.post.title}</h1>
          <p className="text-info">{this.props.post.body}</p>
          <Button color="primary" onClick={(id) => this.navigateToComments(this.props.post.id)}>Show Comments</Button>

        </div>
    }

    return (
      <div>
        {postView}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    post: state.post,
    error: state.error
  };
};

const mapDisptachToProps = dispatch => {
  return {
    onGetPost: id => dispatch(getNewPost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(Posts);