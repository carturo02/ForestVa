import { Controller } from "@/common/utils/Controller";
import { useSendRequest } from "@/common/utils/useSendRequest";
import type { Ref } from "vue";

export class Ground extends Controller{
    static url = 'Grounds';
    static delete = this.url;

    static getElements() { 
        const { response, error } = useSendRequest({
            url: this.url
        }, ()=>{
            if(!error.value){
                response.value = response.value.map(ground => ({
                    id: ground.id,
                    condition: parseInt(ground.condition),
                    relief_erosion: parseInt(ground.relief_erosion),
                    water_table: parseInt(ground.water_table),
                    vegetation: parseInt(ground.vegetation),
                }))
            }
        })        
        return { response }
    }
}