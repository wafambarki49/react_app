import React, {Component} from 'react';
class Comments extends Component{


constructor(props) {
    super(props);
    
    this.state = {
      comment: []

    };
  }
componentDidMount() {
    
    fetch('https://jsonplaceholder.typicode.com/comments'+'?postId=1')
      .then(response => response.json())
      .then(comment => this.setState({ comment }));
  }
render(){

return  (
<div>
<ul>
        {this.state.comment.map(hit =>
          <li key={hit.postId}>
            
            <p> {hit.email}</p>
            <p> {hit.body}</p>
          </li>
        )}
      </ul>

</div>
     
 
);

}
}
export default Comments;