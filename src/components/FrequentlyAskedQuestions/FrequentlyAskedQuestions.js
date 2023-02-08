import React, { useContext, useState } from "react";

import "./FrequentlyAskedQuestions.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//** import icons from react-icons */
import { BsPlusCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";

const FrequentlyAskedQuestions = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div
      className="asked_questions"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("frequently_asked_questions")}</h2>
      <div className="questions">
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;

const Question = () => {
  const [showQuestion, setShowQuestion] = useState(false);

  const { t } = useTranslation();

  const ShowQuestion = () => {
    setShowQuestion(!showQuestion);
  };

  return (
    <div className={`${showQuestion && "active"} question mt-5`}>
      <div className="question_">
        <div onClick={ShowQuestion}>
          {showQuestion ? (
            <BsDashCircle className="icon" />
          ) : (
            <BsPlusCircle className="icon" />
          )}
        </div>
        <div>
          <p>
            {t("question")}
            {t("question")}
            {t("question")}
            {t("question")}
            {t("question")}
            {t("question")}
            {t("question")}
            {t("question")}
            {t("question")}
          </p>
        </div>
      </div>
      <div className="answer">
        {showQuestion && (
          <p>
            {t("question")}
            {t("question")}
            {t("question")}
            {t("question")}
            {t("question")}
            {t("question")}
            {t("question")}
            {t("question")}
            {t("question")}
          </p>
        )}
      </div>
    </div>
  );
};
