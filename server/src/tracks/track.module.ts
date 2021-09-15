import { Comment, CommentSchema } from './schemes/comments.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { TrackController } from "./track.controller";
import { TrackService } from "./track.service";
import { Track, TrackSchema } from './schemes/track.schema';
@Module({
  //регистрация в модуле 

  //доступ к моделям для сервисов и контроллеров
  imports: [
    MongooseModule.forFeature( [{name: Track.name, schema:TrackSchema}]),
    MongooseModule.forFeature( [{name: Comment.name, schema:CommentSchema}]),
  ],
  controllers: [TrackController],
  providers:[TrackService]

})

export class TrackModule{}