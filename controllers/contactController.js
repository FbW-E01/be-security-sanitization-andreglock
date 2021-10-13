import express from 'express';
import Contact from "../models/contact.js";
import { validators } from '../validators.js';
import { validationResult } from 'express-validator';
const router = express.Router();

// Besides adding validation and sanitation
// feel free to improve these in other ways!

router.post("/", validators, async (request, response) => {
    const result = validationResult(request);
    if(!result.isEmpty()) {
        response.status(400);
        response.json({
            errors: result.errors.map(e => e.msg)
        });
        return;
    }
    response.json(await Contact.create(request.body));
});

router.get("/", async (request, response) => {
    response.json(await Contact.find({}));
});

export default router;