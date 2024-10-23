import React from 'react';
import { Card, Button } from 'react-bootstrap';

const NewsFeed = ({ newsItems, handleDeleteNewsItem }) => {
  return (
    <div className="news-feed">
      {/* Render the news items */}
      {newsItems.map((item) => (
        <Card key={item.id} className="mb-3">
          <Card.Body>
            <Card.Text>{item.text}</Card.Text>
            <Card.Footer className="text-muted">{item.timestamp}</Card.Footer>
            {/* Button to delete a news item */}
            <Button variant="danger" onClick={() => handleDeleteNewsItem(item.id)}>Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default NewsFeed;





