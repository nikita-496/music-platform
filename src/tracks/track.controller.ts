import { Controller, Get } from "@nestjs/common";

@Controller('/tracks') //путь к контроллеру. Все методы данного контроллера будут вызываться
//по данному маршруту
export class TrackController{
   create() {

  }
   @Get()
   getAll() {
    return("Work")
  }

   getOne() {

  }

   delete() {
    
  }
}