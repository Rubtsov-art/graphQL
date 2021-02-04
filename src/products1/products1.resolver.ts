import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Product1Dto } from "./dto/product1.dto";
import { CreateProduct1Input } from "./inputs/create-product1.input";
import { Products1Service } from "./products1.service";

@Resolver()
export class Products1Resolver {
  constructor(
    private readonly products1Service: Products1Service
  ) {}

  @Query(() => [Product1Dto])
  async getAll1() {
    return this.products1Service.getAll();
  }

  @Query(() => Product1Dto)
  async getProduct1ById(@Args('id') id: String) {
    return this.products1Service.getProduct1ById(id);
  }

  @Query(() => Product1Dto)
  async removeProduct1ById(@Args('id') id: String) {
    return this.products1Service.removeProduct1ById(id);
  }

  @Mutation(() => Product1Dto)
  async product1Create(@Args('createProduct1Input') createProduct1Input: CreateProduct1Input) {
    return this.products1Service.create(createProduct1Input)
  }

  @Mutation(() => Product1Dto)
  async updateProduct1(@Args('createProduct1Input') createProduct1Input: CreateProduct1Input) {
    return this.products1Service.updateProduct1(createProduct1Input)
  }
}