import axios, { AxiosError, AxiosHeaders, type AxiosRequestConfig } from "axios";
import { ref, type Ref } from "vue";

interface RequestOptions {
    url: string
    method?: 'GET' | 'POST' | 'DELETE' | 'PATCH',
    data?: Object,
    immediate?: boolean,
}

interface UseSendRequestResult {
    response: Ref<any>,
    error: Ref<AxiosError | null>,
    loading: Ref<boolean>,
    sendRequest?: CallableFunction
}

export function useSendRequest(requestOptions: RequestOptions, cb = (response?: any, error?: Ref<AxiosError | null>) => { }): UseSendRequestResult {
    const response = ref();
    const loading = ref<boolean>(false);
    const error = ref<AxiosError | null>(null);

    function sendRequest() {

        const config: AxiosRequestConfig = {
            headers: new AxiosHeaders(),
            method: requestOptions.method || 'GET',
            url: `http://localhost:3000/api/${requestOptions.url}`,
        }

        const token = sessionStorage.getItem('jwt');
        if (token) {
            if (config.headers) config.headers.Authorization = `Bearer ${token}`;
        }

        if (requestOptions.data)
            !requestOptions.method || requestOptions.method === 'GET' ?
                config.params = requestOptions.data :
                config.data = requestOptions.data;

        axios(config)
            .then(res => {
                response.value = res.data
                error.value = null
            })
            .catch(err => {
                error.value = err
            })
            .finally(async () => {
                loading.value = false;
                cb(response, error);
            });

        loading.value = true;

    }

    const result: UseSendRequestResult = {
        response,
        error,
        loading
    };

    if (requestOptions.immediate || requestOptions.immediate === undefined)
        sendRequest();
    else
        result.sendRequest = sendRequest;
    return result;
}