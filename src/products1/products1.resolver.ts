import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateProductDto } from "src/products/dto/create-product.dto";
import { CreateProduct1Dto } from "./dto/create-product1.dto";
import { CreateProduct1Input } from "./inputs/create-product1.input";
import { Products1Service } from "./products1.service";

@Resolver()
export class Products1Resolver {
  constructor(
    private readonly products1Service: Products1Service
  ) {}

  @Query(() => String)
  async hello() {
    return "hello"
  }

  @Mutation(() => CreateProduct1Dto)
  async product1Create(@Args('createProduct1Input') createProduct1Input: CreateProduct1Input) {
    return this.products1Service.create(createProduct1Input)
  }
}