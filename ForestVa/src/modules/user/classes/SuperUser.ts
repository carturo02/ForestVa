import { useSendRequest } from "@/common/utils/useSendRequest";
import { Controller } from "@/common/utils/Controller";

export class SuperUser extends Controller{
    static url = "Superusers";
    static delete = "Users";
    
    static getElements() {
        const { response, error } = useSendRequest({
            url: this.url
        }, () => {
            if (!error.value)
                response.value = response.value.map(superuser => ({
                    id: superuser.id,
                    user_name: superuser.user.user_name,
                    first_name: superuser.user.first_name,
                    last_name: superuser.user.last_name,
                }));
        })
        return { response }
    }
}