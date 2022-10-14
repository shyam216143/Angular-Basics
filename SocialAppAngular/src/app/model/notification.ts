import { Comment } from "./comment";
import { Post } from "./post";
import { User } from "./user";

export class Notification {
    id!: number;
	type!: string;
	receiver!: any;
	sender!: any;
	owningPost!: Post;
	owningComment!: Comment;
	isSeen!: boolean;
	isRead!: boolean;
	dateCreated!: string;
	dateUpdated!: string;
	dateLastModified!: string;
}
