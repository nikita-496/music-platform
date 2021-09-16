import { Module } from '@nestjs/common';
import { TrackModule } from './tracks/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from "path"
@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    MongooseModule.forRoot('mongodb+srv://nikita_admin:4dFgb@cluster0.sjxbp.mongodb.net/music-platform?retryWrites=true&w=majority'),
    TrackModule,
  ]
})

export class AppModule {}