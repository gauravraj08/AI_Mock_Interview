import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

function QuestionsSection({ mockInterviewQuestion = [], activeQuestionIndex }) {
  const textToSpeach = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, Your browser does not support text to speech");
    }
  };

  // Ensure mockInterviewQuestion is always an array
  if (!Array.isArray(mockInterviewQuestion)) {
    console.error(
      "mockInterviewQuestion is not an array:",
      mockInterviewQuestion
    );
    return <p>Error: Questions could not be loaded.</p>;
  }

  return (
    <div className="p-5 border rounded-lg my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {mockInterviewQuestion.map((question, index) => (
          <h2
            key={index} // Add a unique key to prevent React warnings
            className={`p-2 border rounded-full
            text-xs md:text-sm text-center cursor-pointer
            ${activeQuestionIndex === index ? "bg-primary text-white" : ""}`}
          >
            Question #{index + 1}
          </h2>
        ))}
      </div>
      <h2 className="my-5 text-md md:text-lg">
        {mockInterviewQuestion[activeQuestionIndex]?.question ||
          "No question available"}
      </h2>
      <Volume2
        className="cursor-pointer"
        onClick={() =>
          textToSpeach(
            mockInterviewQuestion[activeQuestionIndex]?.question || ""
          )
        }
      />

      <div className="border rounded-lg p-5 bg-blue-100 mt-20">
        <h2 className="flex gap-2 items-center text-primary">
          <Lightbulb />
          <strong>Note:</strong>
        </h2>
        <h2 className="text-sm text-primary my-2">
          Click on Record Answer when you want to answer the question. At the
          end of the interview, we will give you feedback along with the correct
          answer for each question and your answer to compare it.
        </h2>
      </div>
    </div>
  );
}

export default QuestionsSection;
