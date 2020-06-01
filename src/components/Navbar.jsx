import React  from "react";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <img className="img-sizing" src="data:image/png;base64,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" alt="keep-logo" />
                    <span className="nvbar-text">Keep</span>
                </a>
                <form className="example" action="action_page.php">
                    <button type="submit"><i className="fas fa-search"></i></button>
                    <input type="text" placeholder="Search.." name="search" />
                    
                </form>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><i className="fas fa-redo fa-2x"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fas fa-stream fa-2x"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#"><i className="fas fa-cogs fa-2x"></i></a>
                    </li>
                </ul>
                </div>
            </nav>
            <hr />
        </div>
);
}

export default Navbar;