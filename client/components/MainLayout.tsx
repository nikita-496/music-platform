import  React from 'react';
import Link from 'next/link'
import styles from './layout.module.css'
import NavBar from './Navbar';
import { Container } from '@material-ui/core';
import Player from './Player'


export default function Layout({ children, home }) {
  return (
    <div>
      <NavBar />
      <main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
          <Container className={styles.mainContainer}>
            {children}
          </Container>
      </main>
      <Player/>
    </div>
  )
}
