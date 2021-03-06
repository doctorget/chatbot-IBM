const { assistant } = require('../../../config/assistant');

const interaction = async (req, res) => {

    var textIn = '';

    if (req.body.input) {
        textIn = req.body.input.text;
    }

    var payload = {
        assistantId: process.env.ASSISTANT_ID,
        sessionId: req.body.session_id,
        input: {
            message_type: 'text',
            text: textIn,
        },
    };

    await assistant.message(payload, function (err, data) {
        if (err) {
            const status = err.code !== undefined && err.code > 0 ? err.code : 500;
            return res.status(status).json(err);
        }

        response =  res.json(data);
    });
    return response
}

const handler = async (req, res, next) => {
    try {

        result = await interaction(req, res)
        console.log(result)
        return res.status(200).json(result);

    } catch (error) {
        return next(error, req, res);
    }
};

module.exports = {
    handler: handler
}