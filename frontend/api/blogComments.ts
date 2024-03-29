import {CommentInterface} from "~/backendTypes/blog/comment";

export default (axios: any, config: any) => ({
    async add(formData: CommentInterface) {
        const req = Object.entries(formData).map(params => params.join(`=`)).join(`&`);
        const {data} = await axios.post(`${config.API_URL}/blog/comments`, req);
        return data;
    },
    async update(id: number, formData: CommentInterface) {
        const req = Object.entries(formData).map(params => params.join(`=`)).join(`&`);
        const {data} = await axios.put(`${config.API_URL}/blog/comments/${id}`, req);
        return data;
    },
    async get(): Promise<CommentInterface[]> {
        const {data} = await axios.get(`${config.API_URL}/blog/comments`);
        return data;
    },
    async getByCode(code: string) {
        const {data} = await axios.get(`${config.API_URL}/blog/comments/${code}`);
        return data;
    },
    async delete(id: number) {
        await axios.delete(`${config.API_URL}/blog/comments/${id}`);
    }
});
