import TaskList from "./Tasks";
import useFetch from "./useFetch";


const Home = ({searchTerm, setSearchTerm}) => {
    const {data: list, isPending, fetchError} = useFetch('http://localhost:8000/taskList');

    return (

        <div className="home">
            {/* <div className="input-alert">{alert}</div> */}
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
            {list && <TaskList list={list.filter((task) => 
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
            )} title="All" />}

            {list && <TaskList list={list.filter((task) => 
            task.user.toLowerCase() === "saiprasanth" &&
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
            )} title="Saiprasanth" />}
        </div>


      );
}
 
export default Home;