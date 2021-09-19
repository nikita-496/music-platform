import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import NavBar from '../components/Navbar';
import {Container, Typography } from '@material-ui/core';

import styles from '../styles/Home.module.scss';

const Index = () => {
  return ( 
    <div>
      <Head>
        <title>Главная</title>
      </Head>
        <NavBar/>
          <section className={styles.container}>
            <Container>
              <Typography align="center" variant="h2">
                Добро пожаловать
              </Typography>
              <h3>SoundStore</h3>
              <Link href="/music/">
                <a>перейти к музыкальной коллекции</a>
              </Link>
            </Container>
        </section>
    </div>
   );
}
 
export default Index;
