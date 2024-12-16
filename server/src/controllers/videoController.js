import express from "express";
import Video from "../models/Video";

export const postVideo = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({
            state: false,
            msg: "Title and description are required.",
        });
    }
    try {
        await Video.create({
            title,
            description,
            createdAt: Date.now(),
            hashtags: [],
            meta: { views: 0, rating: 0 },
        })
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


export const getVideo = async (req, res) => {
    const videos = await Video.find();
    try {
        return res.json({
            state: true,
            videos,
        });
    } catch (error) {
        console.error('Error fetching videos:', error);
        return res.status(500).json({
            state: false,
            message: 'Failed to fetch videos',
        });
    }
};

export const detailVideo = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (video) {
        console.log('sucess')
    }

}