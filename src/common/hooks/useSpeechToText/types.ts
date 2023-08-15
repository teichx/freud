import { FC } from 'react';

export type UseSpeechToText = (props?: {
  onStart?: () => void;
  onStop?: () => void;
}) => {
  isSupported: boolean;
  isEnabled: boolean;
  isListening: boolean;
  startListening: () => Promise<void>;
  stopListening: () => Promise<void>;
  toggleListening: () => Promise<void>;
  text: string;
  Microphone: FC;
};
