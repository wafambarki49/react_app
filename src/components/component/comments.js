import React, {Component} from 'react';
class Comments extends Component{


constructor(props) {
    super(props);
    
    this.state = {
      comment: []
    };
  }
componentDidMount() {
  const id = this.props.match.params.id;
  fetch('https://jsonplaceholder.typicode.com/comments'+'?postId='+id)
      .then(response => response.json())
      .then(comment => {
        console.log(comment) 
               this.setState({ comment })
    });
  }
render(){

return  (
<div>
<ul>
        {this.state.comment.map(hit =>
          <li key={hit.id}>
            
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