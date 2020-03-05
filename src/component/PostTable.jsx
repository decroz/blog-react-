import React from "react";
import { Table, Button } from "react-bootstrap";
import { dateFormater } from "../helpers/dateFormater";

export default function PostTable(props) {
  const { posts, handleShow } = props;
  console.log(handleShow);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => {
            return (
              <tr key={post._id}>
                <td>{index + 1}</td>
                <td>{post.title}</td>
                <td>{dateFormater(post.createdat)}</td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleShow(post._id)}
                  >
                    Edit
                  </Button>{" "}
                  <Button variant="secondary" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
