import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { Products1Module } from './products1/products1.module';

@Module({
  imports: [
            ProductsModule, 
            MongooseModule.forRoot('mongodb+srv://Pavel:uNbkY0RBxHYG7pgD@cluster0.kfqbg.mongodb.net/NestPro?retryWrites=true&w=majority'),
            Products1Module, 
            GraphQLModule.forRoot({
              autoSchemaFile: true
            })
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
