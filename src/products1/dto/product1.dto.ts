import { Field, ID, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Product1Dto {
    @Field(() => ID)
    id: string
    @Field()
    readonly title: string
    @Field(() => Int)
    readonly price: number
}