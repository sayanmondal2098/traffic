import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import "../css/Header.css";
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className='header'>
            <img
                className="header__logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1omlLTbrV1f5vi7D4NfqEQ-GvMVI5v6ASow&usqp=CAU"
                alt="Logo"
            />

            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon
                    className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span
                        className="header__optionLineone">Product</span>
                </div>
                <div className="header__option">
                    <span
                        className="header__optionLineone">Hello San</span>
                </div>
                <Link to="/signin">
                    <div className="header__option">
                        <span
                            className="header__optionLineone">Sign In</span>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default Header