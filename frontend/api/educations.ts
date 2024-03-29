import {EducationInterface} from "~/backendTypes/education";

export default (axios: any, config: any) => ({
    async add(formData: EducationInterface) {
        const req = Object.entries(formData).map(params => params.join(`=`)).join(`&`);
        const {data} = await axios.post(`${config.API_URL}/educations`, req);
        return data;
    },
    async update(id: number, formData: EducationInterface) {
        const req = Object.entries(formData).map(params => params.join(`=`)).join(`&`);
        const {data} = await axios.put(`${config.API_URL}/educations/${id}`, req);
        return data;
    },
    async get(): Promise<EducationInterface> {
        const {data} = await axios.get(`${config.API_URL}/educations`);
        return data;
    },
    async delete(id: number) {
        await axios.delete(`${config.API_URL}/educations/${id}`);
    }
});