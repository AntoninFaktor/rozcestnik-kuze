import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="not-found-container">
            <h1>Stránku se nepodařilo najít.</h1>
            <Link to="/" className="link-button">Zpět na hlavní úvodní stranu</Link>
        </div>
    )
}
