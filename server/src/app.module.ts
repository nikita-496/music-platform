import { Module } from '@nestjs/common';
import { TrackModule } from './tracks/track.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nikita_admin:4dFgbOI8YY3I4dh8@cluster0.sjxbp.mongodb.net/music-platform?retryWrites=true&w=majority'),
    TrackModule
  ]
})

export class AppModule {}