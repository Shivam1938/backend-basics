// app ko import kra
import app from "./app.js"; 
// dotenv ko import kra
import dotenv from "dotenv"; 


// dotenv ko config kra
dotenv.config(); 

 // port variable me environment variable se port liya 
const port = process.env.PORT ;

// app ko listen krao diye gaye port pe
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

});
