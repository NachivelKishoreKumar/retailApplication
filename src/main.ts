import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cors = require('cors')



const bootStrap = async() => {
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  await app.listen(3001);
  
}
bootStrap();
