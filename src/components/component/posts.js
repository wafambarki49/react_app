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
      .then(data => {
        this.setState({ data })
      });
  }

  render() {

    return (
      <div>

        <h1 className="text-success">{this.state.data.title}</h1>
        <p className="text-info">{this.state.data.body}</p>
        <button className="btn btn-primary" onClick={this.navigateToComments.bind(this)}>Show Comments</button>
      </div>


    );

  }
}
export default Posts;