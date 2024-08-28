import axios from "axios";

// notification section end

// api common url 
const API_URL = 'http://localhost:8080/api';

// get authorization token 
const getAuthToken = () => {
    return JSON.parse(localStorage.getItem('user')).authorization; // Adjust the key if needed
};


export const getAllCustomers = async (page = 0, size = 10, status, name) => {
    try {
        const response = await axios.get(`${API_URL}/user/customers`, {
            params: { page, size, status, name },
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAllStaff = async (page = 0, size = 10) => {
    try {
        const response = await axios.get(`${API_URL}/user/staff-members`, {
            params: { page, size },
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}/user/delete/${userId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}


// api call section
// export const createItem = async (formData) => {
//     try {
//         const response = await axios.post(`${API_URL}/item/create-item`, formData, {
//             headers: {
//                 'Authorization': `${getAuthToken()}`
//             }
//         });
//         return response.data;
//     } catch (error) {
//         throw new Error('Failed to create item: ' + error.message);
//     }
// }

// Item Endpoints
export const createItem = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/item/create-item`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateItem = async (itemId, formData) => {
    try {
        const response = await axios.put(`${API_URL}/item/update/${itemId}`, formData, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteItem = async (itemId) => {
    try {
        const response = await axios.delete(`${API_URL}/item/delete/${itemId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateItemRate = async (itemId, rate) => {
    try {
        const response = await axios.put(`${API_URL}/item/rate/${itemId}`, { rate }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Offer Endpoints
export const createOffer = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/offer/create-offer`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateOffer = async (offerId, formData) => {
    try {
        const response = await axios.put(`${API_URL}/offer/update-offer/${offerId}`, formData, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const deleteOffer = async (offerId) => {
    try {
        const response = await axios.delete(`${API_URL}/offer/delete/${offerId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}