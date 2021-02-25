export default function Movie({movie}){
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img src={movie.Poster === "N/A"? 'https://via.placeholder.com/300x400?text=Poster' : movie.Poster} alt={movie.Title}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{movie.Title}</span>
                <p>{movie.Year} <span className="right">{movie.Type}</span></p>
            </div>
            
        </div>
    )
}