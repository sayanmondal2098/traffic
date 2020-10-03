import React from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { Button, IconButton } from "@material-ui/core";
import "../css/Header.css";

function Header() {
  const history = useHistory();

  return (
    <div className="header">
      <img
        onClick={() => history.push("/")}
        className="header__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1omlLTbrV1f5vi7D4NfqEQ-GvMVI5v6ASow&usqp=CAU"
        alt="Logo"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <IconButton>
          <SearchIcon style={{ fontSize: 30 }} />
        </IconButton>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineone">
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/login")}
            >
              Sign In
            </Button>
          </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineone">
            <Button
              variant="outlined"
              color="primary"
              onClick={() => history.push("/signup")}
            >
              Log In
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
