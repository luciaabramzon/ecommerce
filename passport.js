const passport=require('passport')
const LocalStrategy=require('passport-local')
const User=require('./user.schema')
const {comparePassword, hashPassword}=require('./utils')
const {Types}=require('mongoose')

passport.use("login", new LocalStrategy(async (username, password, done) => {
  const user = await User.findOne({ username });
  if(!user){
    return done(null, null, { message: "Invalid username or password" });
  }
  const passHash = user.password;
  if ( !comparePassword(password, passHash)) {
    return done(null, null, { message: "Invalid username or password" })
  } else{
    return done(null, user);
  }
}))
  
  passport.use("signup", new LocalStrategy({
    passReqToCallback: true
  }, async (req, username, password, done) => {
    const user = await User.findOne({ username });
    if (user) {   
   return done(null, null);   
  
    }
    const hashedPassword = hashPassword(password);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    return done(null, newUser);
  }));
  
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  
  passport.deserializeUser(async (id, done) => {
    id = Types.ObjectId(id);
    const user = await User.findById(id);
    done(null, user);
  });