import mongoose from "mongoose";


export async function connect() {
    try{
        mongoose.connect("mongodb+srv://akshatgtc:akshat@cluster0.9wwmwl7.mongodb.net/?retryWrites=true&w=majority");
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Database connected");
        })
        connection.on("error", () => {
            console.log("Error connecting to database");
            process.exit();
        })

    }catch(error){
        console.log("Error connecting to database");
    }
}

//         connection.on("error", (err) => 
//     } catch (error) {
//         console.error("Error connecting to database:", error);
//     }
// }

