import React from 'react';
import ChatBot from 'react-simple-chatbot';

const Chatboot = () => {
  return (
    <ChatBot
      const steps={[
        {
          id: '1',
          message: 'What is your name?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: 'question', 
        },
        {
          id: 'question',
          message: 'Hello {previousValue}! Do you have a legal question?',
          trigger: 'response', 
        },
        {
          id: 'response',
          options: [
            { value: 'yes', label: 'Yes', trigger: 'legal-question' },
            { value: 'no', label: 'No', trigger: 'end' },
          ],
        },
        {
          id: 'legal-question',
          message: 'Please ask your legal question.',
          trigger: 'user-legal-question', 
        },
        {
          id: 'user-legal-question',
          user: true,
          trigger: 'thank-you',
        },
        {
          id: 'thank-you',
          message: 'That\'s a great question! Please contact us.',
          trigger: 'end',
        },
        {
          id: 'end',
          message: 'Thank you for chatting with us!',
          end: true,
        },
      ]}
      floating={true}
      cache={false}
    />
  );
};

export default Chatboot;
