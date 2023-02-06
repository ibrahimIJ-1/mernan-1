import React, { useContext } from "react";

import "./RequestFreeConsulting.scss";

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
    <div className="request">
      <h2>{t("request_free_consulting")}</h2>
      <div className="body">
        <div className="section">
          <form>
            <div className="div1">
              <div className="mb-3 me-3">
                <label for="exampleFormControlInput1" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3 ms-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
            <div className="div1 mt-3">
              <div class="mb-3 me-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="mb-3 ms-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
            <div>
              <label for="inputState" class="form-label">
                Field
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="mt-4">
              <label for="inputAddress" class="form-label">
                Company Name
              </label>
              <input type="text" class="form-control" id="inputAddress" />
            </div>

            <div className="mt-4">
              <label for="inputState" class="form-label">
                Budget
              </label>
              <select id="inputState" class="form-select">
                <option selected>50000 - 100000 SR</option>
                <option>...</option>
              </select>
            </div>
            <div class="mt-4">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="mt-4">
              <Button name={"Send Message"} />
            </div>
          </form>
        </div>
        <div className="image">
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RequestFreeConsulting;
