import axios from 'axios';
export const SAVE_COMMENT = 'SAVE_COMMENT';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export async function fetchComments() {
    const res = await axios.get(
        'https://jsonplaceholder.typicode.com/comments'
    );
    const resData = res.data.map(({ name }) => name);
    return {
        type: FETCH_COMMENTS,
        payload: resData
    };
}
