import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import "dotenv/config";


@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_DB_URL,{
      useNewUrlParser: true
    }),
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
