import db from '../config/dbconfig';

const userRepo = {
    registerNewUser: async (user) => {
        const { firstName, email, password, lastName, username } = user
        try {
            var q = `INSERT INTO d_plus_user(firstName, email, password, lastName, username) VALUES ('${firstName}','${email}','${password}','${lastName}','${username}')`
            let rows = (await db).query(q, [user]);
            return rows;
        } catch (e) {
            return e;
        }
    },
    getUserByEmailID: async (user) => {
        const { email } = user;
        try {
            var q = "SELECT `email` FROM `d_plus_user` WHERE `email`=?";
            return (await db).query(q, [email])
                .then((rows) => {
                    rows.forEach(user => {
                        return user
                    });
                    return rows;
                })
                .catch((e) => {
                    return e
                })
        } catch (e) {
            return e
        }

    },
    checkEmail: async (user) => {
        const { email } = user;
        try {
            let q = `SELECT * FROM d_plus_user WHERE email='${email}'`;
            return (await db).query(q, [user])
                .then((res) => {
                    res.forEach(res => {
                        return res
                    });
                    return res;
                })
                .catch((e) => {
                    return e;
                })
        }
        catch (e) {
            return (e);
        }
    },
    checkUserId: async (id) => {
        // console.log("repo",id)
        try {
            let q = `SELECT * FROM d_plus_user WHERE id='${id}'`;
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
    _deleteByID :async (id)=>{
        try{
    var q = 'DELETE FROM d_plus_user where id = ? ';
    return (await db).query(q,[id])
    .then((res)=>{
        return res;
    })
    .catch((err)=>{
        return err;
    })
} catch(e){
    return e
}
    },
    _getCountryList: async () => {
        try{
            var q = "SELECT * FROM `d_counties` WHERE 1"
            return (await db).query(q,[])
            .then((res)=>{
                console.log(res)
                return res
            })
            .catch((err)=>{
                return err;
            })
        } catch(e){
            return e
        }
    } 
}

export default userRepo;