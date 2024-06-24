import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

// Routes
import defaultRoute from "./routes/default.route";

export default class App {
  app: Application;

  constructor() {
    this.app = express();
    this.settings();
    this.routes();
    this.middlewares();
  }

  private settings() {
    this.app.use(morgan("dev"));
    this.app.use(cors());
  }

  private routes() {
    this.app.use("/api/v1", defaultRoute);
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(cors());
  }

  async listen() {
    await this.app.listen(3000);
    console.log("Server is running on port 3000");

  }
}