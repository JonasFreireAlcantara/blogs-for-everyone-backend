const mongoose = require('mongoose');

const User = require('../model/User');


module.exports = {

    async index(req, res) {
        const users = await User.find();
        return res.json(users);
    },

    async show(req, res) {
        const { userId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400)
                .send('Invalid User Id format');
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404)
                .send('User Not Found');
        }

        return res.json(user);
    },

    async create(req, res) {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400) // bad request
                        .send('You must inform name and email properties');
        }

        const user = await User.create({
            name,
            email,
        }, (error, user) => {
            if (error) {
                return res.status(500)
                code: 'ERR_HTTP_HEADERS_SENT'.json({ error: "User can't be created" });
            }

            res.json(user);
        });
    },

    async delete(req, res) {
        const { userId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400)
                .send('Invalid User Id format');
        }

        const result = await User.findByIdAndDelete(userId);
        return res.json(result)
    }

};