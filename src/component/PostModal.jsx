import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Axios from "axios";
import { toast } from "react-toastify";

export default function PostModal(props) {
  const { post: setPost } = useState({});
  const { show, handleClose, idToBeUpdated } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchPost = async () => {
        let { data: post } = await Axios.get(
          `http://localhost:5000/api/${idToBeUpdated}`
        );
        setTitle(post.title);
        setBody(post.body);
        setLoading(false);
      };

      if (idToBeUpdated) {
        setTimeout(() => {
          fetchPost();
        }, 5000);
      }
    } catch (error) {
      setLoading(false);
      toast.error("error");
    }

    return () => {
      console.log("clen up");
      setTitle("");
      setBody("");
      setLoading(true);
    };
  }, [idToBeUpdated]);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            "Loafing..."
          ) : (
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your blog title..."
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Body</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  placeholder="Start writing your post..."
                  value={body}
                  onChange={e => setBody(e.target.value)}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
