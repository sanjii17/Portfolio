import TaskList from "./Tasks";
import useFetch from "./useFetch";

const Home = ({ searchTerm, setSearchTerm }) => {
    const { data: list, isPending, fetchError } = useFetch('http://localhost:8000/taskList');

    return (
        <div className="home">
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
            {list && (list.filter((task) =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 ? (
            <div className="no-tasks">
            <h3>No tasks found.</h3>
            </div>) : 
            (<TaskList
            list={list.filter((task) =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
            )}
            title="My Tasks"/>
            ))}


        </div>
    );
}

export default Home;
