import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
export default function Recipes() {
    const recipes = [
        {
            title: "Food 1",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/chiefs/a_01.jpg",
        },
        {
            title: "Food 2",
            image: "/img/gallery/img_2.jpg",
            authorImg: "/img/chiefs/ja_01.jpg",
        },
        {
            title: "Food 3",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/chiefs/s_01.jpg",
        },
        {
            title: "Food 4",
            image: "/img/gallery/img_2.jpg",
            authorImg: "/img/chiefs/s_02.jpg",
        },
        {
            title: "Food 5",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/chiefs/a_01.jpg",
        },
        {
            title: "Food 6",
            image: "/img/gallery/img_2.jpg",
            authorImg: "/img/chiefs/ja_01.jpg",
        },
    ].sort(() => Math.random() - 0.5)
    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {recipes.map((recipe, index) => (<RecipeCard key={index} recipe={recipe} />))}
            </div>
        </div>
    )
}