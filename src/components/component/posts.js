import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';
class Posts extends Component{


constructor(props) {
    super(props);
    
    this.state = {
      data: {}

    };
  }
componentDidMount() {
    const id = Math.floor(Math.random() * 100) + 1;
console.log(this.id);
    fetch('https://jsonplaceholder.typicode.com/posts'+'/'+id)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

render(){
console.log(id)
return  (
<div>

<h1>{this.state.data.name}</h1>
    <p >{this.state.data.body}</p>
   
        <Link to="/comment" id={this.componentDidMount.id}>
        show comments</Link>
       
</div>
     
 
);

}
}
export default Posts;