import React, { Component } from 'react';
class Posts extends Component {


  constructor(props) {
    super(props);

    this.state = {
      data: {}

    };
  }

  navigateToComments() {
    const id  = this.state.data.id;
    this.props.history.push('/'+id+'/comments')
  }

  componentDidMount() {
    const id = Math.floor(Math.random() * 100) + 1;
    console.log(this.id);
    fetch('https://jsonplaceholder.typicode.com/posts' + '/' + id)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {

    return (
      <div>

        <h1>{this.state.data.name}</h1>
        <p>{this.state.data.body}</p>
        <button onClick={this.navigateToComments.bind(this)}>Show Comments</button>
      </div>


    );

  }
}
export default Posts;