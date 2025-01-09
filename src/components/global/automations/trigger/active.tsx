import { FaInstagram, FaRegPaperPlane } from "react-icons/fa";
import React from "react";

type Props = {
  type: string;
  keywords: {
    id: string;
    word: string;
    automationId: string | null;
  }[];
};

const ActiveTrigger = ({ keywords, type }: Props) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-xl w-full">
      <div className="flex gap-x-2 items-center">
        {type === "COMMENT" ? <FaInstagram className="text-pink-500" /> : <FaRegPaperPlane className="text-blue-500" />}
        <p className="text-lg text-gray-800 dark:text-gray-200">
          {type === "COMMENT"
            ? "User comments on my post."
            : "User sends me a direct message."}
        </p>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        {type === "COMMENT"
          ? "If the user comments on a video that is setup to listen for keywords, this automation will fire."
          : "If the user sends you a message that contains a keyword, this automation will fire."}
      </p>
      <div className="flex gap-2 mt-5 flex-wrap">
        {keywords.map((word) => (
          <div
            key={word.id}
            className="bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center gap-x-2 capitalize font-light py-1 px-4 rounded-full"
          >
            <p>{word.word}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveTrigger;
