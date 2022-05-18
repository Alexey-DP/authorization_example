const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const PORT = process.env.PORT || 7777;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://alexey:root123@cluster0.mwpf2.mongodb.net/auth_node?retryWrites=true&w=majority');
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}...`));
    } catch(err) {
        console.log(err);
    }
};

start();