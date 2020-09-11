
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
    version: '2020-04-01',
    authenticator: new IamAuthenticator({
        apikey: process.env.ASSISTANT_IAM_APIKEY,
    }),
    serviceUrl: process.env.ASSISTANT_URL,
    disableSslVerification: true,
});

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

        return res.status(200).json({ "message": "API funcionando caralho" });

    } catch (error) {
        return next(error, req, res);
    }
};

module.exports = {
    handler: handler
}