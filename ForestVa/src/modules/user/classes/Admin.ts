import { useSendRequest } from "@/common/utils/useSendRequest";
import { Controller } from "./User";

export class Admin extends Controller {
    static url = 'Admins';
    static static = 'Users';

    static getElements() {
        const { response, error } = useSendRequest({
            url: this.url
        }, () => {
            if (!error.value)
                response.value = response.value.map(admin => ({
                    id: admin.id,
                    user_name: admin.user.user_name,
                    first_name: admin.user.first_name,
                    last_name: admin.user.last_name,
                    parcelid: admin.parcelid
                }));
        })
        return { response }
    }
}