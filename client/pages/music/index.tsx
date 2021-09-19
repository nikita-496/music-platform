import React from 'react';
import Head from 'next/head'
import Layout from '../../components/layout';
import Image from 'next/image'
import { ITrack } from '../../types/tracks';
import TrackItem from './TrackItem';

interface MusicListProps {
  tracks: ITrack[];
}
 
const Index: React.FC<MusicListProps> = ({tracks}) => {

  let trackList = tracks.map(track => <TrackItem key={track._id} track={track}></TrackItem>)

  return (
    <Layout home={false}>
      <Head>
          <title>Музыкальная коллекция</title>
        </Head>
        <section style={{backgroundColor: "#8DD35F", margin: "auto 0"}}>
          <h1 style={{textAlign: "center", textTransform:"capitalize"}}>музыкальная коллекция</h1>
          <ul>
            {trackList}
          </ul>
        </section>      
    </Layout>
  );
}

 //Эта функция вызывается во время сборки 
 export async function getStaticProps() {
   //Обращение к внешним данныым по API endpoint для получения списка музыкальных треков
      const trackData = "http://localhost:5000/tracks"
      console.log(trackData)
      const res = await fetch(trackData)
      const tracks = await res.json()
    //Возвращая ответ, компонент Index 
    //будет получать tracks в качестве props во время сборки
    return {
      props: {
        tracks,
      }
    } 
 } 

export default Index;
