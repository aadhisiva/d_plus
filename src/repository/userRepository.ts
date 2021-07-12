import db from '../config/dbconfig';

const userRepo = {
    registerNewUser: async (user) => {
        const { first_name, last_name, username, password, gender, dob,
            year_of_diagnosis, weight, height, metric, profile_pic, social_id, is_social_user, country_id } = user
        try {
            var q = `INSERT INTO d_plus_user(password, username, first_name, last_name, dob, gender, year_of_diagnosis, weight, height, metric, is_social_user, country_id, social_id, profile_pic) VALUES ('${password}','${username}','${first_name}','${last_name}','${dob}','${gender}','${year_of_diagnosis}','${weight}','${height}','${metric}','${is_social_user}','${country_id}','${social_id}','${profile_pic}')`
            let rows = await (await db).query(q, [user]);
            return (rows && rows.affectedRows)?user:undefined;
        } catch (e) {
            return e;
        }
    },
    getUserByEmailID: async (user) => {
        const { username } = user;
        try {
            var q = "SELECT `username` FROM `d_plus_user` WHERE `username`=?";
            let rows = (await db).query(q, [username])
               return rows
        } catch (e) {
            return e
        }

    },
    // _checkIdAndS_user: async (user) => {
    //     try {
    //         const {is_social_user } = user;
    //         var q = "SELECT `is_social_user` FROM `d_plus_user` WHERE `is_social_user`=?";
    //         return (await db).query(q, [is_social_user])
    //             .then((res) => {
    //                 return res;
    //             })
    //             .catch((err) => {
    //                 return err;
    //             })
    //     } catch (e) {
    //         return e
    //     }
    // },
    checkEmail: async (user) => {
        const { username } = user;
        try {
            let q = `SELECT * FROM d_plus_user WHERE username='${username}'`;
            let rows = (await db).query(q, [user])
             return rows;
        }
        catch (e) {
            return (e);
        }
    },
    _fetchLegalTerms: async ()=>{
      try {
           var q = "SELECT * FROM `d_legal_terms` WHERE 1"
        return (await db).query(q,[])
        .then((res)=>{
            console.log(res)
            return res;
        })
        .catch((err)=>{
            return err;
        })
    } catch(e) {
        return e;
    }
    },
    checkUserId: async (id) => {
        // console.log("repo",id)
        try {
            let q = `SELECT * FROM d_plus_user WHERE user_id='${id}'`;
            // var q = `UPDATE d_plus_user SET ?  WHERE id= ?`; 
            return (await db).query(q, [id])
                .then((res) => {
                    // console.log(res)
                    return res;
                })
                .catch((err) => {
                    return err;
                })
        }
        catch (e) {
            return e;
        }

    },
    updateUser: async (data, id) => {
        try {
            // let q = `SELECT * FROM d_plus_user WHERE id='${id}'`;
            var q = `UPDATE d_plus_user SET ?  WHERE id= ?`;
            return (await db).query(q, [data, id])
                .then((res) => {
                    return res;
                })
                .catch((err) => {
                    return err;
                })
        }
        catch (e) {
            return e;
        }
    },
    _deleteByID: async (id) => {
        try {
            var q = 'DELETE FROM d_plus_user where id = ? ';
            return (await db).query(q, [id])
                .then((res) => {
                    return res;
                })
                .catch((err) => {
                    return err;
                })
        } catch (e) {
            return e
        }
    },
    _getCountryList: async () => {
        try {
            var q = "SELECT * FROM `d_countries` WHERE 1"
            return (await db).query(q, [])
                .then((res) => {
                    // console.log(res)
                    return res
                })
                .catch((err) => {
                    return err;
                })
        } catch (e) {
            return e
        }
    },
    _fetchProfileDataById: async (id)=>{
        try {
            let q = `SELECT * FROM d_plus_user WHERE user_id='${id}'`;
        return await (await db).query(q,[id])
        .then((res)=>{
            // console.log("res...",res)
            return res;
        })
        .catch((err)=>{
            return err;
        })
    } catch(e){
        return e;
    }
    }
}

export default userRepo;