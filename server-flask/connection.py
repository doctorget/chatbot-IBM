from ibm_watson import AssistantV2
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

authenticator = IAMAuthenticator('{apikey}')
assistant = AssistantV2(
    version='{version}',
    authenticator=authenticator
)

assistant.set_service_url('{url}')

assistant.set_disable_ssl_verification(True)