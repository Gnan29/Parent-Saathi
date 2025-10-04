import React, { useState } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LoadingFan from './LoadingFan';

const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const { t, language } = useLanguage();

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition is not supported in your browser.');
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    const langMap: { [key: string]: string } = {
      en: 'en-US',
      hi: 'hi-IN',
      te: 'te-IN',
      ta: 'ta-IN',
      ar: 'ar-SA'
    };

    recognition.lang = langMap[language] || 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript('');
      setResponse('');
    };

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
      setIsListening(false);
      processQuery(text);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const processQuery = async (query: string) => {
    setLoading(true);

    setTimeout(() => {
      const mockResponse = `I heard your query: "${query}". This is a demo response. In production, this would be processed by AI and provide relevant information about university policies, academic calendars, and resources.`;
      setResponse(mockResponse);
      setLoading(false);
      speakResponse(mockResponse);
    }, 2000);
  };

  const speakResponse = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);

      const langMap: { [key: string]: string } = {
        en: 'en-US',
        hi: 'hi-IN',
        te: 'te-IN',
        ta: 'ta-IN',
        ar: 'ar-SA'
      };

      utterance.lang = langMap[language] || 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200">
      <div className="flex items-center gap-3 mb-4">
        <Volume2 className="w-6 h-6 text-green-600" />
        <h2 className="text-xl font-bold text-gray-800">{t('voiceAssistant')}</h2>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={startListening}
          disabled={isListening || loading}
          className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 ${
            isListening
              ? 'bg-red-500 animate-pulse'
              : 'bg-gradient-to-br from-green-500 to-blue-500 hover:shadow-xl'
          }`}
        >
          {isListening ? (
            <MicOff className="w-12 h-12 text-white" />
          ) : (
            <Mic className="w-12 h-12 text-white" />
          )}
        </button>

        <p className="text-gray-600 text-center">
          {isListening ? t('listening') : t('clickToSpeak')}
        </p>

        {loading && (
          <div className="my-4">
            <LoadingFan size={60} />
          </div>
        )}

        {transcript && (
          <div className="w-full p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-600 mb-1 font-semibold">You said:</p>
            <p className="text-gray-800">{transcript}</p>
          </div>
        )}

        {response && !loading && (
          <div className="w-full p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-gray-600 mb-1 font-semibold">Response:</p>
            <p className="text-gray-800">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceAssistant;
