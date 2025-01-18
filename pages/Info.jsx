import React from "react"
import bgImg from "../assets/images/abou-hero.jpg"
import { Link } from "react-router-dom"

export default function Info() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Databáze pro všechny, kteří chtějí kvalitní kožené produkty z české dílny.</h1>
                <p>V reakci na insolvenci <a href="https://isir.justice.cz/isir/ueu/evidence_upadcu_detail.do?id=2BAC5883904AF211E06333F21FACBE71" target="_blank">Brašnářství Tlustý s.r.o.</a> vznikla databáze, jejímž cíle je informovat zklamané zákazníky o alternativních dodavatelích. Navzdory opakovaným tvrzením majitelů dané společnosti, se řemeslu v ČR daří. Napříč republikou lze nalézt desítky dílen, které se věnují řemeslné výrobě a jsou těmi, kdo skutečně udržuje řemeslo při životě.</p>
                <p>Bez zákazníků by to pochopitelně nešlo. Rozcestník Vám pomůže najít řemeslníka, který nejlépe dovede naplnit Vaše očekávání.</p>
                <p>Umístění v databázy je bezplatné. V případě zámu o umístění či doplnění nebo opravu údajů se obracejte na email: <br/><a href="mailto:info@brasnarstvi-krach.cz">info@rozcestnik-kuze.cz</a></p>
            </div>
            <div className="about-page-cta">
                <h2>Najďěte si svého kožedělníka.</h2>
                <Link className="link-button" to="/artisans">Přejít do databáze</Link>
            </div>
        </div>
    );
}