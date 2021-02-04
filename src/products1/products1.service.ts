import { Product1Dto } from './dto/product1.dto';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product1, Product1Document } from "./schemas/products1.schema";
import { CreateProduct1Input } from './inputs/create-product1.input';

@Injectable() 
export class Products1Service {
    constructor(@InjectModel(Product1.name) private readonly product1Module: Model<Product1Document>) {}

    async getAll(): Promise<Product1[]> {
        return await this.product1Module.find();
    }

    async getProduct1ById(id: String): Promise<Product1> {
        return await this.product1Module.findById(id);
    }

    async removeProduct1ById(id: String): Promise<Product1> {
        return await this.product1Module.findByIdAndRemove(id);
    }

    async create(createProduct1Input: CreateProduct1Input): Promise<Product1> {
        const createdProduct1 = new this.product1Module(createProduct1Input);
        return await createdProduct1.save();
    }

    async updateProduct1(createProduct1Dto: CreateProduct1Dto): Promise<Product1> {
        return this.product1Module.findByIdAndUpdate(createProduct1Dto, {new: true})
    }
}