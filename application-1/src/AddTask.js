import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const AddTask = () => {
    const [title, setTaskTitle] = useState('');
    const [desc, setTaskDesc] = useState('');
    const [user, setUser] = useState('Saiprasanth');
    const history =  useNavigate();

    const[isPending, setIsPending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const task = { title, desc, user };
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

            console.log('Data added......');
            setIsPending(false);
            history('/');
        } catch (error) {
            console.error('Error:', error);
            setIsPending(false);
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
                    onChange={(e)=>setTaskDesc(e.target.value)}
                    ></textarea>

                <label>List</label>
                    <select
                    value={user}
                    required    
                    onChange={(e)=>setUser(e.target.value)}
                    >
                        <option value="Saiprasanth">Saiprasanth</option>
                        <option value="Official">Official</option>
                    </select>

                {!isPending && <button>Add Task</button>}
                {isPending && <button>Buffer........</button>}
            </form>
        </div>
     );
}
 
export default AddTask;