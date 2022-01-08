import { _application, _context, _router } from './deps.ts';
import { getAllProducts, getProductById } from './lib/controllers/products.ts';

const app = new _application();
const router = new _router();

router.get('/', async (context: _context)  => {
        await console.log('YeetShop Api')
    })
    .get('/products', getAllProducts)
    .get('/products/:id', getProductById)


app.use(router.routes());

app.use(router.allowedMethods());
await app.listen({ port: 9000 });