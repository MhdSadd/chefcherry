require('dotenv').config();

const { connect } = require('mongoose')

const connectDB = async(req, res) => {
    try{
        const Connecting =await connect(process.env.MONGO_URL)
        console.log(`Database is Connected at ${Connecting.connection.host}`)
    }catch(err) {
        console.log(`Error Connecting to Database ${err}`);
    }
}
module.exports = connectDB;