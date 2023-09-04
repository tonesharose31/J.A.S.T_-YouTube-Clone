import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Show = ({ URL }) => {
  const { videoId } = useParams();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [video, setVideo] = useState({});
  const [showAllDetails, setShowAllDetails] = useState(false);
  const commentTotal = comments.length;

  useEffect(() => {
    const vidDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${videoId}&key=${URL}`
        );
        const data = await response.json();
        setVideo(data.items[0].snippet);
      } catch (error) {
        console.error(`Error fetching initial search results:`, error);
      }
    };

    vidDetails();
  }, []);

  const toggleContent = () => {
    setShowAllDetails(!showAllDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const currentHours = currentDate.getHours();
    const currentMinutes =
      (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();
    const amOrPm = currentHours >= 12 ? "PM" : "AM";
    const formattedHours = currentHours % 12 || 12;

    const timeStamp =
      currentMonth +
      1 +
      "-" +
      currentDayOfMonth +
      "-" +
      currentYear +
      " " +
      formattedHours +
      ":" +
      currentMinutes +
      " " +
      amOrPm;

    const newComment = { name, comment, timeStamp };
    setComments([newComment, ...comments]);

    setName("");
    setComment("");
  };

  return (
    <div className="show-vid" style={{ paddingTop: "60px" }}>
      <div>
        <iframe
          width={"700"}
          height={"400"}
          src={`https://www.youtube.com/embed/${videoId}`}
        ></iframe>
      </div>
      <h3>{video.title}</h3>
      <div className="vid-details">
        <div class="border border-dark rounded" style={{ width: "700px", padding: "5px", backgroundColor: "lightgray" }}>
          <p>Posted On: {video.publishedAt}</p>
          <p>
            Description:{" "}
            {video.description
              ? showAllDetails
                ? video.description
                : video.description.slice(0, 50) + "..."
              : ""}
          </p>
          {video.description && video.description.length > 50 && (
            <span onClick={toggleContent}>
              {showAllDetails ? "Show Less..." : "Show More..."}
            </span>
          )}
        </div>
      </div>
      <hr />
      <div className="comments" style={{ paddingTop: "10px" }}>
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
          <label htmlFor="comment" style={{ paddingTop: "10px" }}>
            Comment:
          </label>
          <input
            required
            type="text"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br />
          <input className="btn btn-primary" type="submit" style={{ marginTop: "10px" }}/>
        </form>
        <hr />
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
             <strong>{comment.name}</strong> <em class="text-secondary" style={{ fontSize: "12px", marginLeft:"15px" }}>{comment.timeStamp}</em>
             <br />
              {comment.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Show;
