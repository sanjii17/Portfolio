import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = ({ currentUser }) => {
  const [title, setTaskTitle] = useState('');
  const [desc, setTaskDesc] = useState('');
  const [user, setUser] = useState(currentUser || 'Saiprasanth');
  const [dueDate, setDueDate] = useState('');
  const [completed, setCompleted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { title, desc, user, completed, dueDate };
    setIsPending(true);

    try {
      const response = await fetch('http://localhost:8000/taskList', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      });
      if (!response.ok) {
        throw new Error('Failed to add task');
      }
      setIsPending(false);
      navigate('/');
    } catch (error) {
      setIsPending(false);
      alert("Error adding task");
    }
  };

  return (
    <div className="addTask">
      <form onSubmit={handleSubmit}>
        <label>Task</label>
        <input
          type="text"
          value={title}
          required
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <label>Task Description</label>
        <textarea
          value={desc}
          required
          onChange={(e) => setTaskDesc(e.target.value)}
        />

        <label>User</label>
        {/* lock user for now or let choose */}
        <input
          type="text"
          value={user}
          disabled
          readOnly
          style={{background:"#ececec"}}
        />

        <label>Completion Date & Time</label>
        <input
          type="datetime-local"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          required
        />

        {!isPending && <button>Add Task</button>}
        {isPending && <button disabled>Buffer........</button>}
      </form>
    </div>
  );
};

export default AddTask;
