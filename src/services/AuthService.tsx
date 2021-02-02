import baseApi from './api';

class AuthService {
    public api = baseApi();
    constructor(){
    }

    async login(username: string, password: string){
        const result = await this.api.post(`https://frontend-test-api.aircall.io/auth/login`, {username, password});
        return result.data;
    }

}

export default AuthService;