import React from "react";

export function App() {
  const tasks = [
    { id: 123, taskText: "React lernen 2" },
    { id: 456, taskText: "Mit dem Hund Gassi gehen" },
    { id: 789, taskText: "Obst essen" },
    { id: 1011, taskText: "Brot kaufen" },
  ];

  return (
    <div>
      <h1>Meine heutigen Tasks:</h1>

      <ul>
        {tasks.map((taskObj) => (
          <li key={taskObj.id}>{taskObj.taskText}</li>
        ))}
      </ul>
    </div>
  );
}
