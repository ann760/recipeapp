import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFortAwesome, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function ChiefCard({ chief }) {
    return (
        <div className="chief-card">
            <img src={chief.img} alt="" />
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.name}</h3>
                <p className="chief-recipe-count">{chief.recipesCount}</p>
                <p className="chief-card-cusine">{chief.cusine}</p>
                <p className="chief-icons">
                    <FontAwesomeIcon icon={faFortAwesome} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </p>
            </div>

        </div>
    )
}