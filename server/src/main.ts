import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";

const start = async () => {
  try{
    const PORT = process.env.PORT || 5000
    const app = NestFactory.create(AppModule);
    (await app).enableCors(); 
    (await app).listen(PORT, () => console.log(`server started on POSRT ${PORT}`))
  }
  catch (e) {
    console.log(e)
  }
}

start()