import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product1, Product1Document } from "./schemas/products1.schema";
import { CreateProduct1Input } from './inputs/create-product1.input';

@Injectable() 
export class Products1Service {
    constructor(@InjectModel(Product1.name) private readonly product1Module: Model<Product1Document>) {}

    async create(createProduct1Input: CreateProduct1Input): Promise<Product1> {
        const createdProduct1 = new this.product1Module(createProduct1Input);
        return await createdProduct1.save();
    }
}