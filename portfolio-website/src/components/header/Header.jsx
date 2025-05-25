import React from 'react'
import "./header.css"
const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">Nour</a>
                <div className="nav_menu">
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="" className="nav_link">
                                <i className={"uil uil- nav_icon"}></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header