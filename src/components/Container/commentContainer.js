import { useEffect, useState } from "react";

import commentApi from "../../lib/dexie/commentApi";
import styles from './commentContainer.module.scss';

const CommentContainer = ({ filmId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentApi.getComments(filmId)
        .then(data => setComments(data));
    }, [filmId])

    const handleSubmit = (e) => {
        e.preventDefault();
        const content = e.target[0].value;

        commentApi.add(content, filmId)
        .then(() => {
            setComments(data => [...data, { content: content }]);
        });
        e.target[0].value = '';
    }

    return <div className={styles.container}>
        <form onSubmit={handleSubmit}>
            <textarea></textarea>
            <input type="submit" value="Commenter" />
        </form>
        {comments.map((comment, index) =>
            <div className={styles.comment} key={index}>{comment.content}</div>
        )}
    </div>
}

export default CommentContainer;
