import { Controller } from "@/common/utils/Controller";
import { useSendRequest } from "@/common/utils/useSendRequest";
import type { Ref } from "vue";

export class Plant extends Controller{
    static url = 'Plants';
    static delete = this.url;

    static getElements() { 
        const { response, error } = useSendRequest({
            url: this.url
        }, ()=>{
            if(!error.value){
                response.value = response.value.map(plant => ({
                    id: plant.id,
                    structure: plant.structure,
                    specie: plant.specie,
                    height: parseInt(plant.height),
                    shaft_height: parseInt(plant.shaft_height),
                    minx: parseInt(plant.minx),
                    maxx: parseInt(plant.maxx),
                    miny: parseInt(plant.miny),
                    maxy: parseInt(plant.maxy)
                }))
            }
        })        
        return { response }
    }
}