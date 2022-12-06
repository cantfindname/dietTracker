import React from "react";
import styled from "styled-components";

export const DesktopRootRoot1 = ({}) => {
  return (
    <DesktopRootRootRoot>
      <WisteriaRectangle />
      <Text1>CALCULATE MY BMI</Text1>
      <Component>
        {[
          {
            childText: ``,
          },
          {
            childText: ``,
          },
          {
            childText: ``,
          },
        ].map((data) => (
          <Text2>{data.childText}</Text2>
        ))}
      </Component>
      <FlexRow>
        <Paragraph>We Help You Be The Best Version Of Yourself</Paragraph>
        <FlexColumn>
          <StandardCollection
            src={`https://file.rendit.io/n/2C2u0XpYWZi79UlPo6qf.svg`}
          />
          <NARMTrack1>
            <NARMTrack>NARMTrack</NARMTrack>
          </NARMTrack1>
        </FlexColumn>
      </FlexRow>
      <FlexRow1>
        <WisteriaFlexColumn>
          <Text5>SEARCH FOODS</Text5>
        </WisteriaFlexColumn>
        <WisteriaFlexColumn1>
          <Text5>DAILY CALORIES</Text5>
        </WisteriaFlexColumn1>
      </FlexRow1>
    
    </DesktopRootRootRoot>
  );
};

const Text2 = styled.div`
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  font-family: Roboto;
  text-decoration: underline;
  white-space: nowrap;
`;
const Text5 = styled.div`
  width: 159px;
  height: 23px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Roboto;
  text-align: center;
`;
const DesktopRootRootRoot = styled.div`
  width: 897px;
  height: 982px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 21px 325px 21px 218px;
  background-color: #767676;
  overflow: hidden;
`;
const WisteriaRectangle = styled.div`
  width: 233px;
  height: 62px;
  left: 432px;
  top: 548px;
  position: absolute;
  border-radius: 60px;
  background-color: #a9a7eb;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Text1 = styled.div`
  width: 212px;
  height: 57px;
  left: 442px;
  top: 568px;
  position: absolute;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Roboto;
  text-align: center;
`;
const Component = styled.div`
  width: 373px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  align-items: center;
  margin: 0px 209px 120px 0px;
`;
const FlexRow = styled.div`
  position: relative;
  gap: 29px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 128px 0px;
`;
const Paragraph = styled.div`
  width: 589px;
  height: 215px;
  align-self: flex-end;
  color: #ffffff;
  font-size: 60px;
  font-weight: 700;
  font-family: Roboto;
`;
const FlexColumn = styled.div`
  width: 202px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 91px 0px 106px 77px;
`;
const StandardCollection = styled.img`
  width: 219px;
  height: 221px;
  left: 0px;
  top: 0px;
  position: absolute;
`;
const NARMTrack1 = styled.div`
  width: 202px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const NARMTrack = styled.div`
  width: 386px;
  height: 53px;
  margin: 0px -184px 0px 0px;
  color: #ffffff;
  font-size: 64px;
  font-weight: 700;
  font-family: Roboto;
`;
const FlexRow1 = styled.div`
  width: 661px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 236px 0px 0px;
`;
const WisteriaFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 16px 19px 17px;
  border-radius: 60px;
  background-color: #a9a7eb;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const WisteriaFlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 17px 19px 16px;
  border-radius: 60px;
  background-color: #0800FF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Ellipse = styled.img`
  width: 450px;
  height: 532px;
  left: 0px;
  top: 492px;
  position: absolute;
  mix-blend-mode: overlay;
`;
const Ellipse1 = styled.img`
  width: 430px;
  height: 593px;
  left: 1010px;
  top: 0px;
  position: absolute;
  mix-blend-mode: overlay;
`;
export default DesktopRootRoot1;