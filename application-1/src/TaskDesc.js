import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDesc = () => {
    const {id} = useParams();
    const {data: tasks, isPending, fetchError} = useFetch('http://localhost:8000/taskList/' + id);
    const navi = useNavigate();

    const removeTask = async (e) => {   

        try {
            const response = await fetch('http://localhost:8000/taskList/'+tasks.id, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to remove task');
            }
            setTimeout(() => {
                console.log('Data removed......');
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
            {tasks && (
                <article>
                    <h2>{tasks.title}</h2>
                    <p>Description: {tasks.desc}</p>
                    <p>User: {tasks.user}</p>
                    <div className="delete">
                        <button onClick={removeTask}>Delete</button>
                    </div>
                </article>
                
            )}
        </div>
     );
}
 
export default TaskDesc;