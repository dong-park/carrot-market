import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
) {
    await client.user.create({
        data: {
            name: "donghwan",
            phone: 1065514417
        }
    }).catch((err) => {
        console.log(err)
    });

    res.json({
        ok: true
    })
}