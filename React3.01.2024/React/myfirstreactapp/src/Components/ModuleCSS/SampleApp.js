import React from 'react'
import styles from "./sampleApp.module.css"

export const SampleApp = () => {
  return (
    <div>
        <header className={styles.myHeader}>My first react app</header>
        <main>
            <p className={styles.content}>It's my content</p>
        </main>
        <footer className={styles.myFooter}>&copy; rights to belongs to me</footer>
    </div>
  )
}
