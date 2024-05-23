import React, { useState } from 'react';
import styled from 'styled-components';
import UploadVideo from './component/UploadVideo';
import VideoList from './component/VideoList';
import './App.css'; // Importing the CSS for the font

const Container = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: #141414;
  color: #fff;
  padding: 20px;
  text-align: center; /* Center the content */
`;

const Title = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 48px;
  color: #e50914;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #e50914;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  margin: 10px; /* Add margin for spacing */

  &:hover {
    background-color: #ff0a16;
  }
`;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [showBookmarked, setShowBookmarked] = useState(false);

  const addVideo = (file) => setVideos((prevVideos) => [...prevVideos, { name: file.name, file, isBookmarked: false }]);
  const toggleBookmarked = () => setShowBookmarked((prev) => !prev);

  return (
    <Container>
      <Title>Video Library</Title>
      <UploadVideo onAddVideo={addVideo} />
      <Button onClick={toggleBookmarked}>
        {showBookmarked ? 'Show All Videos' : 'Show Bookmarked Videos'}
      </Button>
      <VideoList videos={videos} onBookmark={(video) => setVideos((prevVideos) => prevVideos.map((v) => v === video ? {...v, isBookmarked: !v.isBookmarked} : v))} showBookmarked={showBookmarked} />
    </Container>
  );
};

export default App;
