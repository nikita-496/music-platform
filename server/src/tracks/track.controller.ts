import { TrackService } from './track.service';
import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { CreateTrackDto } from './dto/create_track.dto';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create_comment_dto';

@Controller('/tracks') //путь к контроллеру. Все методы данного контроллера будут вызываться
//по данному маршруту
export class TrackController{
  constructor(private trackService: TrackService) { }

   @Post()
   create(@Body() dto: CreateTrackDto) {
    return this.trackService.create(dto)
  }

   @Get()
   getAll() {
    return this.trackService.getAll()
  }

   @Get(":id")
   getOne(@Param("id") id: ObjectId) {
    return this.trackService.getOne(id)
  }

  @Delete(":id")
   delete(@Param("id") id: ObjectId) {
    return this.trackService.delete(id)
  }

  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.trackService.addComment(dto);
    }
}