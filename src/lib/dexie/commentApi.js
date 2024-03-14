import { db } from "./db";

class CommentApi {
    constructor(connection) {
        this.connection = connection;
    }

    async add(content, filmId) {
        return await db.comment.add({
            filmId: filmId,
            content: content
        });
    }

    async getComments(filmId) {
        return db.comment.where('filmId').equals(filmId).toArray();
    }
}

let commentApi = null;

const getCommentApi = () => {
    if (!commentApi) {
        commentApi = new CommentApi(db);
    }

    return commentApi;
}

export default getCommentApi();
