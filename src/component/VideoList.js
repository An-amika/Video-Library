import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #444;
`;

const VideoName = styled.span`
  flex-grow: 1;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #e50914;
  color: #fff;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff0a16;
  }
`;

const BookmarkButton = styled(Button)`
  background-color: ${(props) => (props.bookmarked ? '#c70000' : '#e50914')};

  &:hover {
    background-color: ${(props) => (props.bookmarked ? '#a50000' : '#ff0a16')};
  }
`;

const ModalContent = styled.div`
  position: relative;
  width: 80%;
  max-width: 800px;
  max-height: 80%;
  background-color: #000;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: auto;
  max-height: 70vh; /* Max height of the video player */
  border-radius: 10px;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #fff;
  color: #000;

  &:hover {
    background-color: #ccc;
  }
`;

const VideoList = ({ videos, onBookmark, showBookmarked }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredVideos = showBookmarked ? videos.filter((video) => video.isBookmarked) : videos;

  return (
    <div>
      <ul>
        {filteredVideos.map((video, index) => (
          <ListItem key={index}>
            <VideoName>{video.name}</VideoName>
            <ButtonContainer>
              <Button onClick={() => setSelectedVideo(video)}>Play</Button>
              <BookmarkButton 
                onClick={() => onBookmark(video)}
                bookmarked={video.isBookmarked}
              >
                {video.isBookmarked ? 'Bookmarked' : 'Bookmark'}
              </BookmarkButton>
            </ButtonContainer>
          </ListItem>
        ))}
      </ul>

      {selectedVideo && (
        <Modal isOpen={true} onRequestClose={() => setSelectedVideo(null)}>
          <ModalContent>
            <CloseButton onClick={() => setSelectedVideo(null)}>Close</CloseButton>
            <VideoPlayer src={URL.createObjectURL(selectedVideo.file)} controls autoPlay />
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default VideoList;
