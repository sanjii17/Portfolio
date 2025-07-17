import { Link } from "react-router-dom";

const TaskList = ({list, title}) => {

    return ( 
        <div className="row">
            <div className="tasks col-12 col-md-6 col-lg-4">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <hr />
            {list.map((task) =>(
                <Link className="nav-link ms-4" to={`/taskdesc/${task.id}`} key={task.id}>
                    <div className="list-preview" >
                            <div className="list-items">
                                <h2>{task.title}</h2>
                                <p>User:{task.user}</p>
                            </div>
                    </div>
                </Link>
            ))}
        </div>
        </div>
        
     );
}
 
export default TaskList;