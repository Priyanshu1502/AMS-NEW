import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path: "./.env"
});

connectDB()
    .then(() => {

        app.listen(process.env.PORT || 8000, () => {
            console.log(`The Server is live on Port: ${process.env.PORT}`);
        })
    }
    )
    .catch((err) => {
        console.log("Mongo is not connected!", err);
    })

