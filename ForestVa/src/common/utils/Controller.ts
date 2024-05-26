import { useSendRequest } from "@/common/utils/useSendRequest";
import useEvents from "./useEvents";

export abstract class Controller {
    static url: string;
    static delete: string;

    static getElements() {
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
        }, this.handleError);
    }

    static deleteElement(id) {
        useSendRequest({
            url: `${this.delete}/${id}`,
            method: 'DELETE'
        }, this.handleError)
    }

    static createElement(data) {
        useSendRequest({
            url: this.url,
            method: 'POST',
            data
        }, this.handleError)
    }

    private static handleError(response, error) {
        if (!error?.value){
            window.location.reload();
        }
        else
            useEvents().dispatch('showToast', {
                severity: 'error',
                summary: 'Error message',
                detail: error.value.message,
                life: 3000,
            });
    }
}