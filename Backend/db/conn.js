
import mongoose from "mongoose";

const db = mongoose.connect("mongodb://localhost:27017/youtube2022",{
  
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection is successful")
}).catch((e) => {
    console.log("no connection",e)
})
// module.exports = {db}
export default db