import express from "express";
import { addFood } from "../controllers/foodController";
import multer from "multer";

const foodRouter = express.Router();
//image storage engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, "${Data.now()}${file.originalname}");
  },
});

foodRouter.post("/add", addFood);

export default foodRouter;
