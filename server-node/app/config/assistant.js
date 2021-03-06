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

module.exports = {
    assistant
}