import express from "express";
import { getVideo, uploadVideo } from "../controllers/videoController";

const videoRouter = express.Router();
videoRouter.get('/', getVideo);
videoRouter.get('/:id', uploadVideo);

export default videoRouter;