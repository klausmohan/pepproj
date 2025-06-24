import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mohan:TYELt7fQzooUpUEc@cluster0.du325ds.mongodb.net/mohan"
    );
    console.log("✅ DB Connected");
  } catch (error) {
    console.error("❌ DB Connection Failed:", error.message);
    process.exit(1); 
  }
};

//TYELt7fQzooUpUEc;
//mongodb+srv://mohan:TYELt7fQzooUpUEc@cluster0.du325ds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
