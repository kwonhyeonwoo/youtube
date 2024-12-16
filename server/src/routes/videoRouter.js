import express from "express";
import { detailVideo, getVideo, postVideo, uploadVideo } from "../controllers/videoController";

const videoRouter = express.Router();
videoRouter.route('/').post(postVideo).get(getVideo);
videoRouter.get("/:id", detailVideo);

export default videoRouter;