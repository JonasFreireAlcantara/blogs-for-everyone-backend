const User = require('../model/User');


module.exports = {

    async index(req, res) {
        const users = await User.find();
        return res.json(users);
    },

    async show(req, res) {
        const { userId } = req.params;

        const user = User.findById(userId);
        if (!user) {
            res.status(404)
                .send('User Not Found');
        }

        res.json(user);
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

    async delete(req, rest) {
        const { userId } = req.params;

        const result = User.findByIdAndDelete(userId);
        console.log(result);
        res.json(result)
    }

};