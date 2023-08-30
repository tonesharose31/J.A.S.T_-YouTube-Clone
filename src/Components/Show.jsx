import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Show = ({ URL }) => {
  const { videoId } = useParams();
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchRelatedVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${URL}&relatedToVideoId=${videoId}&type=video&maxResults=5`
        );
        const data = await response.json();
        setRelatedVideos(data.items || []);
      } catch (error) {
        console.error(`Error fetching related videos:`, error);
      }
    };

    fetchRelatedVideos();
  }, [videoId, URL]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the comment submission logic here.
    // For example, you can send the 'name' and 'comment' data to a server
    // and then update the 'comments' state with the new comment.
    const newComment = { name, comment };
    setComments([...comments, newComment]);

    // Clear the input fields after submission
    setName("");
    setComment("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <iframe
            width={"100%"}
            height={"315"}
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Main Video"
          ></iframe>
          <div>
            <h4>Comments</h4>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label htmlFor="comment">Comment:</label>
              <input
                type="text"
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <br />
              <input className="submit-button" type="submit" />
            </form>
            {/* Display existing comments */}
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>
                  <strong>{comment.name}:</strong> {comment.comment}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <h4>Related Videos</h4>
            <div className="related-video-list">
              {relatedVideos.map((video) => (
                <p key={video.id.videoId}>{video.snippet.title}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
