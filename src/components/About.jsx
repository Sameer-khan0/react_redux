// About.jsx
import React from 'react';

function About() {
  return (
    <div className="container mt-4">
      <p>
        Welcome to the Todo App! This application allows you to manage your tasks
        efficiently using Redux for state management.
      </p>
      <h3 className="mt-4">Features:</h3>
      <ul className="list-group">
        <li className="list-group-item">Add new todos</li>
        <li className="list-group-item">View and manage your todo list</li>
      </ul>
      <p className="mt-4">
        This app is built with React and Redux for state management. It demonstrates
        the power of centralized state management for handling complex applications.
      </p>
      <p className="mt-4">Feel free to explore and use the app to organize your tasks!</p>
    </div>
  );
}

export default About;
