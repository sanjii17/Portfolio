import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const TaskDesc = () => {
    const { id } = useParams();
    const { data: tasks, isPending, fetchError } = useFetch('http://localhost:8000/taskList/' + id);
    const navi = useNavigate();
    const [isEditing, setEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedDesc, setEditedDesc] = useState('');
    const [editedUser, setEditedUser] = useState('');
    const [editedDueDate, setEditedDueDate] = useState('');

    useEffect(() => {
        if (tasks) {
            setEditedTitle(tasks.title);
            setEditedDesc(tasks.desc);
            setEditedUser(tasks.user);
            setEditedDueDate(tasks.dueDate || "");
        }
    }, [tasks]);

    const removeTask = async () => {
        try {
            const response = await fetch('http://localhost:8000/taskList/' + tasks.id, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to remove task');
            }
            setTimeout(() => {
                navi('/');
            }, 1000);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container taskDesc">
            {fetchError &&
                <div className="error">
                    <h3>{fetchError}</h3>
                </div>
            }
            {isPending &&
                <div className="loading">
                    <h3>Fetching data. Please wait... </h3>
                </div>
            }
            {tasks && !isEditing && (
                <article>
                    <h2>{tasks.title}</h2>
                    <p>Description: {tasks.desc}</p>
                    <p>User: {tasks.user}</p>
                    <p>Due Date: {tasks.dueDate}</p>
                    <div className="delete">
                        <button onClick={removeTask}>Delete</button>
                        <button onClick={() => navi(`/editTask/${tasks.id}`)}>Edit</button>
                    </div>
                </article>
            )}
        </div>
    );
};

export default TaskDesc;
