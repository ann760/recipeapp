export default function ImproveSkills() {
    const list = [
        "Learn new recipes",
        "Experiment with food",
        "Write your own recipe",
        "Know nutrition facts",
        "get cooking tps",
        "Get ranked"
    ]
    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img_1.jpg"></img>
            </div>
            <div className="col typography">
                <h1 className="title">Improve Your Culinary Skills</h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )
                )}
                <button className="btn">signup now</button>
            </div>
        </div>
    )
}