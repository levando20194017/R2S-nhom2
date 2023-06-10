import axios from 'axios';
const handleAddNewComment = (userID: string, content: string, postID: string) => {
    return axios.post('http://localhost:8080/api/comment/add', { userID: userID, content: content, postID: postID });
}

const getAllCommentById = (inputId: string) => {
    return axios.get(`http://localhost:8080/api/get-all-comments?id=${inputId}`)
}

export { handleAddNewComment, getAllCommentById };