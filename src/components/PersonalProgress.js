import React, { useState } from 'react';
import { ProgressBar, Button } from 'react-bootstrap';

const PersonalProgress = () => {
  // Initial state for progress metrics
  const [completedTasks, setCompletedTasks] = useState(4);
  const [totalTasks, setTotalTasks] = useState(10);
  const [ongoingProjects, setOngoingProjects] = useState(2);

  // Calculate task completion percentage
  const taskCompletionPercentage = Math.round((completedTasks / totalTasks) * 100);

  // Function to simulate completing a task
  const handleCompleteTask = () => {
    if (completedTasks < totalTasks) {
      setCompletedTasks(completedTasks + 1);
    }
  };

  // Function to simulate adding a project
  const handleAddProject = () => {
    setOngoingProjects(ongoingProjects + 1);
  };

  return (
    <div className="personal-progress p-3">
      <h3 className="mb-4">Personal Progress</h3>
      
      {/* Task Progress */}
      <div className="mb-4">
        <h5>Tasks Completed: {completedTasks}/{totalTasks}</h5>
        <ProgressBar now={taskCompletionPercentage} label={`${taskCompletionPercentage}%`} />
        <Button className="mt-2" onClick={handleCompleteTask} disabled={completedTasks >= totalTasks}>
          Complete a Task
        </Button>
      </div>

      {/* Ongoing Projects */}
      <div className="mb-4">
        <h5>Ongoing Projects: {ongoingProjects}</h5>
        <Button onClick={handleAddProject}>Add New Project</Button>
      </div>

      {/* You can add more dynamic progress elements here */}
    </div>
  );
};

export default PersonalProgress;
