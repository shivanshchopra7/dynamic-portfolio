import axios from 'axios';

const API_BASE_URL = 'https://portfolio-backend-30mp.onrender.com/api/v1';

export const getUserData = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/get/user/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user data');
    }
};
