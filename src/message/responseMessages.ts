

 let responseMesg = (messageCode, data, error) => {
    const httpStatusCode = {
        SUCCESS: { status: 'SUCCESS',code: 200, data },
        FAIL: { code: 500, status: 'INTERNEL SERVER ERROR', error },
        INV: { status: "INVALID EMAIL ADDRESS", error },
        AUTHENTICATION_FAIL: { code: 401, status: 'Authetication Error', error }
    }
    return httpStatusCode[messageCode] ?? {};
}
export default responseMesg;
// export default class HttpException extends Error {
//       private status:any;
//       private data:any;
//       private messages:any;

//         constructor(status, message, data) {
//         console.log("status>>>",status)
//         console.log("message>>>",message)
//         super(message);
//         this.message = message;
//             this.status = status;
//             data = data;
//     }
    
// }
