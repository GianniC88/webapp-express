import { useNavigate } from "react-router-dom"
import Jumbotron from "../components/Jumbotron"
export default function HomePage() {
	const navigate = useNavigate()
	const MovieSelection = () => {
		navigate('/movies')
	}
	return (
		<>
			<Jumbotron title='Movies & GO ' text='Scegli il tuo Film e Buona Visione' cta='Scegli il tuo Film' onCtaClick={MovieSelection} />


		</>
	)
}