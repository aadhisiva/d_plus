import userRepo from '../repository/userRepository'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import HttpException from '../message/responseMessages';

const Userservices = {

    createnewUser: async (user) => {
        try {
            let userInfo = await userRepo.getUserByEmailID(user)
            if (userInfo.length > 0) {
                return { message: "The E-mail already in use" }
            } else {
                await userRepo.registerNewUser(user)
                return { message: "The user has been successfully inserted" }
            }
        } catch (e) {
            // throw new HttpException(500, e, "")
            return e
        }
    },

    loginUSer: async (user) => {
        try {
            let logData = await userRepo.checkEmail(user);
            if (logData.length === 0) {
                return { message: "Invalid email address" }
            }
            const salt = await bcrypt.genSaltSync(10);
            const passMatch = await bcrypt.hashSync(user.password, salt, logData[0].password)
            if (!passMatch) {
                return { message: "Incorrect password" }
            } else {
                const theToken = jwt.sign({ id: logData[0].id }, 'the-super-strong-secrect', { expiresIn: '2h' });
                return { token: theToken }
            }
        } catch (e) {
            return e;
        }
    },
    findOneById: async (id) => {
       try{ 
           let data= await userRepo.checkUserId(id)
        //    console.log(data)
           if(!(data[0])){
            return { message : "user not fount with this id ="+ id}
           } else {
               return {message : data}
           }
    } catch(e){
        return e
    }  
    },
    updateUserById: async (upData, id) => {
        try {
            let data = await userRepo.checkUserId(id);
            debugger;
            // console.log("data",!(data[0]))
            if (!(data[0])) {
                return { message: "users row is not defined with this id =" + id }
            } else {
                await userRepo.updateUser(upData, id)
                return { message: "updated successfully" }
            }
        } catch (e) {
            return e;
        }
    },
    deleteUserById: async (id)=>{
        try{
            let data = await userRepo.checkUserId(id);
            // console.log("data",data)
            if(!(data[0])){
                return { message: "users row is not defined with this id =" + id}
            }else{
              await userRepo._deleteByID(id)
              return { message : "deleted successfully"}
            }
        } catch(e){

        }
        
    },
    getCountries: async ()=>{
        try {
        let data = await userRepo._getCountryList()
        if(data){
            return data
        } else {
            return {message : "countries are not here"}
        }
    }catch(e){
        return e
    }
        
    }

}
export default Userservices;