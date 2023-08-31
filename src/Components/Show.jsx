import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Show = () => {
  const { videoId } = useParams();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const commentTotal = comments.length;

  const currentDate = new Date();
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const timestamp =
    currentMonth +
    1 +
    "-" +
    currentDayOfMonth +
    "-" +
    currentYear;

  const handleSubmit = (e) => {
    e.preventDefault();


    const newComment = { name, comment };
    setComments([...comments, newComment]);

    setName("");
    setComment("");
  };

  return (
    <div>
      <div>
        <iframe
          width={"700"}
          height={"400"}
          src={`https://www.youtube.com/embed/${videoId}`}
        ></iframe>
      </div>
      <div className="comments">
        <h4>{commentTotal} Comments</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
          required
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="comment">Comment:</label>
          <input
          required
            type="text"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br />
          <input className="submit-button" type="submit" />
        </form>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
                <p>{timestamp}</p>
              <strong>{comment.name}:</strong> {comment.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Show;
