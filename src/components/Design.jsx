
import "./Design.css";

function Designs() {

    const kitchenDesigns = [
        {
            id: 1,
            name: "L-Shaped Kitchen",
            description: "Perfect for open-plan living with efficient workflow.",
            image: "/images/kitchen-l-shaped.jpg"
        },
        {
            id: 2,
            name: "U-Shaped Kitchen",
            description: "Maximum storage and counter space for avid cooks.",
            image: "/images/kitchen-u-shaped.jpg"
        },
        {
            id: 3,
            name: "Island Kitchen",
            description: "A statement piece that doubles as a social hub.",
            image: "/images/kitchen-island.jpg"
        },
        {
            id: 4,
            name: "Parallel Kitchen",
            description: "Ideal for narrow spaces without compromising function.",
            image: "/images/kitchen-parallel.jpg"
        },
        {
            id: 5,
            name: "Straight Kitchen",
            description: "Compact and elegant for studio and small apartments.",
            image: "/images/kitchen-straight.jpg"
        }
    ];

    return (

        <section className="designs" id="designs">

            <div className="designs__container">

                {/* Section Heading */}
                <header className="designs__header">

                    <span className="designs__eyebrow">
                        OUR DESIGNS
                    </span>

                    <h2 className="designs__title">
                        Modular Kitchen Categories
                    </h2>

                </header>

                {/* Kitchen Cards */}
                <div className="designs__grid">

                    {kitchenDesigns.map((kitchen) => (

                        <article className="designs__card" key={kitchen.id}>

                            {/* Kitchen Image */}
                            <div className="designs__media">

                                <img
                                    src={kitchen.image}
                                    alt={kitchen.name}
                                    loading="lazy"
                                />

                                <div className="designs__overlay"></div>

                            </div>

                            {/* Kitchen Information */}
                            <div className="designs__body">

                                <h3 className="designs__card-title">
                                    {kitchen.name}
                                </h3>

                                <p className="designs__card-text">
                                    {kitchen.description}
                                </p>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default Designs;
