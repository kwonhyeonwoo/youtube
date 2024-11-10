import express from "express";
import { getVideo, postVideo, uploadVideo } from "../controllers/videoController";

const videoRouter = express.Router();
videoRouter.route('/').post(postVideo).get(getVideo)

export default videoRouter;