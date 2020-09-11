
const { assistant } = require('../../../config/assistant');

const create = (req, res) => {
    assistant.createSession(
        {
            assistantId: process.env.ASSISTANT_ID
        }).then(res => {
            console.log(JSON.stringify(res.result, null, 2));
        })
        .catch(err => {
            console.log(err);
        });
    return res.result
}

const handler = async (req, res, next) => {
    try {

        result = await create(req, res)

        return res.status(200).json(result);

    } catch (error) {
        return next(error, req, res);
    }
};

module.exports = {
    handler: handler
}