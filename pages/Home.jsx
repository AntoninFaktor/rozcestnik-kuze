import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>Databáze českých výrobců kožedělných produktů.</h1>
            <p>Ivan Pterův z Brašnářství Tlustý s.r.o. tvrdí, že svou činností zachránil výrobu kožených produktů v ČR, která byla dle jeho slov "mrtvá". Tato databáze dokazuje opak. Kožedělná výroba v ČR má světovou úroveň. Tato datábáze vznikla s cílem poskytnout českým zákazníkům rozcestník na desítky poctivých řemeslníků v ČR a skvělou komunitu.</p>
            <Link to="artisans">Vstoupit do databáze</Link>
        </div>
    )
};