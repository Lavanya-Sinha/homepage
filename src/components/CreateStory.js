import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const CreateStory = ({ addNewsItem }) => {
  const [story, setStory] = useState('');
  const [storyError, setStoryError] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [createdStory, setCreatedStory] = useState('');

  const handleStoryChange = (e) => {
    setStory(e.target.value);
    if (e.target.value.length < 3) {
      setStoryError('Story must be at least 3 characters long');
    } else {
      setStoryError('');
    }
  };

  const handleCreateStory = (e) => {
    e.preventDefault();
    if (story.length >= 3) {
      // Pass the story text to the addNewsItem function
      addNewsItem(story);

      // Show success message and clear the input
      setCreatedStory(story);
      setShowAlert(true);
      setStory('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Create a Story</h2>

      {/* Alert for successfully created story */}
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          You created a new story: "{createdStory}"
        </Alert>
      )}

      <Form onSubmit={handleCreateStory}>
        <Form.Group controlId="story">
          <Form.Label>Story</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={story}
            onChange={handleStoryChange}
            placeholder="Write your story here"
          />
        </Form.Group>
        {storyError && <Alert variant="danger">{storyError}</Alert>}
        <Button variant="primary" type="submit" disabled={story.length < 3}>
          Create Story
        </Button>
      </Form>
    </div>
  );
};

export default CreateStory;

