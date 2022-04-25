import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles/Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero_content}>
          <h1>Step right in, your leisure and meal is our pleasure</h1>
          <p>A great way to take a break from your busy schedule, enjoy the best meals and have fun</p>
          <div>
            <Link to="/products">Checkout our Dishes</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero