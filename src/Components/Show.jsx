import React from "react";
import { useParams } from "react-router-dom";
const Show = () => {
  const { videoId } = useParams();
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <iframe
        width={"420"}
        height={"315"}
        src={`https://www.youtube.com/embed/${videoId}`}
      ></iframe>
      <div>
        <h4>Comments</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <label htmlFor="comment">Comment:</label>
          <input type="text" id="comment" />
          <br />
          <input className="submit-button" type="submit" />
        </form>
      </div>
    </div>
  );
};
export default Show;


