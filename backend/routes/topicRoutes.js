import express from "express";
const router = express.Router();
import {
  createTopic,
  deleteTopic,
  getTopicById,
  getTopics,
  updateTopic,
} from "../controllers/topicController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getTopics).post(protect, admin, createTopic);
router
  .route("/:id")
  .get(getTopicById)
  .delete(protect, admin, deleteTopic)
  .post(protect, admin, createTopic)
  .put(protect, admin, updateTopic);

export default router;
