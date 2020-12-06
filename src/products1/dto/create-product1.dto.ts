import { Field, ID, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class CreateProduct1Dto {
    @Field(() => ID)
    id: string
    @Field()
    readonly title: string
    @Field(() => Int)
    readonly price: number
}