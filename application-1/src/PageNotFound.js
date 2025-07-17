import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <div className="pnf">
            <h2>Sorry this is not a desired Page for tasks</h2>
            <p>Let's go back, click here👉🏻<Link to={'/'}>Tasks</Link></p>
        </div>
     );
}
 
export default PageNotFound;