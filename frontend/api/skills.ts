import {SkillInterface} from "~/backendTypes/skill";

export default (axios: any, config: any) => ({
    async add(formData: SkillInterface) {
        const req = Object.entries(formData).map(params => params.join(`=`)).join(`&`);
        const {data} = await axios.post(`${config.API_URL}/skills`, req);
        return data;
    },
    async update(id: number, formData: SkillInterface) {
        const req = Object.entries(formData).map(params => params.join(`=`)).join(`&`);
        const {data} = await axios.put(`${config.API_URL}/skills/${id}`, req);
        return data;
    },
    async get(): Promise<SkillInterface> {
        const {data} = await axios.get(`${config.API_URL}/skills`);
        return data;
    },
    async delete(id: number) {
        await axios.delete(`${config.API_URL}/skills/${id}`);
    }
});