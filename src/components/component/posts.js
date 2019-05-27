import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
const Posts = (props) => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(false);

  const getData = () => {
    const id = Math.floor(Math.random() * 100) + 1;
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setError(false);
        setLoading(false);
      })
      .catch(error => setError(true));
  }

  const navigateToComments = () => {
    const id = data.id;
    props.history.push('/' + id + '/comments')
  }

  useEffect(() => {
    getData();
  }, {});



  let postView = <p>please wait while loading....</p>

  if (err) {
    postView = <p className="text-warning">Something Went Wrong</p>
  }

  if (!loading && !err) {
    postView =
      <div>
        <h1 className="text-success">{data.title}</h1>
        <p className="text-info">{data.body}</p>
        <Button color="primary" onClick={navigateToComments.bind(this)}>Show Comments</Button>

      </div>
  }


  return (
    <div>
      {postView}
    </div>


  );


}
export default Posts;