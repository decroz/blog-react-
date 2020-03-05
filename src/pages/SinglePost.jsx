import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { dateFormater } from "../helpers/dateFormater";

function SinglePost(props) {
  let { _id } = useParams();

  // let [state, setState] = useState({
  //     count: 0,
  //     post: {}
  // })

  let [count, setCount] = useState(0);
  let [post, setPost] = useState({});

  useEffect(() => {
    let fetchSinglePost = async () => {
      try {
        let { data: post } = await Axios.get(
          `http://localhost:5000/api/${_id}`
        );
        // setState({
        //     ...state,
        //     post
        // });
        setPost(post);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSinglePost();
  }, []);

  // const increment = () => {
  //     setCount(count + 1)
  // }
  // let { count, post } = state;
  return (
    <div>
      <h1>Single Post</h1>
      <h2>Count:{count}</h2>
      {/* <button onClick={() => increment()}>Increment</button> */}

      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* <button onClick={() => setState({ ...state, count: count + 1 })}>Increment</button> */}

      {/* <button onClick={() => setCount(initalValue => initalValue + 1)}>Increment</button> */}

      <h2>{post.title}</h2>
      <small>{dateFormater(post.createdat)}</small>
      <p>{post.body}</p>
    </div>
  );
}

export default SinglePost;
