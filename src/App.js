import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import NewsFeed from './components/NewsFeed';
import PersonalProgress from './components/PersonalProgress';
import CreateStory from './components/CreateStory';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [newsItems, setNewsItems] = useState([
    { id: 1, text: 'User A updated their project.', timestamp: '2 hours ago' },
    { id: 2, text: 'User B completed a task.', timestamp: '1 day ago' }
  ]);

  // Function to handle adding a new story
  const handleAddNewsItem = (newStoryText) => {
    if (newStoryText.length >= 3) {
      const newItem = {
        id: Date.now(),
        text: newStoryText,
        timestamp: 'Just now'
      };
      setNewsItems([...newsItems, newItem]);
    } else {
      alert('Story must be at least 3 characters long.');
    }
  };

  // Function to handle deleting a news item by ID
  const handleDeleteNewsItem = (id) => {
    setNewsItems(newsItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={6}>
            <NewsFeed newsItems={newsItems} handleDeleteNewsItem={handleDeleteNewsItem} />
          </Col>
          <Col md={3}>
            <PersonalProgress />
          </Col>
        </Row>
      </Container>
      <CreateStory addNewsItem={handleAddNewsItem} />
    </div>
  );
};

export default App;
