import React, { useContext } from "react";

import "./RequestFreeConsulting.scss";

import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

import image1 from "../../assets/images/request.png";
import image2 from "../../assets/images/request_ar.png";

import Button from "../Button/Button";

const RequestFreeConsulting = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div
      className={`${changeSide === "ar" ? "request_ar" : "request_en"} request`}
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("request_free_consulting")}</h2>
      <div className="body">
        <div className="section">
          <form>
            <div className="div1 row">
              <div className="mb-3 col">
                <label for="exampleFormControlInput1" class="form-label">
                  {t("first_name")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3 col">
                <label for="exampleFormControlInput1" class="form-label">
                  {t("last_name")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
            <div className="div1 mt-2 row">
              <div class="mb-3 col">
                <label for="exampleFormControlInput1" class="form-label">
                  {t("mobile_number")}
                </label>
                <PhoneInput specialLabel={""} country={"sa"} />
              </div>
              <div class="mb-3 col">
                <label for="exampleFormControlInput1" class="form-label">
                  {t("email")}
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
            <div className="mt-2">
              <label for="inputState" class="form-label">
                {t("field")}
              </label>
              <select id="inputState" class="form-select">
                <option selected>{t("digital_marketing")}</option>
                <option>...</option>
              </select>
            </div>
            <div className="mt-4">
              <label for="inputAddress" class="form-label">
                {t("company_name")}
              </label>
              <input type="text" class="form-control" id="inputAddress" />
            </div>

            <div className="mt-4">
              <label for="inputState" class="form-label">
                {t("budget")}
              </label>
              <select id="inputState" class="form-select">
                <option selected>{t("amount")}</option>
                <option>...</option>
              </select>
            </div>
            <div class="mt-4">
              <label for="exampleFormControlTextarea1" class="form-label">
                {t("message")}
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="mt-4">
              <Button name={"send_message"} />
            </div>
          </form>
        </div>
        <div className="image">
          {changeSide === "ar" ? (
            <img src={image2} alt="" />
          ) : (
            <img src={image1} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestFreeConsulting;
