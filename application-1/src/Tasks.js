import { Link } from "react-router-dom";
import CompletionDate from "./CompletionDate";

function handleComplete(id, oldCompleted) {
  fetch(`http://localhost:8000/taskList/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: !oldCompleted })
  }).then(() => {
    window.location.reload(); // crude but works for now!
  });
}

const TaskList = ({ list, title }) => {
  return (
    <div className="tasks">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <hr />
      {list.map((task) => (
        <Link className="nav-link ms-4" to={`/taskdesc/${task.id}`} key={task.id}>
          <div className="list-preview" style={{
            background: task.completed ? "#e0ffe0" : "#fff"
          }}>
            <div className="list-items">
              <input
                type="checkbox"
                checked={task.completed || false}
                onChange={e => {
                  e.preventDefault();
                  handleComplete(task.id, task.completed);
                }}
                onClick={e => e.stopPropagation()}
              />
              <h2 style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "#888" : "#333"
              }}>{task.title}</h2>
              <p>User: {task.user}</p>
              <CompletionDate completionDate={task.dueDate} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TaskList;
