import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/IndexView.vue";
import CollectionsView from "@/views/collections/CollectionsView.vue";
import MenView from "@/views/men/MenView.vue";
import AboutView from "@/views/about/AboutView.vue";
import WomenView from "@/views/women/WomenView.vue";
import ContactView from "@/views/contact/ContactView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "About",
        component: AboutView,
    },
    {
        path: "/collections",
        name: "collections",
        component: CollectionsView,
    },
    {
        path: "/men",
        name: "Men",
        component: MenView,
    },
    {
        path: "/women",
        name: "Women",
        component: WomenView,
    },
    {
        path: "/contact",
        name: "Contact",
        component: ContactView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
