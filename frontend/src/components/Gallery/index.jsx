import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Gallery.module.css';
import Slider from 'react-slick';

const modules = import.meta.glob('../../assets/*.{png,jpg,jpeg,svg,gif}', {
  eager: true,
});
const images = Object.values(modules).map((m) => m.default);

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    className: 'center',
    // autoplay: true,
    // autoplaySpeed: 2000,
    // cssEase: 'linear',
  };
  return (
    <div id='gallery' className={styles.gallery}>
      <Slider {...settings} className={styles.images}>
        {images.map((src, idx) => (
          <div key={idx}>
            <img src={src} alt={`Slide ${idx + 1}`} className={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
