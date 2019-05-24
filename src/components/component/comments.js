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
               this.setState({ comment })
    });
  }
render(){

return  (
<div>
<ul>
        {this.state.comment.map(hit =>
          <li key={hit.id}>
            
            <p className="text-info">Email <span className="text-muted">{hit.email}</span></p>
            <p className="text-warning"> {hit.body}</p>
          </li>
        )}
      </ul>

</div>
     
 
);

}
}
export default Comments;