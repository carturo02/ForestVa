import { reactive } from "vue"

let session = null

export function useSession() {
    return session;
}

export function loadSession() {
    const jwt = sessionStorage.getItem('jwt');
    if (jwt !== null) {
        const user = JSON.parse(atob(jwt.split('.')[1]));
        session = reactive({
            ...user
        })
    }
}