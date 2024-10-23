import React, { useState } from 'react';
import { Card, ListGroup, Collapse } from 'react-bootstrap';

const Sidebar = () => {
  const [openProjects, setOpenProjects] = useState(false);
  const [openTasks, setOpenTasks] = useState(false);
  const [openFollowers, setOpenFollowers] = useState(false);

  return (
    <div className="sidebar">
      {/* Collapsible Projects Section */}
      <Card className="mb-3">
        <Card.Header onClick={() => setOpenProjects(!openProjects)} aria-controls="projects-collapse" aria-expanded={openProjects}>
          Projects
        </Card.Header>
        <Collapse in={openProjects}>
          <Card.Body id="projects-collapse">
            <ListGroup>
              <ListGroup.Item>Project A</ListGroup.Item>
              <ListGroup.Item>Project B</ListGroup.Item>
              <ListGroup.Item>Project C</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Collapse>
      </Card>

      {/* Collapsible Tasks Section */}
      <Card className="mb-3">
        <Card.Header onClick={() => setOpenTasks(!openTasks)} aria-controls="tasks-collapse" aria-expanded={openTasks}>
          Tasks
        </Card.Header>
        <Collapse in={openTasks}>
          <Card.Body id="tasks-collapse">
            <ListGroup>
              <ListGroup.Item>Task 1: Fix Bug</ListGroup.Item>
              <ListGroup.Item>Task 2: Update Project</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Collapse>
      </Card>

      {/* Collapsible Followers Section */}
      <Card className="mb-3">
        <Card.Header onClick={() => setOpenFollowers(!openFollowers)} aria-controls="followers-collapse" aria-expanded={openFollowers}>
          Followers
        </Card.Header>
        <Collapse in={openFollowers}>
          <Card.Body id="followers-collapse">
            <ListGroup>
              <ListGroup.Item>Follower A</ListGroup.Item>
              <ListGroup.Item>Follower B</ListGroup.Item>
              <ListGroup.Item>Follower C</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Collapse>
      </Card>
    </div>
  );
};

export default Sidebar;