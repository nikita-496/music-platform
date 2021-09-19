import React from 'react';
import Image from 'next/image'
import { ITrack } from '../../types/tracks';
import { Button } from '@material-ui/core';

interface TrackItemProps {
  track: ITrack;
}
 
const TrackItem: React.FC<TrackItemProps> = ({track}) => {
  return (
      <li> 
        {/*<Image 
          src=
          alt={track.artist}
          width={300}
          height={300}
        />*/}
        <p>{track.name}</p>
        <p>{track.artist}</p>
        <Button>Отправить</Button>
      </li>
  );
}
 
export default TrackItem;
