import Customimage from "./Customimage"
export default function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <Customimage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
                <img className="author-img" src={recipe.authorImg} alt="" />
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simple dummy text of the printing and typesetting industry</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}