const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
    version: '2020-04-01',
    authenticator: new IamAuthenticator({
        apikey: 'jPhCZzn1Ilx7dDXspdV6SwL0iv3AD009XQPCqpdVTwmr',
    }),
    serviceUrl: 'https://gateway.watsonplatform.net/assistant/api',
    disableSslVerification: true,
});

const interaction = (req, res) => {

    var textIn = '';

    if (req.body.input) {
        textIn = req.body.input.text;
    }

    var payload = {
        assistantId: assistantId,
        sessionId: req.body.session_id,
        input: {
            message_type: 'text',
            text: textIn,
        },
    };

    assistant.message(payload, function (err, data) {
        if (err) {
            const status = err.code !== undefined && err.code > 0 ? err.code : 500;
            return res.status(status).json(err);
        }

        return res.json(data);
    });
}

const handler = async (req, res, next) => {
    try {

        result = await interaction(req, res)

        return res.status(200).json({ "message": "API funcionando caralho" });

    } catch (error) {
        return next(error, req, res);
    }
};

module.exports = {
    handler: handler
}