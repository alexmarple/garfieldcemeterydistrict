import styles from "./Hero.module.css";
import heroImg from "../../assets/IMG_2165.jpeg";

const Hero = () => {
  return (
    <div>
      <img src={heroImg} alt="Garfield Cemetery" className={styles.image} />
    </div>
  );
};

export default Hero;
