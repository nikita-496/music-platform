import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateCommentDto } from "./dto/create_comment_dto";
import { CreateTrackDto } from "./dto/create_track.dto";
import { Comment, CommentDocument } from "./schemes/comments.schema";
import { Track, TrackDocument } from "./schemes/track.schema";
@Injectable()

export class TrackService{

  
  //использование модели внутри сервиса
  constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
              @InjectModel(Comment.name) private commentModel: Model<CommentDocument>){}

   //создание трека 
  async create(dto: CreateTrackDto): Promise<Track> {
    const track = await this.trackModel.create({...dto, listens: 0})
    return track
  }

  //получение всех треков их бд
  async getAll(): Promise<Track[]> {
    const tracks = await this.trackModel.find()
    return tracks
  }

  //при нажатии на определенный трек и откритии страницы с детальным прсомотром инф-ции о треке
  async getOne(id: ObjectId): Promise<Track> {
    const track = await this.trackModel.findById(id).populate("comments")
    return track
  }

  //удаление трека 
  async delete(id: ObjectId): Promise<ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id)
    return track._id
  }

  //добавление к конкретному треку комментария 
  async addComment(dto: CreateCommentDto): Promise<Comment> {
      const track = await this.trackModel.findById(dto.trackId)
      const comment = await this.commentModel.create({...dto})
      track.comments.push(comment._id)
      await track.save()
      return comment 
  }
}