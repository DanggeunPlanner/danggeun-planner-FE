import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getUserInfo } from "../../redux/modules/mypageSlice";
import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PATH, IMAGES } from "../../constants/index";
import { api } from "../../core/api";

import Button from "../timer/TimerButton";
import Header from "../header/Header";
import SubHeader from "../header/SubHeader";

const MypageForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.mypage.data);

  useEffect(() => {
    dispatch(__getUserInfo());
  }, [dispatch]);

  const logoutHandler = async () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      try {
        const response = await api.postLogoutApi();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      localStorage.clear();
      navigate(PATH.landing);
    }
  };

  // 메뉴 오픈 관련 추후에 반드시 빼야함
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  const OpenMenuHanlder = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };
  //

  return (
    <>
      <Header
        leftLink={PATH.timer}
        leftSlot={IMAGES.home}
        title="MY"
        onClick={OpenMenuHanlder}
        rightSlot={IMAGES.menu}
      />
      <SubHeader
        title="마이페이지"
        rightLink={PATH.profile}
        rightSlot={IMAGES.edit}
      />
      <StContainer>
        <StProfileBody>
          <StProfileBox>
            <StImg src={userInfo.profileImage}></StImg>
            <StInfoBox>
              <StInfo>{userInfo.username}</StInfo>
              <StTotalCarrot>
                <p>누적</p> <span>{IMAGES.carrotSticker}</span>
                {userInfo.totalCarrot}
              </StTotalCarrot>
            </StInfoBox>
          </StProfileBox>
          <StHr></StHr>
          <StEmailBox>{userInfo.email}</StEmailBox>
          <StBtns>
            <Button
              border="1px solid #F1E5D2"
              height="54px"
              width="319px"
              backgroundColor="#FFFDFA"
              fontSize="1.4rem"
              color="#595550"
              fontFamily="Pretendard"
              fontStyle="normal"
              fontWeight="500"
              gap="24px"
              filter="none"
              type="button"
              onClick={() =>
                window.open(
                  "https://www.notion.so/4de1bdd12eda48e79ac2dde2c45d6c8f"
                )
              }
            >
              도움말
            </Button>
            <Button
              border="1px solid #F1E5D2"
              height="54px"
              width="319px"
              backgroundColor="#FFFDFA"
              fontSize="1.4rem"
              fontFamily="Pretendard"
              fontStyle="normal"
              fontWeight="500"
              color="#595550"
              gap="25px"
              filter="none"
              onClick={() =>
                window.open(
                  "https://www.notion.so/4de1bdd12eda48e79ac2dde2c45d6c8f"
                )
              }
            >
              1:1 문의
            </Button>
            <Button
              border="1px solid #F1E5D2"
              height="54px"
              width="319px"
              backgroundColor="#FFFDFA"
              fontSize="1.4rem"
              fontFamily="Pretendard"
              fontStyle="normal"
              fontWeight="500"
              color="#FF0000"
              gap="28px"
              filter="none"
              onClick={logoutHandler}
            >
              로그아웃
            </Button>
          </StBtns>
        </StProfileBody>
      </StContainer>
    </>
  );
};

export default MypageForm;

const StContainer = styled.div`
  background-color: #f9f3ea;
  height: 684px;
`;

const StProfileBody = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;

const StProfileBox = styled.div`
  width: 319px;
  height: 125px;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
`;

const StImg = styled.img`
  border-radius: 100%;
  object-fit: cover;
  width: 125px;
  height: 125px;
  border: 0px;
`;

const StInfoBox = styled.div`
  width: 162px;
`;
const StInfo = styled.div`
  width: 126px;
  height: 27px;

  font-family: "MaplestoryOTFBold";
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 27px;

  margin: 70px 24px 10px 24px;

  color: #595550;
`;

const StTotalCarrot = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  text-align: center;
  gap: 6.4px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;

  color: #f27808;

  p {
    margin-left: 24px;
    width: 25px;
    height: 22px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    padding-top: 2px;

    color: #403b36;
  }
`;

const StHr = styled.hr`
  width: 319px;
  opacity: 0.1;
  border: 1px solid #000000;
  margin: 24px 0px 12px 0px;
`;

const StEmailBox = styled.div`
  width: 319px;
  height: 22px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #a4a4a4;
`;

const StBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 87px;
`;
