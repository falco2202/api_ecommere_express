import express from "express";
import authRoute from "../routes/auth.route.js"

const apiRoute = express();

apiRoute.use('/auth', authRoute)

export default apiRoute;