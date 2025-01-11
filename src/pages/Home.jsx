import { useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"

const Home = () => {

    const movies = [
        {id : 1, title : "John Wick", release_date : 2020},
        {id : 2, title : "Avengers", release_date : 2024},
        {id : 3, title : "Terminator", release_date : 2010}
    ]

    const [scl , setScl] = useState("")

    const handleSearch = (e) =>{
        e.preventDefault()
        alert(scl)
        setScl('')
    }

  return (
    <div>
        <h3>Total Movies : {movies.length}</h3>

        <div className="home">

            <form onSubmit={handleSearch} className="search-form">

                <input type="text"
                    placeholder="search here...."
                    className="search-input"
                    value={scl}
                    onChange={(e) => setScl(e.target.value)}
                />

                <button type="submit" className="search-button">Search</button>

            </form>


            <div className="movies-grid">
                {
                    movies.map((movie) => 
                    movie.title.toLowerCase().startsWith(scl) &&
                    <MovieCard movie={movie} key={movie.id}/>)
                }
            </div>
        </div>

    </div>
  )
}  

export default Home

