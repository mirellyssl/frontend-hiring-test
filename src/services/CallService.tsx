import baseApi from './api';

class CallService {
    public api = baseApi();
    constructor(){
    }

    async getCalls(offSet: any, limit: any){
        const result = await this.api.get(`https://frontend-test-api.aircall.io/calls`, {params: {offset: offSet, limit: limit}});
        return result.data;
    }

    async updateCalls(id: string, ){
        const result = await this.api.put(`https://frontend-test-api.aircall.io/calls/${id}/archive`);
        return result.data;
    }
}

export default CallService;