import { Module } from "@nestjs/common";
import { TrackController } from "./track.controller";
import { TrackService } from "./track.service";

@Module({
  //регистрация в модуле 
  controllers: [TrackController],
  providers:[TrackService]

})

export class TrackModule{}