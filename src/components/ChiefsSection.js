import ChiefCard from "./ChiefCard"

export default function ChiefsSection() {
    const chief = [
        {
            name: "Annie O",
            img: "/img/chiefs/a_01.jpg",
            recipesCount: 3,
            cusine: "Mexican"
        },
        {
            name: "Jack O",
            img: "/img/chiefs/ja_01.jpg",
            recipesCount: 3,
            cusine: "Mexican"
        },
        {
            name: "Steve M",
            img: "/img/chiefs/s_02.jpg",
            recipesCount: 5,
            cusine: "Mexican"
        },
        {
            name: "Ann-Marie O",
            img: "/img/chiefs/s_01.jpg",
            recipesCount: 4,
            cusine: "Italian"
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {chief.map(chief => <ChiefCard key={chief.name} chief={chief} />)}
            </div>
        </div>
    )
}