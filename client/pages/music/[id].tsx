import React from 'react';
import { ITrack } from '../../types/tracks';

interface TrackProps {
  track: ITrack;
}

const Track: React.FC<TrackProps> = ({track}) => {
  return (
    <h2>
      Страница трека
    </h2>
  );
}

const trackData = "http://localhost:5000/tracks"

export async function getStaticPaths() {

  const res = await fetch(trackData)
  const tracks = await res.json()

  //Получаем пути, которые мы хотим предварительно отрендерить на основе треков (для конкретного трека)
  const paths = tracks.map(track => {
   return {
     params: {
       id: track._id
     }
   }
  })

  // Мы предварительно визуализируем только эти пути во время сборки.
   // {fallback: false} означает, что другие маршруты должны 404.
   return { 
     paths, 
     fallback: false
    }
}

export async function getStaticProps({ params }) {
  //params содержит идентификатор трека
  //Елси params.id 1, маршрут выглядит как /music/1
  const res = await fetch(`${trackData}/${params.id}`)
  const track = await res.json()

  //Передаем данные track на страницу через props
  return { props: { track }}
} 


export default Track;