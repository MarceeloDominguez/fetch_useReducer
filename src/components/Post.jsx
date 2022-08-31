import React, { useReducer, useState } from "react";
import { ACTION_TYPES } from "../Reducers/actionTypes";
import { initialState, postReducer } from "../Reducers/postReducer";

export default function Post() {
  //   const [post, setPost] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(false);

  //   const handleFetch = () => {
  //     setLoading(true);
  //     setError(false);
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setLoading(false);
  //         setPost(data);
  //       })
  //       .catch((err) => {
  //         setLoading(false);
  //         setError(true);
  //       });
  //   };

  //   const handleFetch = async () => {
  //     setLoading(true);
  //     setError(false);
  //     const data = await fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .catch((err) => {
  //         setLoading(false);
  //         setError(true);
  //       });

  //     setLoading(false);
  //     setPost(data);
  //   };

  //Con useReducer

  const [postState, dispatch] = useReducer(postReducer, initialState);
  const { loading, post, error } = postState;

  const handleFetch = async () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch({
        type: ACTION_TYPES.FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: ACTION_TYPES.FETCH_ERROR });
    }
  };

  return (
    <div>
      <h1>Fetch con State y Reducer!</h1>
      <button onClick={handleFetch}>
        {loading ? "Loading..." : "Obtener los datos"}
      </button>
      {post?.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
      <br />
      <br />
      <br />
      <span>{error && "Error al cargar los datos!"}</span>
    </div>
  );
}
