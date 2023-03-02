import { questions } from "../data/quizData";
import { useState, useEffect } from "react";

const style = {
  fail: `text-red-400`,
  success: `tes-blue-400`,
};

export const Quiz = () => {
  const [score, setScore] = useState(0);
  const [showResult, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  

  useEffect(() => {
    // Wait for 1 min
    setTimeout(() => {
      setIsLoading(false);
    }, 60000);
    // Wait for 3 min
    setTimeout(() => {
      setShowResults(true);
    }, 180000);
    //set Timer
    setTimeout(() => {
      if (second === 59) {
        setSecond(0);
      } else {
        setSecond(second + 1);
      }
    }, 1000);
    setTimeout(() => {
      setMinute(minute + 1);
    }, 60000);
  }, [second, minute]);

  const handleReTake = () => {
    setScore(0);
    setCurrentQuestion(0);
    setIsLoading(true);
    setShowResults(false);
    setMinute(0);
    setSecond(0);
  };
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="timer w-16 bg-blue-700 p-4 rounded text-white">
          {minute}:{second}
        </div>
        {isLoading ? (
          <>
            <div className="border-4 border-indigo-600 rounded-md p-8 w-1/2">
              <div className="flex justify-between">
                <h3 className="text-xl font-bold uppercase p-8">TheQuiz </h3>
              </div>
              <h6 className="text-lg font-bold uppercase p-8">Instructions:</h6>
              <p className="p-2">
                1. Test contains {questions.length} questions
              </p>
              <p className="p-2">2. Test questions are multiple choice</p>
              <p className="p-2">3. Only one answer allowed</p>
              <p className="p-2">
                4. When answer selected will be recorded and submit
                authomatically
              </p>
              <p className="p-2">
                5. The test will start authomatically after 1 min after eading
                this instructions
              </p>
              <p className="p-2">
                6. Test pass, score above {questions.length / 2}
              </p>
              <p className="p-2">7. you can retake this test </p>
              <p className="p-2">
                8. test time is 5 min after will be submitted automatically
              </p>
              <p className="p-8 text-lg"> Good Luck!</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between">
              <h3 className="text-xl font-bold uppercase p-8">TheQuiz </h3>
            </div>
            {showResult ? (
              <>
                <div className="w-1/2">
                  <div className="border-4 border-indigo-600 rounded-md p-8 w-1/2">
                    <h1 className="p-2">
                      Total score:
                      <span
                        className={`p-4 ${
                          score < questions.length / 2
                            ? style.fail
                            : style.success
                        }`}
                      >
                        {score}
                      </span>
                      /{questions.length}
                    </h1>
                  </div>
                  <div>
                    <button
                      onClick={() => handleReTake()}
                      className="w-24 bg-indigo-600 mt-4 p-4 rounded text-white"
                    >
                      Re-take
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="border-4 border-indigo-600 rounded-md p-8 w-1/2">
                  <div className="flex justify-between">
                    <h4 className="text-base font-semibold">
                      {currentQuestion + 1}.{" "}
                      {questions[currentQuestion].question}
                    </h4>
                    <h3 className="text-base font-semibold tracking-wide">
                      {currentQuestion + 1} of {questions.length}
                    </h3>
                  </div>
                  <div className="flex flex-col">
                    {questions[currentQuestion].options.map((option) => (
                      <div
                        onClick={() => handleAnswer(option.isCorrect)}
                        className="border-2 cursor-grabbing rounded-lg border-indigo-600  p-4 mt-8 hover:bg-indigo-600 hover:text-white"
                      >
                        {option.answer}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
