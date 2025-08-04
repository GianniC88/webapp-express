import { Link } from "react-router-dom"
export default function MovieCard({ movies }) {

	return (
		<>
			<div className="container">
				<div className="row row-cols-1 row-cols-md-3 g-3">

					{movies.map(movie => (
						<div key={movie.id} className="col">
							<div className="card">
								<img className="card-img-top"
									src={movie.cover_image}
									alt={movie.title} />
								<div className="card-body">
									<h3 className="card-title">{movie.title}</h3>
									<p className="card-text">{movie.plot}</p>
									<Link to={`/movies/${movie.id}`} className="btn">
										Guarda
									</Link>
								</div>
							</div>
						</div>
					))
					}


				</div>
			</div>
		</>
	)
}