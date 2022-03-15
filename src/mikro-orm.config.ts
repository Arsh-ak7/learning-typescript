import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { __prod__ } from './constants';
import { Post } from './entities/Post';

export default {
	migrations: {
		path: path.join(__dirname, './migrations'), // path to the folder with migrations
		pathTs: undefined, // path to the folder with TS migrations (if used, we should put path to compiled files in `path`)
		glob: '!(*.d).{js,ts}',
	},
	entities: [Post],
	dbName: 'lireddit',
	type: 'postgresql',
	debug: !__prod__,
	allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0];
