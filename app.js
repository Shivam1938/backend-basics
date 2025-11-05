// express ko import kraya
import express from "express"; 

// constant variable app me express ko lao
const app = express(); 

// app me json middleware use kiya
app.use(express.json()); 

// export krao app ko
export default app; 




