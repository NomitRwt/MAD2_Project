const About = Vue.component("About",{
    template:`
    <div>
        This is a simple web app about page.
    </div>
    `
})

const Home = Vue.component("Home",{
    template:`
    <div>
        This is a simple web app home page.
    </div>
    `
})

const Course = Vue.component("Course",{
    template:`
    <div>
        This is a simple web app course page.
    </div>
    `
})

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/course/:id",
        component: Course,
    },
]

const router = new VueRouter.createRouter({
    routes,
})

const app = new Vue({
    el: "#app",
    router: router,
})