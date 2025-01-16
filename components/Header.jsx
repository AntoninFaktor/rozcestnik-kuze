import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <Link className="site-logo" to="/">Kůže v ČR</Link>
            <nav>
                <NavLink
                    to="/"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Domů
                </NavLink>
                <NavLink
                    to="/info"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Info
                </NavLink>
                <NavLink
                    to="/artisans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Databáze
                </NavLink>
            </nav>
        </header>
    )
}