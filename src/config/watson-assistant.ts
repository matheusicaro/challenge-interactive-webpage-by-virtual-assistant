import AssistantV2 from 'ibm-watson/assistant/v2';
import { IamAuthenticator } from 'ibm-watson/auth';
import environment from './environment';

export type WatsonResponse = AssistantV2.Response<AssistantV2.MessageResponse>;
export type WatsonResponseAnswers = Array<AssistantV2.RuntimeResponseGeneric>;
export interface WatsonResponseContext extends AssistantV2.JsonObject {
  'main skill': {
    user_defined: Map<string, object>;
  };
  main_skill: {
    user_defined: Map<string, object>;
  };
}

/**
 * The IBM Watson™ Assistant service combines machine learning, natural language understanding, and an integrated
 * dialog editor to create conversation flows between your apps and your users.
 * The Assistant v2 API provides runtime methods your client application can use to send user input to an assistant
 * and receive a response.
 *
 * @reference https://cloud.ibm.com/apidocs/assistant/assistant-v2?code=node#introduction
 */
class WatsonAssistant {
  private instance: AssistantV2;
  private assistantId: string;

  constructor() {
    this.instance = new AssistantV2({
      serviceUrl: environment.WATSON_SERVICE_FULL_URL,
      version: environment.WATSON_API_VERSION_DATE,
      authenticator: new IamAuthenticator({
        apikey: environment.WATSON_API_KEY
      })
    });

    this.assistantId = environment.WATSON_ASSISTANT_ID;
  }

  /**
   * Method responsible to make a abstraction for pre seeding and sending parameters in Watson Assistant V2 api.
   *
   * @param  {string} text: text message
   * @param  {Map<string, object>} currentContext: new context to be considered in the conversation flow.
   * @param  {string} sessionId: session id of the conversation with Watson Assistant
   * @returns {Promise<Array<AnimalFeeding>>}: promise to return list of AnimalFeeding
   *
   * @reference https://cloud.ibm.com/apidocs/assistant/assistant-v2?code=node#message-request
   */
  public send(text: string, currentContext: Map<string, object>, sessionId: string): Promise<WatsonResponse> {
    const context = { skills: { user_defined: currentContext } };
    const input = { message_type: 'text', text, options: { return_context: true } };

    return this.instance.message({ assistantId: this.assistantId, sessionId, context, input });
  }

  public async createSession(): Promise<string> {
    const response = await this.instance.createSession({ assistantId: this.assistantId });
    return response.result.session_id;
  }
}

export default WatsonAssistant;
