import express from 'express';
import bcrypt from 'bcryptjs';
import passport from "passport";
import auth from '../validations/authValidations';
import Userservices from '../services/userServices';
import sharedData from '../sharedData/sharedData';
import responseMesg from '../message/responseMessages'

let router = express.Router();

router.get('/getcountries', async (req, res) => {
  let messages = await Userservices.getCountries()
  // let data = responseMesg("SUCCESS", message,'')
  return res.send({ status: "success", code: 200, messages });
})
router.post('/signup', auth.validateRegister, async (req, res, next) => {
  let data = sharedData(req, res)
  if (data) {
    return data
  }
  try {
    var hashPass = await bcrypt.hash(req.body.password, 10)
    let newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      password: hashPass,
      gender: req.body.gender,
      dob: req.body.dob,
      year_of_diagnosis:req.body.year_of_diagnosis,
      weight: req.body.weight,
      height: req.body.height,
      profile_pic: req.body.profile_pic,
      social_id:req.body.social_id,
      is_social_user: req.body.is_social_user,
      country_id: req.body.country_id,
      metric: req.body.metric,
    }
    let messages = await Userservices.createnewUser(newUser);
    // let message = responseMesg('SUCCESS', messages, '')
    return res.send({status: "success",code: 200,messages})
  } catch (err) {
    next(err);
  }
})

router.get('/data/:id', async (req, res) => {
  try {
    const id = req.params.id
    let message = await Userservices.findOneById(id)
    return res.send(message)
  } catch (e) {
    return e
  }
})

router.put('/update/:id', async (req, res) => {
  try {
    const id = req.params.id
    // console.log("api",id)
    var upData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username
    }
    let message = await Userservices.updateUserById(upData, id)
    return res.send(message)
  }
  catch (e) {
    return e
  }
})

router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  let message = await Userservices.deleteUserById(id)
  return res.send(message)
})

router.post('/login', auth.validateLogin, async (req, res, next) => {
  let data = sharedData(req, res)
  if (data) {
    return data
  }
  try {
    let logUser = {
      username: req.body.username,
      password: req.body.password
    }
    let messages = await Userservices.loginUSer(logUser)
    // console.log("data", data)
    // let message = responseMesg('SUCCESS', data, '');
    return res.send({status: "success",code: 200,messages})
  } catch (err) {
    next(err);
  }
})

router.get('/legal-terms',async (req,res)=>{
    let messages = await Userservices.getLegalTerms()
    res.send({status: "success",code: 200,messages})
})

router.get('/profile-setup',async (req,res,next)=>{
  let id = req.body.user_id
  let messages = await Userservices.getProfileData(id)
  return res.send({status: "success",code:200,messages})
})

// router.get('/auth/facebook',
//   passport.authenticate('facebook'));

// router.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { failureRedirect: '/login' }),
//   function (req, res) {
//     console.log("req =>", req.isAuthenticated());
//     res.send('success');
//   });

// router.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] }));

// router.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function (req, res) {
//     console.log("req =>", req.isAuthenticated());
//     res.send('success');
//   });
// router.get('/login', (req, res) => {
//   res.send("login successfully")
// })

// router.get('/logout', (req, res, next) => {
//   req.logout();
//   res.send('user is logout');
// });

export default router;

