import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type Product1Document = Product1 & Document

@Schema()
export class Product1 {
    @Prop()
    title: string

    @Prop()
    price: number
}

export const  Product1Schema = SchemaFactory.createForClass(Product1)