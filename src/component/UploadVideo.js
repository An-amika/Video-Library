import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  background-color: #e50914;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff0a16;
  }
`;

const UploadVideo = ({ onAddVideo }) => {
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      onAddVideo(file);
    }
  };

  return (
    <Container>
      <Input type="file" id="upload" accept="video/*" onChange={handleVideoUpload} />
      <Label htmlFor="upload">Choose File</Label>
    </Container>
  );
};

export default UploadVideo;
