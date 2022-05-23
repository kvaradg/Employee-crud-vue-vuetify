import Vue from "vue"
import VueRouter from "vue-router"
import AllEmployee from "../components/AllEmployee"
import CreateNewEmployee from "../components/CreateNewEmployee"
import EditEmployee from "../components/EditEmployee"
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "AllEmployee",
        component:AllEmployee
    },
    {
        path: "/create-new-employee",
        name: "CreateNewEmployee",
        component:CreateNewEmployee,
    },
    {
        path: "/edit-employee/:id",
        name: "EditEmployee",
        component:EditEmployee,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router