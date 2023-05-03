import express, { json, urlencoded } from "express";
import errorHandler from "./middlewares/errorMiddleware.js";
import router from "./routes/offersRoutes.js";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/api/offers", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Marketer running on http://localhost:${PORT}`);
});
