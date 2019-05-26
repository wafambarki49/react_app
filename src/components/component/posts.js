import React, { Component } from 'react';
class Posts extends Component {


  constructor(props) {
    super(props);

    this.state = {
      data: {},
      loading: true,
      err: false
    };
  }

  navigateToComments() {
    const id = this.state.data.id;
    this.props.history.push('/' + id + '/comments')
  }

  componentDidMount() {
    const id = Math.floor(Math.random() * 100) + 1;
    fetch('https://jsonplaceholder.typicode.com/post/' + id)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        this.setState({ data, loading: false, err: false })
      })
      .catch(error => this.setState({ err: true }));
  }

  render() {

    let postView = <p>please wait while loading....</p>

    if (this.state.err) {
      postView = <p>Something Went Wrong</p>
    }

    if (!this.state.loading && !this.state.err) {
      postView =
        <div>
          <h1 className="text-success">{this.state.data.title}</h1>
          <p className="text-info">{this.state.data.body}</p>
          <button className="btn btn-primary" onClick={this.navigateToComments.bind(this)}>Show Comments</button>
        </div>
    }


    return (
      <div>
        {postView}
      </div>


    );

  }
}
export default Posts;