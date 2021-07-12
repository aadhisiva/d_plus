import userRepo from '../repository/userRepository'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import HttpException from '../message/responseMessages';

const Userservices = {
    createnewUser: async (user) => {
        try {
            let userInfo = await userRepo.getUserByEmailID(user)
            // console.log(userInfo)
            if (userInfo.length > 0) {
                return { message: "The E-mail already in use" }
            } else {
            let data =  await userRepo.registerNewUser(user);
            if(!data){
                return { message: "user data is not here" }
            }else {
                let cheData = await userRepo.checkEmail(user)
                 const theToken = jwt.sign({ id: data.username }, 'the-super-strong-secrect', { expiresIn: '2h' });            
                 return {user_id:cheData[0].user_id,is_social_user:data.is_social_user,accessToken:theToken}; 
            }
            }
        } catch (e) {
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
                const theToken = jwt.sign({ id: logData[0].username }, 'the-super-strong-secrect', { expiresIn: '2h' });
                return { user_id: logData[0].user_id,is_social_user:logData[0].is_social_user,accessToken:theToken }
            }
        } catch (e) {
            return e;
        }
    },
    getLegalTerms: async ()=>{
        try{
        let data = await userRepo._fetchLegalTerms()
        // console.log(data);
        if(!data){
            return { messages:"legal terms data is not here"}
        } else {
            return {user_id:data[0].user_id}
        }

    } catch(e) {
        return e
    }
    },
    getProfileData: async (id)=>{
        try{
        let data = await userRepo._fetchProfileDataById(id)
        console.log("id...",data[0]);
        if(!(data[0])){
            return { userdata : "user not fount with this id ="+ id}
        } else {
            return {userdata : data}
        }

    } catch(e) {
        return e
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
            // return {country_id:data.country_id,country_name:data.country_name,country_flag:data.country_flag}
        } else {
            return {message : "countries data not here"}
        }
    }catch(e){
        return e
    }
        
    }

}
export default Userservices;