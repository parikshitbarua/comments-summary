import { Response, Request} from "express";
import axios from "axios";

import dotenv from "dotenv";
dotenv.config();


export const summaryController = async (req: Request, res: Response) => {
    const API_KEY = process.env.AYFIE_API_KEY;
    let data = JSON.stringify({
        "language": "auto",
        "text": "The staff was great. The receptionists were very helpful and answered all our questions. The room was clean and bright, and the room service was always on time. Will be coming back! Thank you so much. I recently had the pleasure of staying at Hotel Leela, and it was an unforgettable experience. From the moment I arrived, the staff went above and beyond to ensure my comfort and satisfaction. The luxurious accommodations, coupled with exceptional service, made my stay truly memorable. The hotel’s prime location made exploring the city a breeze, and I can’t wait to return to Hotel Leela on my next visit. Highly recommended! The hotel’s elegant design, combined with its top-notch amenities, made for a truly relaxing and enjoyable experience. The attentive and courteous staff catered to my every need, ensuring that my stay was as comfortable as possible. With its convenient location and outstanding service, Hotel Leela has quickly become my go-to choice for accommodations whenever I travel to the area. 5 star!",
        "min_length": 5,
        "max_length": 100
    });

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
    res.status(200).send({
        summary: response.data.result
    });
}