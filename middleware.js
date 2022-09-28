function authMiddleware (req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect("/login.html");
  } else {
    next();
  }
};


module.exports= {authMiddleware}