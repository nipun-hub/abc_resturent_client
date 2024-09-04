import axios from "axios";
import { errorHandle, notify } from "../../utils/Common/Notification";

// notification section end

// api common url 
const API_URL = 'http://localhost:8080/api';

// get authorization token 
const getAuthToken = () => {
    return JSON.parse(localStorage.getItem('user')).authorization; // Adjust the key if needed
};

// user and customer endpoint 

export const getAllCustomers = async (page = 0, size = 10, status = null, name = null) => {
    try {
        const response = await axios.get(`${API_URL}/user/customers`, {
            params: { page, size },
            headers: { Authorization: getAuthToken() }
        });
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

export const getAllStaff = async () => {
    try {
        const response = await axios.get(`${API_URL}/user/staff-members`, {
            headers: { Authorization: getAuthToken() }
        });
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}/user/delete/${userId}`, {
            headers: { Authorization: getAuthToken() }
        });
        notify('Successfully deleted user.', 'success')
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}


// Item Endpoints
export const createItem = async (formData) => {
    console.log(formData)
    try {
        const response = await axios.post(`${API_URL}/item/create-item`, formData, {
            headers: {
                Authorization: getAuthToken(),
                'Content-Type': 'multipart/form-data'
            }
        });
        notify('Successfully create item', 'success')
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

export const updateItem = async (itemId, body) => {
    try {
        const response = await axios.put(`${API_URL}/item/update/${itemId}`, body, {
            headers: { Authorization: getAuthToken() },
            'Content-Type': 'multipart/form-data'
        });
        notify('Successfully updated item', 'success')
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

export const deleteItem = async (itemId) => {
    try {
        const response = await axios.delete(`${API_URL}/item/delete/${itemId}`, {
            headers: { Authorization: getAuthToken() }
        });
        notify('Successfully deleted item', 'success')
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

export const updateItemRate = async (itemId, rate) => {
    try {
        const response = await axios.put(`${API_URL}/item/rate/${itemId}`, { rate }, {
            headers: { Authorization: getAuthToken() }
        });
        notify('Successfully updated item', 'success')
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

// Category Endpoints
export const createCategory = async (body) => {
    try {
        const response = await axios.post(`${API_URL}/category/create-category`, body, {
            headers: { Authorization: getAuthToken() }
        });
        notify('Successfully create category', 'success')
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Offer Endpoints
export const createOffer = async (body) => {
    try {
        const response = await axios.post(`${API_URL}/offer/create-offer`, body, {
            headers: {
                Authorization: getAuthToken(),
                'Content-Type': 'multipart/form-data'
            }
        });
        notify('Successfully create offer', 'success')
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

export const updateOffer = async (offerId, formData) => {
    try {
        const response = await axios.put(`${API_URL}/offer/update-offer/${offerId}`, formData, {
            headers: { Authorization: getAuthToken() }
        });
        notify('Successfully updated offers', 'success')
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}
export const deleteOffer = async (offerId) => {
    try {
        const response = await axios.delete(`${API_URL}/offer/delete/${offerId}`, {
            headers: { Authorization: getAuthToken() }
        });
        notify('successfully delete offers', 'success')
        return response.data;
    } catch (error) {
        errorHandle(error)
        throw error;
    }
}

// Order endpoint 

export const getAllOrders = async () => {
    try {
        const response = await axios.get(`${API_URL}/order/orders`, {
            headers: { Authorization: getAuthToken() }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}