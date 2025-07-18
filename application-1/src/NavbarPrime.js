import { useNavigate } from "react-router-dom";

const NavbarPrime = ({ name, searchTerm, setSearchTerm, theme, toggleTheme, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate("/logout");
  };

  return (
    <div className="fluid">
      <nav className="navbar text-white prime" style={{ position: 'sticky' }}>
        <div className="container-fluid">
          <div className="tg-group">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarabove" aria-controls="navbarToggleExternalContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
            </button>
            <div className="brand-logo ms-3">
              <img src="/target_icon.png" alt="logo" />
              <a className="navbar-brand" href="/">TaskDooM</a>
            </div>
          </div>
          
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={{searchTerm}?searchTerm : "Search tasks..."}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search"
            />
            <button
              type="button"
              onClick={toggleTheme}
              style={{
                background: "none", color: "inherit", border: "1px solid #888",
                margin: "0 12px", padding: "2px 10px", borderRadius: "8px"
              }}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
            <b style={{margin: "0 8px"}}>{name}</b>
            <button
              type="button"
              onClick={handleLogoutClick}
              style={{
                background: "tomato",
                color: "#fff",
                border: "none",
                padding: "2px 12px",
                borderRadius: "8px",
                marginLeft: "8px"
              }}
            >Logout</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPrime;
