import React from 'react'
import { Link } from 'react-router-dom'

import styles from "./styles/Products.module.css"

const Products = () => {
  return (
    <section className={styles.products}>
      <div className="container">
        <h2>Our Products</h2>
        <div className={styles.products_content}>
          {
            Array.from({ length: 6 - 1 + 1}, (_, i) => 1 + i).map(imgIdx => {
              return (
                <div key={imgIdx} />
              )
            })
          }
        </div>
        <div className={styles.btn_cotaniner}>
          <Link to="/products">See more products</Link>
        </div>
      </div>
    </section>
  )
}

export default Products