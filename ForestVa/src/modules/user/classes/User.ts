import { useSendRequest } from "@/common/utils/useSendRequest";

export abstract class Controller {
    static url: string;
    static delete: string;

    static getElements(){
        const { response } = useSendRequest({
            url: this.url
        })        
        return { response }
    }

    static edit(data) {
        const id = data.id;
        delete data.id;
        useSendRequest({
            url: `${this.url}/${id}`,
            method: 'PATCH',
            data: data
        })
    }

    static deleteElement(id) {
        useSendRequest({
            url: `${this.delete}/${id}`,
            method: 'DELETE'
        })
    }
}