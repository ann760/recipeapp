import Customimage from "./Customimage"
export default function HeroSection() {
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">FoodiesHub is a place where you can please your
                    soul and tummy with delicious food recepies of all cuisine. And our
                    service is absolutely free. So start exploring now.</p>
                <button className="btn">explore now</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <Customimage key={index} imgSrc={src} pt={"90%"} />
                ))}
            </div>
        </div>
    )
}