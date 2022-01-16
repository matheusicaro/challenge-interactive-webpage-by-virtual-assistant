export const CHAT_MESSAGES = {
  TITLE: {
    EN: 'Neo Assistant',
    FR: 'Assistant Néo',
  },
  SUBTITLE: {
    EN: 'Neo Financial Help Centre',
    FR: `Centre d'aide de Neo Financial`,
  },
  SENDER_PLACE_HOLDER: {
    EN: 'Type a message...',
    FR: 'Entrez un message...',
  },
  ERROR: {
    SEND_MESSAGE: {
      EN: `I encountered an error while trying to process your message. Let's try again? please tell me how can I help you.`,
      FR: `J'ai rencontré une erreur en essayant de traiter votre message. Essayons encore? s'il vous plaît dites-moi
      comment puis-je vous aider`,
    },
  },
  WELCOME: {
    EN: `Welcome to this chat. How can I help you?
    \n\n_you can chat with me in_ **French** _or_ **English**_, just change the language at the bottom of the Chat._
    `,
    FR: `Bienvenue sur ce chat. Comment puis-je vous aider?
    \n\n_vous pouvez discuter avec moi_ **en Anglais** _ou_ **en Français**_, changez simplement la langue en bas du chat._
    `,
  },
};

export const CONSTANTS = {
  DELAY_TO_ADD_MESSAGE_IN_MS: 1000,
  DELAY_TO_ENABLE_MESSAGE_IN_MS: 2000,
};

export const CSS_CLASS_NAMES = {
  MESSAGES_LIST_CONTAINER: 'messages',
  MESSAGE: 'rcw-message',
  MESSAGE_FROM_USER_CLIENT: 'rcw-message-client',
  MESSAGE_TEXT: 'rcw-message-text',
  LINK_MESSAGE: 'rcw-link',
  LOADER: 'loader',
  ELEMENT_ACTIVATED: 'active',
  ENABLE_ELEMENT: 'enabled',
};
