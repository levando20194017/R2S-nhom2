import axios from 'axios';
const handleAddNewComment = (userID: string, content: string, postID: string) => {
    return axios.post('http://localhost:8080/api/comment/add', { userID: userID, content: content, postID: postID });
}

const getAllCommentById = (inputId: string) => {
    return axios.get(`http://localhost:8080/api/get-all-comments?id=${inputId}`)
}

const getAllLikesOfComment = (inputId: string) => {
    return axios.get(`http://localhost:8080/api/comment/get-all-likes?id=${inputId}`)
}
const handleLikeComment = (userID: string, commentID: string) => {
    return axios.post('http://localhost:8080/api/comment/isliked', { userID: userID, commentID: commentID });
}

export { handleAddNewComment, getAllCommentById, getAllLikesOfComment, handleLikeComment };