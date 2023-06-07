import axios from 'axios';
interface UserData {
    id: string
    name: string;
    email: string;
    password: string;
}

const handleAddNewPost = (userID: string, content: string, img_url: string) => {
    return axios.post('http://localhost:8080/api/post/add', { userID: userID, content: content, img_url: img_url });
}

const getAllPostById = (inputId: string) => {
    return axios.get(`http://localhost:8080/api/get-all-posts?id=${inputId}`)
}

export { handleAddNewPost, getAllPostById };