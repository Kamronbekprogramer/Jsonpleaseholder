import React, { useEffect, useState } from "react";
import axios from "axios";
const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response);
        setComments(response.data);
      });
  }, []);
  return (
    <div className="comments">
      <h1 className="text-center my-3">Comments</h1>
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {comments.slice(0, 13)?.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comments;
