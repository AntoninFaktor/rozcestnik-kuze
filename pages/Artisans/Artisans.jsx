import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import artisans_db from "./artisans_db.js"

export default function Artisans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [artisans, setArtisans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const tagFilter = searchParams.getAll("tag")
    const searchFilter = searchParams.get("search")

    function shuffle(array) {
        let currentIndex = array.length;
          while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
          }
        }

    React.useEffect(() => {
                {
                    async function loadVans() {
                        setLoading(true)
                        try {
                            const data = await artisans_db()
                            shuffle(data)
                            setArtisans(data)
                        } catch (err) {
                            setError(err)
                        } finally {
                            setLoading(false)
                        }
                    }
                    loadVans()
                }
}, [])
    const displaySearchFilter = searchFilter
    ? artisans.filter(artisan => artisan.name.toLowerCase().normalize('NFKD').replace(/[^\w\s.-_\/]/g, '').includes(searchFilter))
    : artisans
    const displayTagFilter = tagFilter
        ? artisans.filter(artisan => tagFilter.every(tag=>artisan.tags.includes(tag)))
        : artisans

const displayedArtisans = displaySearchFilter.filter(element => displayTagFilter.includes(element))

    const artisanElements = displayedArtisans.map(artisan => (
        <div key={artisan.id} className="artisan-tile">
            <Link
                to={artisan.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    tag: tagFilter
                }}
            >
                <div className="artisan-info">
                    <h3>{artisan.name}</h3>
                </div>
                <img src={artisan.img} />
                {artisan.tags.map(tag =>
                    <i key={tag} className={`artisan-tag ${tag==="Ruční šití"?'hand-stitch':
                        tag==="Zakázková výroba"?'bespoke':
                        tag==="Historická výroba"?'historical':
                        tag==="Ševci"?'shoes':
                        tag==="s.r.o."?'sro':""
                        } selected`}>{tag}</i>
                    )
            }
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
                prevParams.delete("search")
            } else if (prevParams.has(key, value)) {
                prevParams.delete(key, value)
            }
            else {
                prevParams.append(key, value)
                
            }
            return prevParams
        })
    }
    function handleSearch (value) {
        setSearchParams(prevParams => {
            if (prevParams.has("search")){
                prevParams.set("search", value.toLowerCase().normalize('NFKD').replace(/[^\w\s.-_\/]/g, ''))
            } else {
                prevParams.append("search", value.toLowerCase().normalize('NFKD').replace(/[^\w\s.-_\/]/g, ''))
            }
            return prevParams
        })
    }

    if (loading) {
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="artisan-list-container">
            <h1>Rozcestník řemeslníků [{displayedArtisans.length}]</h1>
            <div className="artisan-list-filters">
            <input type="search" placeholder="Název..." onChange={(e)=>handleSearch(e.target.value)} />
            <div className="artisan-list-filter-buttons">

                <button
                    onClick={() => handleFilterChange("tag", "Ruční šití")}
                    className={
                        `artisan-tag hand-stitch 
                        ${tagFilter.includes( "Ruční šití") ? "selected" : ""}`
                    }
                >Ruční šití</button>
                <button
                    onClick={() => handleFilterChange("tag", "Ševci")}
                    className={
                        `artisan-tag shoes 
                        ${tagFilter.includes( "Ševci") ? "selected" : ""}`
                    }
                >Ševci</button>
                <button
                    onClick={() => handleFilterChange("tag", "Zakázková výroba")}
                    className={
                        `artisan-tag bespoke 
                        ${tagFilter.includes( "Zakázková výroba") ? "selected" : ""}`
                    }
                >Zakázková výroba</button>
                <button
                    onClick={() => handleFilterChange("tag", "Historická výroba")}
                    className={
                        `artisan-tag historical 
                        ${tagFilter.includes( "Historická výroba") ? "selected" : ""}`
                    }
                >Historická výroba</button>
                                <button
                    onClick={() => handleFilterChange("tag", "s.r.o.")}
                    className={
                        `artisan-tag sro 
                        ${tagFilter.includes( "s.r.o.") ? "selected" : ""}`
                    }
                >s.r.o.</button>

                {tagFilter ? (
                    <button
                        onClick={() => handleFilterChange("tag", null)}
                        className="artisan-tag clear-filters"
                    >Obnovit filtr</button>
                ) : null}

            </div>

            </div>
            <div className="artisan-list">
                {artisanElements}
            </div>
        </div>
    )
}