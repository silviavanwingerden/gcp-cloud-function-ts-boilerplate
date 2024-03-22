const functions = require("@google-cloud/functions-framework");
import { Request, Response } from "express";
import * as Sentry from "@sentry/serverless";

Sentry.GCPFunction.init({
  enabled: process.env.ENVIRONMENT === "production",
  dsn: process.env.SENTRY_DSN,
  // Performance Monitoring
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
});

functions.http(process.env.GCP_FUNCTION_ENTRYPOINT, handleRequest);

async function handleRequest(req: Request, res: Response) {
  try {
    // Add code here
  } catch (error) {
    Sentry.captureException(error);
    res.status(500).send("Internal Server Error");
  }
}
