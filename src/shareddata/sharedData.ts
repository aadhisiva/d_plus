import {validationResult} from 'express-validator';

let sharedData = (req,res)=>{
    let errorArr = [];
    const validateError = validationResult(req);

    if(!validateError.isEmpty()){
        let errors = Object.values(validateError.mapped());
        errors.forEach((item) => {
            errorArr.push(item.msg)
        });
        console.log(errorArr)
        return res.status(422).json( errorArr );
    }
}

export default sharedData;
  
