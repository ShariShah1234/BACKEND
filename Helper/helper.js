
const ResposenseObj = {
    status: null,
    data: null,
    message: "",
    error: "",
}
const sendResponse = ( status,data,message,error) =>{
    ResposenseObj.status = status;
    ResposenseObj.data = data;
    ResposenseObj.message = message;
    ResposenseObj.error = error;
    return ResposenseObj;

}
module.exports = {
    sendResponse
}