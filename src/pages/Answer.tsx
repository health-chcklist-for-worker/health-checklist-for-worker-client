import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Answer() {
  const [generatedText, setGeneratedText] = useState('');

  useEffect(() => {
    const fetchGeneratedText = async () => {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": "Hello!"}]
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            },
          }
          );
          setGeneratedText(response.data.choices[0].text);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchGeneratedText();
    }, []);
    console.log(generatedText)
    return (
      <div>
        <h1>생성된 내용</h1>
        {generatedText !== "" ? <p>{generatedText}</p> : <p>No response</p>}
      </div>
    );
  }
  
  export default Answer;
  