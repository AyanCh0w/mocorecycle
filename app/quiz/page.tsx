"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const trashItems = [
  { name: 'Banana peel', correctBin: 'compost' },
  { name: 'Plastic bottle', correctBin: 'plastic-recycle' },
  { name: 'Used paper towel', correctBin: 'trash' },
  { name: 'Old battery', correctBin: 'hazard' },
  { name: 'Newspaper', correctBin: 'paper-recycle' },
  { name: 'Leftover food', correctBin: 'compost' },
  { name: 'Styrofoam cup', correctBin: 'trash' },
  { name: 'Paint can', correctBin: 'hazard' },
  { name: 'Cardboard box', correctBin: 'paper-recycle' },
  { name: 'Plastic bag', correctBin: 'plastic-recycle' },
  { name: 'Eggshells', correctBin: 'compost' },
  { name: 'Coffee grounds', correctBin: 'compost' },
  { name: 'Chip bag', correctBin: 'trash' },
  { name: 'Magazine', correctBin: 'paper-recycle' },
  { name: 'Detergent bottle', correctBin: 'plastic-recycle' },
  { name: 'Broken toy (non-recyclable plastic)', correctBin: 'trash' },
  { name: 'Tissue', correctBin: 'trash' },
  { name: 'Grass clippings', correctBin: 'compost' },
  { name: 'Motor oil', correctBin: 'hazard' },
  { name: 'Plastic utensils', correctBin: 'plastic-recycle' },
  { name: 'Junk mail', correctBin: 'paper-recycle' },
  { name: 'Tea bag', correctBin: 'compost' },
  { name: 'Dirty plastic packaging', correctBin: 'trash' },
  { name: 'Electronic waste', correctBin: 'hazard' },
  { name: 'Aluminum foil (clean)', correctBin: 'plastic-recycle' },
  { name: 'Broken glass', correctBin: 'trash' },
  { name: 'Pesticides', correctBin: 'hazard' },
  { name: 'Plant trimmings', correctBin: 'compost' },
  { name: 'Junk food wrapper', correctBin: 'trash' },
  { name: 'Cereal box', correctBin: 'paper-recycle' }
];

export default function TrashSortingQuiz() {
  const [quizItems, setQuizItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [isAnswering, setIsAnswering] = useState(true);
  const [recyclingLevel, setRecyclingLevel] = useState('');

  // New function to shuffle array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // New function to get random items
  const getRandomItems = () => {
    const shuffled = shuffleArray([...trashItems]);
    return shuffled.slice(0, 10);
  };

  useEffect(() => {
    setQuizItems(getRandomItems());
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        setFadeOut(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  const determineRecyclingLevel = (score: number, totalQuestions: number) => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 90) return 'Recycling Expert';
    if (percentage >= 70) return 'Eco-Warrior';
    if (percentage >= 50) return 'Green Enthusiast';
    if (percentage >= 30) return 'Recycling Rookie';
    return 'Novice Sorter';
  };

  const handleChoice = (choice) => {
    setIsAnswering(false);
    const isCorrect = choice === quizItems[currentItem].correctBin;
    if (isCorrect) {
      setScore(score + 1);
      setFeedback('Correct!');
    } else {
      setFeedback(`Incorrect. The correct bin is ${binLabels[quizItems[currentItem].correctBin]}.`);
    }

    setUserAnswers([...userAnswers, { item: quizItems[currentItem], userChoice: choice, isCorrect }]);

    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        if (currentItem < quizItems.length - 1) {
          setCurrentItem(currentItem + 1);
          setFeedback('');
          setFadeOut(false);
          setIsAnswering(true);
        } else {
          const level = determineRecyclingLevel(score + (isCorrect ? 1 : 0), quizItems.length);
          setRecyclingLevel(level);
          setShowResult(true);
        }
      }, 300); // Duration of fade out transition
    }, 2000); // Time to show feedback before transition
  };

  const resetQuiz = () => {
    setQuizItems(getRandomItems());
    setCurrentItem(0);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
  };

  const binImages = {
    trash: '/images/trash.png',
    compost: '/images/compost.png',
    'paper-recycle': '/images/paper-recycle.png',
    'plastic-recycle': '/images/plastic-recycle.png',
    hazard: '/images/hazard.jpg',
  };

  const binLabels = {
    trash: 'Trash',
    compost: 'Compost',
    'paper-recycle': 'Paper Recycle',
    'plastic-recycle': 'Plastic Recycle',
    hazard: 'Hazardous Waste',
  };

  return (
    <div className="bg-yellow-100 w-screen h-min-screen py-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-purple-600 animate-bounce">Trash Sorting Quiz</h1>
      {!showResult ? (
        <div className={`bg-white rounded-lg shadow-lg p-8 max-w-xl mx-auto transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <p className="mb-4 text-lg text-blue-600">Question {currentItem + 1} of {quizItems.length}</p>
          <p className="mb-4 text-lg text-blue-600">Where should you put this item?</p>
          <h2 className="text-3xl font-semibold mb-8 text-center text-green-500">{quizItems[currentItem]?.name}</h2>
          {feedback && (
            <p className={`text-xl font-bold mb-4 text-center ${feedback.startsWith('Correct') ? 'text-green-500' : 'text-red-500'}`}>
              {feedback}
            </p>
          )}
          <div className="grid grid-cols-2 gap-6">
            {Object.keys(binImages).map((bin) => (
              <button
                key={bin}
                onClick={() => handleChoice(bin)}
                className="bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-lg transform hover:scale-105 transition duration-200 ease-in-out shadow-md flex flex-col items-center"
                disabled={!isAnswering}
              >
                <div className="w-20 h-20 mb-3 flex items-center justify-center">
                  <Image
                    src={binImages[bin]}
                    alt={`${bin} bin`}
                    width={100}
                    height={100}
                  />
                  <span className="hidden text-sm">{binLabels[bin]} icon</span>
                </div>
                {binLabels[bin]}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold mb-8 text-purple-600 text-center">Quiz Complete!</h2>
          <p className="mb-4 text-2xl text-blue-600 text-center">Your score: <span className="font-bold text-green-500">{score}</span> out of {quizItems.length}</p>
          <p className="mb-8 text-2xl text-purple-600 text-center">You are a: <span className="font-bold text-green-500">{recyclingLevel}</span></p>
          
          <h3 className="text-3xl font-semibold mb-6 text-purple-600">Review Your Answers:</h3>
          <ul className="space-y-6 mb-8">
            {userAnswers.map((answer, index) => (
              <li key={index} className={`p-4 rounded-lg ${answer.isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                <p className="font-semibold text-lg">{answer.item.name}</p>
                <p className="text-md">Your answer: {binLabels[answer.userChoice]}</p>
                {!answer.isCorrect && (
                  <p className="text-red-600 text-md">Correct answer: {binLabels[answer.item.correctBin]}</p>
                )}
              </li>
            ))}
          </ul>
          
          <button
            onClick={resetQuiz}
            className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition duration-200 ease-in-out shadow-md mx-auto block text-lg"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}