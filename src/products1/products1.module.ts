import { Product1, Product1Schema } from './schemas/products1.schema';
import { Products1Resolver } from './products1.resolver';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Products1Service } from './products1.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Product1.name, schema: Product1Schema}])],
  providers: [Products1Resolver, Products1Service],
})
export class Products1Module {}
