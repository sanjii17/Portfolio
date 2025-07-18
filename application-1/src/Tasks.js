import { Link } from "react-router-dom";
import  DueDate  from './DueDate';

const TaskList = ({list, title}) => {

    return ( 
            <div className="tasks mt-2">
                <div className="task-width">
                    <div className="title">
                        <h2>{title}</h2>
                    </div>
                    <hr/>
                </div>
            {list.map((task) => (
            <Link className="nav-link" to={`/taskdesc/${task.id}`} key={task.id}>
                <div className="list-preview">
                <div className="list-items">
                    <h2>{task.title}</h2>
                    {task.dueDate && <DueDate dueDate={task.dueDate} />}
                    {/* Optional: if you also have a completion date */}
                    {/* {task.completionDate && <CompletionDate completionDate={task.completionDate} />} */}
                </div>
                </div>
            </Link>
            ))}

        </div>
        
     );
}
 
export default TaskList;
