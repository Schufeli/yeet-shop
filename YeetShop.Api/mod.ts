import { _application, _context, _router } from './deps.ts';
import { getAllOrders, getOrderById, createOrder } from './lib/controllers/orders.ts';
import { getAllProducts, getProductById } from './lib/controllers/products.ts';

const app = new _application();
const router = new _router();

router.get('/', async (context: _context)  => {
        await console.log('YeetShop Api')
    })
    .get('/products', getAllProducts)
    .get('/products/:id', getProductById)
    .get('/orders', getAllOrders)
    .get('/orders/:id', getOrderById)
    .post('/orders', createOrder)

app.use(router.routes());

app.use(router.allowedMethods());
await app.listen({ port: 9000 });