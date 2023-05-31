import axios from 'axios';

const handleLoginApi = (userEmail: string, userPassword: string) => {
    return axios.post('http://localhost:8080/api/login', { email: userEmail, password: userPassword });
}

const getAllUsers = (inputId: string) => {
    return axios.get(`http://localhost:8080/api/get-all-users?id=${inputId}`);
}

interface UserData {
    name: string;
    email: string;
    password: string;
}

const createNewUserService = (data: UserData) => {
    return axios.post('http://localhost:8080/api/create-new-user', data);
}

const deleteUserService = (userId: string) => {
    return axios.delete('http://localhost:8080/api/delete-user', {
        data: { id: userId }
    });
}

const editUserService = (data: UserData) => {
    return axios.put('http://localhost:8080/api/edit-user', data);
}

export { handleLoginApi, getAllUsers, createNewUserService, deleteUserService, editUserService }; 