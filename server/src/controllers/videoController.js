import express from "express";

const videoController = express();

export const getVideo = (req, res) => {
    return res.send('/')
}
export const uploadVideo = (req, res) => {
    const { id } = req.params;
    console.log('id', id)
    return res.send(id)
}