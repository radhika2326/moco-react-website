
import "./Gallery.css";

function Gallery() {
  const images = [
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000",
      title: "Family Kitchen"
    },
    {
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800",
      title: "Kitchen Details"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      title: "Wooden Kitchen"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1000",
      title: "Modern Kitchen"
    }
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__heading">
        <p>GALLERY</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="gallery__grid">
        {images.map((item, index) => (
          <div className={`gallery__item gallery__item--${index + 1}`} key={index}>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
