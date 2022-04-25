import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles/About.module.css"


const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.about_content}>
          <div className={styles.about_left}>
            <h2>About us</h2>
            <p>
              Notable, sleek and modern, iZakaya makes excitingly singular hotels for individual personalities. We charm our movement shrewd, present day visitors with a veritable, welcoming mood. We make fervor with our shocking, driving edge structure. 
              Also, we endeavor to connect every single visitor through our imaginative and extremely important scope of all encompassing offices and administrations, including quick Free Internet. We’ve bundled everything flawlessly together, with our one of a kind Yes I Can! Benefit ethos and our 100% Satisfaction Guarantee.
            </p>
            <Link to="/about">
              Read more
            </Link>
          </div>
          <div className={styles.about_right}>
            <img src={require("../../assets/about-img.jpg")} className="img-fluid" alt="izakaya restaurant view" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About