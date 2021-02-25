import Movie from './Movie'
export default function movies({movies = []}){

    return(
        <div className="movies">
            {movies.length ? movies.map(movie => <Movie key={movie.imdbID} movie={movie}/>) : <h4>Nothing found</h4> }
        </div>
       
    )
}