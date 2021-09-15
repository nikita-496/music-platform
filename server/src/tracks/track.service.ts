import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Comment } from "./schemes/comments.schema";
import { Track } from "./schemes/track.schema";
@Injectable()

export class TrackService{

  
  //использование модели внутри сервиса
  constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
              @InjectModel(Comment.name) private commentkModel: Model<CommentDocument>){}

   //создание трека 
  async create() {

  }

  //получение всех треков их бд
  async getAll() {

  }

  //при нажатии на определенный трек и откритии страницы с детальным прсомотром инф-ции о треке
  async getOne() {

  }

  //удаление трека 
  async delete() {
    
  }
}