import express from "express";
import Video from "../models/Video";

export const postVideo = async (req, res) => {
    const { title, description } = req.body;
    console.log('Received data from client:', req.body);

    // title 또는 description이 비어 있는 경우 에러 반환
    if (!title || !description) {
        return res.status(400).json({
            state: false,
            msg: "Title and description are required.",
        });
    }

    const video = new Video({
        title,
        description,
        createdAt: Date.now(),
        hashtags: [],
        meta: { views: 0, rating: 0 },
    });

    try {
        await video.save();
        return res.json({
            state: true,
            msg: "업로드가 완료되었습니다",
        });
    } catch (error) {
        console.error("Error saving video:", error);
        return res.status(500).json({
            state: false,
            msg: "An error occurred while saving the video.",
        });
    }
};


export const getVideo = (req, res) => {
    return res.send('tq')
}