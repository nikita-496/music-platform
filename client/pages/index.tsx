import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import NavBar from '../components/Navbar';
import {Container, Typography } from '@material-ui/core';

import styles from '../styles/Home.module.scss';
import Layout from '../components/MainLayout';

const Index = () => {
  return ( 
    <div>
      <Head>
        <title>Главная</title>
      </Head>
          <Layout home={true}>
            <section className={styles.container}>
              <Container maxWidth="lg">
                <Typography className={styles.t} align="center" variant="h2">
                  Добро пожаловать
                </Typography>
                <h3>SoundStore</h3>
                <Link href="/music/">
                  <a>перейти к музыкальной коллекции</a>
                </Link>
              </Container>
            </section>
          </Layout>
    </div>
   );
}
 
export default Index;
