import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Buttons } from '~/common/components/Buttons';

import { UseSpeechToText } from './types';

const INITIAL_STATE = {
  text: '',
  isListening: false,
  isEnabled: false,
};

export const useSpeechToText: UseSpeechToText = (props = {}) => {
  const paramsRef = useRef(props);
  const [{ text, isListening, isEnabled }, setState] = useState(INITIAL_STATE);

  const recognition = useMemo(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const engine =
      SpeechRecognition !== undefined ? new SpeechRecognition() : null;
    if (engine) {
      engine.onerror = () =>
        setState((x) => (x.isEnabled ? { ...x, isEnabled: false } : x));
      engine.continuous = true;
      engine.interimResults = true;
      engine.onresult = (x) => {
        const transcription = Array.from(x.results)
          .map((y) =>
            Array.from(y)
              .map((z) => z.transcript)
              .join('')
          )
          .join('');
        setState((x) => ({ ...x, text: transcription }));
      };
    }

    return engine;
  }, []);

  useEffect(() => {
    if (isListening && paramsRef.current.onStart) paramsRef.current.onStart();
    if (!isListening && paramsRef.current.onStop) paramsRef.current.onStop();

    return () => {
      if (isListening) recognition?.stop();
    };
  }, [recognition, isListening]);

  const startListening = useCallback(() => {
    if (isListening) return Promise.resolve();

    recognition?.start();
    setState((x) => ({ ...x, isListening: true }));
    return Promise.resolve();
  }, [recognition, isListening]);

  const stopListening = useCallback(() => {
    if (!isListening) return Promise.resolve();

    recognition?.stop();
    setState((x) => ({ ...x, isListening: false }));
    return Promise.resolve();
  }, [recognition, isListening]);

  const toggleListening = isListening ? stopListening : startListening;

  const Microphone = useCallback(
    () => (
      <Buttons.Microphone isListening={isListening} onClick={toggleListening} />
    ),
    [isListening, toggleListening]
  );

  return {
    isSupported: recognition !== null,
    isEnabled,
    startListening,
    stopListening,
    isListening,
    text,
    toggleListening,
    Microphone,
  };
};
