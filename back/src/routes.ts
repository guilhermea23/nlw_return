import express from "express";
import { NodeMailerMailAdapter } from "./adapters/nodemailer/nodemailer-adapter";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackService } from "./services/submit-feedback-service";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const prismaFeedbacksRepository = new PrismaFeedbackRepository();
  const nodemailerMailAdapter = new NodeMailerMailAdapter();
  const submitFeedbackService = new SubmitFeedbackService(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackService.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
