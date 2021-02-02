import { decodeToken } from 'react-jwt';

const IsAuthenticated = () => {
    let token = localStorage.getItem('TOKEN') || '';
    const decodedToken = decodeToken(token);
    return decodedToken;
};
export const getToken = () => localStorage.getItem('TOKEN');

export default IsAuthenticated;