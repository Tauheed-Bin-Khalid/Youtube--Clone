import express from "express";
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trend, updateVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo) 

//update a video
router.put("/:id", verifyToken, updateVideo)

//delete a video
router.delete("/:id", verifyToken, deleteVideo)

//get video
router.get("/find/:id", getVideo)

//addView to a video
router.put("/view/:id", addView)

//trend video
router.get("/trend", trend)

//random video
router.get("/random", random)

//subscribe  a video
router.get("/sub",verifyToken, sub)

//getByTag video
router.get("/tags", getByTag)

//search video
router.get("/search", search)

export default router;