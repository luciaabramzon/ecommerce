import chocotorta from '../../components/images/chocotortapng.png'
import trufas from '../images/trufas.jpg'
import macarrons from '../images/macarrons.jpg'
import carrotCake from '../images/carrotcake.jpg'
import lemonPie from '../images/lemonpie.jpg'
import ensalada from '../images/ensalada.jpg'
import wrap from '../images/wrap.jpg'
import quiche from '../images/quiche.jpg'



export const productosApi = [
    {
        id:"1",
        name: "Chocotorta",
        price:"150",
        stock:"8",
        img:chocotorta,
        description:"Tradicional Chocotorta sin azucar ni grasas saturadas",
        category:"dulces"
    },
    {
        id:"2",
        name:"Trufas",
        price:"50",
        stock:"12",
        img:trufas,
        description: "Trufas de chocolate amargo veganas",
        category:"dulces"
    },
    {
        id:"3",
        name: "Macarrons",
        price:"125",
        stock:"19",
        img:macarrons,
        description:"Macarrones sin grasas saturadas, sin azucar",
        category:"dulces"
    },
    {
        id:"4",
        name: "CarrotCake",
        price:"170",
        stock:"2",
        img:carrotCake,
        description:"CarrotCake baja en carbohidratos y alta en proteinas y grasas saludables",
        category:"dulces"
    },
    {
        id:"5",
        name: "Quiche",
        price:"250",
        stock:"3",
        img:quiche,
        description:"Quiche sin gluten de calabacin, cebolla caramelizada y queso de cabra",
        category:"salados"
    },
    {
        id:"6",
        name: "Lemon Pie",
        price:"150",
        stock:"5",
        img:lemonPie,
        description:"Sin lacteos",
        category:"dulces"
    },    {
        id:"7",
        name: "Wrap de Salmon",
        price:"270",
        stock:"11",
        img:wrap,
        description:"Wrap de salmon acompañado de verduras asadas, condimentado con mostaza dijon y queso crema",
        category:"salados"
    },
    {
        id:"8",
        name: "Ensalada",
        price:"170",
        stock:"5",
        img:ensalada,
        description:"Ensalada vegetariana, con frutas y frutos secos. Aderezo con un toque de miel",
        category:"salados"
    },

]