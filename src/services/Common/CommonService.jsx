import axios from "axios";

const API_URL = 'http://localhost:8080/api';

// User Endpoints
export const updateUser = async (formData) => {
    try {
        const response = await axios.put(`${API_URL}/user/update`, formData, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Item Endpoints

export const getItemById = async (itemId) => {
    try {
        const response = await axios.get(`${API_URL}/item/${itemId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAllItems = async (page = 0, size = 10, itemName, categoryName, rate) => {
    try {
        const response = await axios.get(`${API_URL}/item/items`, {
            params: { page, size, itemName, categoryName, rate },
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Category Endpoints
export const createCategory = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/category/create-category`, formData, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAllCategories = async (page = 0, size = 10, categoryName) => {
    try {
        const response = await axios.get(`${API_URL}/category/categories`, {
            params: { page, size, categoryName },
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Offer Endpoints

export const getAllOffers = async (page = 0, size = 10, offerName, startDate, endDate) => {
    try {
        const response = await axios.get(`${API_URL}/offer/offers`, {
            params: { page, size, offerName, startDate, endDate },
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Order Endpoints

export const updateOrderStatus = async (orderId, status) => {
    try {
        const response = await axios.put(`${API_URL}/order/update-order-status/${orderId}`, { status }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAllOrders = async (page = 0, size = 10, paymentStatus) => {
    try {
        const response = await axios.get(`${API_URL}/order/orders`, {
            params: { page, size, paymentStatus },
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}