import {TagInterface} from "~/backendTypes/blog/tag";

export default (axios: any, config: any) => ({
    async add(formData: TagInterface) {
        const req = Object.entries(formData).map(params => params.join(`=`)).join(`&`);
        const {data} = await axios.post(`${config.API_URL}/blog/tags`, req);
        return data;
    },
    async update(id: number, formData: TagInterface) {
        const req = Object.entries(formData).map(params => params.join(`=`)).join(`&`);
        const {data} = await axios.put(`${config.API_URL}/blog/tags/${id}`, req);
        return data;
    },
    async get(): Promise<TagInterface[]> {
        const {data} = await axios.get(`${config.API_URL}/blog/tags`);
        return data;
    },
    async getByCode(code: string) {
        const {data} = await axios.get(`${config.API_URL}/blog/tags/${code}`);
        return data;
    },
    async delete(id: number) {
        await axios.delete(`${config.API_URL}/blog/tags/${id}`);
    }
});
