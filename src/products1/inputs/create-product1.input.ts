import { Field, InputType, Int } from "@nestjs/graphql"

@InputType()
export class CreateProduct1Input {
    @Field()
    readonly title: string
    @Field(() => Int)
    readonly price: number
}