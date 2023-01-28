import React from "react";
import styled from "styled-components";

import { IMAGES } from "../../constants/index";
import { getDayOfWeek } from "./time";

import Input from "../element/Input";

const PlannerModal = ({
  doneAddModalHandler,
  changeTitleHandler,
  changeStartTimeHandler,
  changeEndTimeHandler,
  closeModalHanlder,
  planTitle,
  countInput,
  startTime,
  endTime,
  isNumber,
  isEdit,
  id,
  plan,
  editTimerContentHandler,
  date,
  isDisabled,
}) => {
  console.log(isDisabled);
  return (
    <>
      <StModalHeader>
        <button
          onClick={() => {
            closeModalHanlder(id, plan);
          }}
        >
          {isEdit && plan?.hasOwnProperty("planId")
            ? IMAGES.trashBtn
            : IMAGES.fold}
        </button>

        <StDateBox>{getDayOfWeek(date)}</StDateBox>

        <button
          onClick={
            isDisabled
              ? plan?.hasOwnProperty("timerId")
                ? () => {
                    editTimerContentHandler(id);
                  }
                : () => {
                    doneAddModalHandler(id);
                  }
              : () => {
                  doneAddModalHandler(id);
                }
          }
        >
          {IMAGES.checkBtn}
        </button>
      </StModalHeader>
      <StInputBox>
        <StInput
          placeholder="제목 입력"
          onChange={changeTitleHandler}
          maxLength="24"
          value={planTitle}
        />
        <StLabel>{countInput}/24</StLabel>
      </StInputBox>
      <StTimeBox>
        <StSpan>시작</StSpan>
        <Input
          onChange={changeStartTimeHandler}
          onInput={isNumber}
          value={startTime.hour}
          type="number"
          name="hour"
          placeholder="00"
          maxLength="2"
          width="45px"
          height="45px"
          fontSize="1.4rem"
          padding="0px"
          textAlign="center"
          disabled={
            isDisabled && plan?.hasOwnProperty("timerId") ? true : false
          }
        />
        <div>:</div>

        <Input
          onChange={changeStartTimeHandler}
          onInput={isNumber}
          value={startTime.min}
          type="number"
          name="min"
          placeholder="00"
          maxLength="2"
          width="45px"
          height="45px"
          fontSize="1.4rem"
          padding="0px"
          textAlign="center"
          disabled={
            isDisabled && plan?.hasOwnProperty("timerId") ? true : false
          }
        />
        <p>-</p>
        <StSpan>종료</StSpan>
        <Input
          onChange={changeEndTimeHandler}
          onInput={isNumber}
          value={endTime.hour}
          type="number"
          name="hour"
          placeholder="00"
          maxLength="2"
          width="45px"
          height="45px"
          fontSize="1.4rem"
          padding="0px"
          textAlign="center"
          disabled={
            isDisabled && plan?.hasOwnProperty("timerId") ? true : false
          }
        ></Input>
        <div>:</div>
        <Input
          onChange={changeEndTimeHandler}
          onInput={isNumber}
          value={endTime.min}
          type="number"
          name="min"
          placeholder="00"
          maxLength="2"
          width="45px"
          height="45px"
          fontSize="1.4rem"
          padding="0px"
          textAlign="center"
          disabled={
            isDisabled && plan?.hasOwnProperty("timerId") ? true : false
          }
        />
      </StTimeBox>
    </>
  );
};

export default PlannerModal;

const StDateBox = styled.div`
  height: 19px;
  font-family: "Pretendard-Bold";
  font-size: 1.7rem;
  line-height: 19px;
  color: #595545;
  word-spacing: 2px;
  letter-spacing: -0.8px;
`;

const StModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 319px;
  height: 19px;
  /* div {
    margin-left: 87px;
  } */
`;

const StInputBox = styled.div`
  width: 319px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* align-items: flex-start; */
`;

const StInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 19px;
  gap: 10px;
  width: 319px;

  height: 55px;
  margin-top: 25px;

  background: #ffffff;

  border: 1px solid #f1e5d2;
  border-radius: 12px;

  ::placeholder {
    font-family: "Pretendard-Regular";
    font-size: 1.4rem;
    line-height: 17px;
  }
`;

const StLabel = styled.label`
  height: 16px;
  width: 310px;
  font-family: "Pretendard";
  font-size: 1.2rem;
  line-height: 130%;

  text-align: right;

  color: #4a8a51;
`;

const StTimeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  /* gap: 31px; */

  width: 319px;
  height: 41px;
  margin-top: 24px;

  p {
    margin: 0px 19px 0px 19px;
  }

  div {
    margin: 0px 4px 0px 4px;
  }
`;

const StSpan = styled.span`
  width: 28px;
  height: 19px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 450;
  font-size: 1.4rem;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-decoration-line: underline;

  /* word */

  color: #595545;
  margin-right: 12px;
`;
