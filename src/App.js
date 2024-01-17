import React, { useEffect, useState } from "react";

export default function App() {
  const [resource, setResouce] = useState("posts");
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  }, [resource]);

  return (
    <>
      <div class>
        <button onClick={() => setResouce("posts")}>Post</button>
        <button onClick={() => setResouce("comments")}>Comments</button>
        <button onClick={() => setResouce("users")}>Users</button>
      </div>
      <h1>{resource}</h1>
      {item.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}
