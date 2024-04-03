import {Request, Response} from "express";
import axios from "axios";

import dotenv from "dotenv";

dotenv.config();


export const summaryController = async (req: Request, res: Response) => {
    const inputText = req.body;
    console.log("---------", req);
    const summary = await getTextSummaryService(inputText);
    res.status(200).send({
        summary
    });
}

export const getTextSummaryService = async (input: string) => {
    const API_KEY = process.env.AYFIE_API_KEY;
    console.log(input);
    let data = JSON.stringify({
        "language": "auto",
        "text": input,
        "min_length": 5,
        "max_length": 100
    });
    console.log(data);
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://portal.ayfie.com/api/summarize',
        headers: {
            'X-API-Key': API_KEY,
            'Content-Type': 'application/json'
        },
        data : data
    };
    const response = await axios(config);
    return response.data.result;

}