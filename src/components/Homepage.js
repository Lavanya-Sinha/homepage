import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import NewsFeed from './NewsFeed';
import PersonalProgress from './PersonalProgress';
import CreateStory from './CreateStory'; // Import CreateStory

const Homepage = () => {
  const [newsItems, setNewsItems] = useState([
    { id: 1, text: 'User A updated their project.', timestamp: '2 hours ago' },
    { id: 2, text: 'User B completed a task.', timestamp: '1 day ago' },
  ]);

  const addNewsItem = (newItem) => {
    setNewsItems([...newsItems, newItem]);
  };

  const handleDeleteNewsItem = (id) => {
    setNewsItems(newsItems.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <Row>
        <Sidebar />
        <NewsFeed newsItems={newsItems} handleDeleteNewsItem={handleDeleteNewsItem} />
        <PersonalProgress />
      </Row>
      {/* Pass addNewsItem to CreateStory */}
      <CreateStory addNewsItem={addNewsItem} />
    </Container>
  );
};

export default Homepage;
