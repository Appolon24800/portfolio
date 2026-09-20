import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterComponent = () => {
  const [words, setWords] = useState(["     "]);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const res = await fetch('https://appolon.dev/words');
        const data = await res.json();
        const shuffled = [...data.words].sort(() => Math.random() - 0.5);
        setWords(shuffled);
      } catch (e) {
        console.error('Failed to fetch words', e);
      }
    };

    fetchWords();
  }, []);

  if (words.length === 0) return null;

  return (
    <div>
      <h1>
        <Typewriter
          words={words}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={20}
          delaySpeed={2000}
        />
      </h1>
    </div>
  );
};

export default TypewriterComponent;