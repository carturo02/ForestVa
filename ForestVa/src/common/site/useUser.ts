import { reactive } from "vue"

const session = reactive({
    id: null,
    rol: null
});

export function useSession() {
    return session;
}

export function loadSession() {
    const jwt = sessionStorage.getItem('jwt');
    if (jwt !== null) {
        const user = JSON.parse(atob(jwt.split('.')[1]));
        const session = useSession()
        session.id = user.id;
        session.rol = user.rol;
    }
}