

//definimos las rutas

const Home =()=> import('./componets/Home.vue')
const Contacto =()=> import('./componets/Contacto.vue')


//rutas para el blog como tal (crud)

const Mostar =()=> import('./componets/blog/Mostrar.vue')
const Editar =()=> import('./componets/blog/Editar.vue')
const Crear =()=> import('./componets/blog/Crear.vue')


export const routes=[
    {
        name:'home', //el nombre para acceder al componente desde las visstas 
        path:'/', //url
        component:Home
    },
    {
        name:'contacto',
        path:'/contacto', //url
        component:Contacto
    },
    {
        name:'mostrar_blogs',
        path:'/blogs', //url
        component:Mostar
    },
    {
        name:'editar_blog',
        path:'/editar/:id', //url
        component:Editar
    },
    {
        name:'crear_blog',
        path:'/crear', //url
        component:Crear
    }

]
