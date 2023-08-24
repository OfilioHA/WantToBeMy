
import { 
    RouteRecordRaw, 
    createRouter, 
    createWebHistory 
} from "vue-router";

import IndexPage from "./pages/index.vue";
import MessagePage from "./pages/message.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: IndexPage
    },
    {
        path: "/message",
        component: MessagePage,
        meta: { layout: 'clean' }
    }
];

const router = createRouter({
    history: createWebHistory(), 
    routes
});

export default router;