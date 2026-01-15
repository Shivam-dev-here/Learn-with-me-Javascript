
export enum MessageAuthor {
  USER = 'user',
  BOT = 'bot',
}

export interface Message {
  author: MessageAuthor;
  text: string;
}

export enum View {
  CHAT = 'chat',
  RESOURCES = 'resources',
  STRATEGIES = 'strategies',
}

export interface Resource {
  title: string;
  description: string;
  url: string;
}
