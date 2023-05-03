import express, { json, urlencoded } from "express";
import errorHandler from "./middlewares/errorMiddleware.js";
import connectDB from "./config/db.js";
import consume from "./consumers/offersConsumer.js";
import router from "./routes/offersRoutes.js"

const PORT = process.env.PORT || 3002;
connectDB();

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

consume();

app.use("/api/offers", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Customer running on http://localhost:${PORT}`);
});
