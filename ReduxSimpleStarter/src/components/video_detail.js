import React from 'react';

const VideoDetail = ({ video }) => {
  // 부모 객체에 데이터가 다 받아지면 실행되도록
  if (!video) {
    return <div> 불러오는 중... </div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div className="details-title">
          <a className="title" href="#">{video.snippet.title}</a>
        </div>
        <hr />
        <div className="details-description">
          <div>{video.snippet.description}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
