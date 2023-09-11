const mongoose=require("mongoose");


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,
        useUnifiedTopology: true,});
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`);
  }
};

module.exports= connectDB;
