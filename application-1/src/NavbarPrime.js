const NavbarPrime = ({name, searchTerm, setSearchTerm}) => {
    return ( 
        <div className="fluid">
            <nav className="navbar text-white prime" style={{position: 'sticky'}}>
        <div className="container-fluid">
            <div className="tg-group">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarabove" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i class="fa fa-bars" style={{color: 'white'}}></i></span>
                </button>
                <div className="brand-logo ms-3">
                    <img src="/target_icon.png" alt="logo" />
                    <a className="navbar-brand" href="/">TaskDooM</a>
                </div>
            </div>
            
            <form className="d-flex" role="search">
                <input className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search"/>
            </form>
        </div>
        </nav>
        </div>
        
     );
}
            //  <div className="input-wrapper">
            //     <div className="add">
            //         <input
            //         type="text"
            //         autoFocus
            //         placeholder="Search task"
            //         value={searchTerm}
            //         onChange={(e) => setSearchTerm(e.target.value)}
            //         />
            //             {/* <button onClick={() => setSearchTerm("")}><i>X</i></button> */}
            //         </div>
            //     </div>
export default NavbarPrime;