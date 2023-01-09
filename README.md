Endpoints probados en front:

USER
UserRouter.post('/signup',passport.authenticate("signup", {
    failureRedirect: "/failSignUp.html",
    session:false
  }),signUp)

UserRouter.post('/login',passport.authenticate("login",{
  failureRedirect:"/failSignUp.html",
  session:false
}) , login)

UserRouter.post('/api/logout',logout) 

Productos
ProductosRouter.get('/',getAllProducts)

Carrito

CarritoRouter.get('/',getAllCart)
CarritoRouter.post('/',addCart)
CarritoRouter.get('/:id',getCartById)
CarritoRouter.post('/:id/productos/:id_producto',updateCartById)
CarritoRouter.delete('/:id',deleteCartById)
CarritoRouter.delete('/:id/productos/:id_producto',deleteCartProductById)
CarritoRouter.post('/:id/comprar/:username',comprar)