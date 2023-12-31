import loader from "./components/loader.js"
import showMenu from "./components/showMenu.js"
import showCart from './components/showCart.js'
import products from "./components/products.js"
import getProducts from "./helpers/getProducts.js"
import cart from "./components/cart.js"
/* Ocultar loader*/
loader()



/*Show Menu*/
showMenu()

/*Show Cart */
showCart()

/*PRODUCTS*/
const {bd, printProducts} = products(await getProducts())


/*End Products*/

cart(bd, printProducts)