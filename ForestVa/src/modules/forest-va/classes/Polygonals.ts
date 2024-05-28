import { Controller } from "@/common/utils/Controller";
import { useSendRequest } from "@/common/utils/useSendRequest";

export class Polygonal extends Controller{
    static url = 'Polygonals';
    static delete = this.url;

    static getElements(){
        const { response, error } = useSendRequest({
            url: this.url
        }, ()=>{
            if(!error.value)
            response.value = response.value.map(element=>({
                id: element.id,
                maxx: parseFloat(element.maxx),
                maxy: parseFloat(element.maxy),
                minx: parseFloat(element.minx),
                miny: parseFloat(element.miny),
            }))
        })
        return { response }
    }
}