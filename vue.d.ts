import {AxiosInstance} from 'axios';

declare module 'vue/types/vue' {
    interface Vue {
        axios: AxiosInstance;
    }

    interface VueConstructor<V extends Vue = Vue> {
        axios: AxiosInstance;
    }
}
