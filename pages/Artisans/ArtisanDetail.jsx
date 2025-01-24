import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import artisans_db from "./artisans_db.js"

export default function ArtisanDetail() {
    const [artisan, setArtisan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()
    const location = useLocation()

    React.useEffect(() => {
        async function loadArtisans() {
            setLoading(true)
            try {
                const data = await artisans_db().filter(el => el.id === id)
                setArtisan(data[0])
                console.log(location)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadArtisans()
    }, [id])
    
    if (loading) {
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const search = location.state?.search || "";
    const tag = location.state?.tag.join(" a ") || "všech";
    
    return (
        <div className="artisan-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Zpět do databáze {tag}</span></Link>
            
            {artisan && (
                <div className="artisan-detail">
                    <a href={artisan.url} target="_blank" className="link-button">Navštívit web</a>
                    <img src={`../assets/img/${artisan.img}`} />
                    <div class="artisan-detail-tags-container">{artisan.tags.map(tag=>(<i key={tag} className={`selected artisan-tag 
                    ${tag==="Ruční šití"?'hand-stitch':
                        tag==="Zakázková výroba"?'bespoke':
                        tag==="Historická výroba"?'historical':
                        tag==="Ševci"?'shoes':""
                        }`} >{tag}</i>))}
                        </div>
                    <h2>{artisan.name}</h2>
                    <p>{artisan.description}</p>

                </div>
            )}
        </div>
    )
}