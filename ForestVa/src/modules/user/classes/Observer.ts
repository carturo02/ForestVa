import { useSendRequest } from "@/common/utils/useSendRequest";
import { Controller } from "./User";

export class Observer extends Controller {
    static url = 'Observers';
    static delete = 'Users';

    static getElements() {
        const { response, error } = useSendRequest({
            url: this.url
        }, () => {
            if (!error.value)
                response.value = response.value.map(observer => ({
                    id: observer.id,
                    user_name: observer.user.user_name,
                    first_name: observer.user.first_name,
                    last_name: observer.user.last_name,
                    parcelid: observer.parcelid
                }))
        })

        return { response };
    }

}