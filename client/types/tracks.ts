//интерфейс комментариев 
export interface IComment {
  _id: string;
  username: string;
  text: string;
}


//Интерфейс трэков 
export interface ITrack {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listnets: number;
  picture: string;
  audio: string;
  comments: IComment;
}