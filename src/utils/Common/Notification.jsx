import toast from "react-hot-toast";

export const notify = (message, type) => {
    type == 'success' && toast.success(message);
    type == 'error' && toast.error(message);
};

export const errorHandle = (error) => {
    error.code == 'ERR_BAD_REQUEST' ? notify(error.response.data.message, 'error') : toast.error('Something wrong!\n Please try again later');
}

export const getUserId = () => {
    return JSON.parse(localStorage.getItem('user')).token; // Adjust the key if needed
};