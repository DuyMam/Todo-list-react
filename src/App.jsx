import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);       // danh sách công việc
  const [newTask, setNewTask] = useState("");   // input công việc mới

  // thêm công việc
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, done: false }]);
    setNewTask("");
  };

  // đổi trạng thái hoàn thành
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  // xóa công việc
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1>📌 To-Do List</h1>
      
      <div className="input-area">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nhập công việc..."
        />
        <button onClick={addTask}>Thêm</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.done ? "done" : ""}>
            <label>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(index)}
              />
              <span>{task.text}</span>
            </label>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
