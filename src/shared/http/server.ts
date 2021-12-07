import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import AppError from "@shared/errors/AppError";
import { createConnection } from "@shared/typeorm";

import swaggerFile from "../../swagger.json";
import { router } from "./routes";

import "../container";

createConnection();

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      const { statusCode, message } = error;
      return response.status(statusCode).json({ message });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${error.message}`,
    });
  }
);

app.listen(3333, () => console.log("Hello! I'm server 🎈"));
