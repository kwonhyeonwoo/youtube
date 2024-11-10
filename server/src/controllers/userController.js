import express from "express";
const userController = express();

export const getUser = userController.get('/', (req, res) => { console.log('ggg') });
