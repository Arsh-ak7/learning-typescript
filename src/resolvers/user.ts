import { User } from 'src/entities/User';
import { MyContext } from 'src/types';
import { Resolver, Query, Ctx, Arg, Int, Mutation, Field } from 'type-graphql';

class UsernameAndPasswordInput {
	@Field()
	username: string;
	@Field()
	password: string;
}

@Resolver()
export class UserResolver {
	@Mutation(() => String)
	async register(
		@Arg('options') options: UsernameAndPasswordInput,
		@Ctx() { em }: MyContext
	) {
		const user = em.create(User, { username: options.username });
		await em.persistAndFlush(user);
	}
}
