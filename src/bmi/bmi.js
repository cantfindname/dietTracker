import React from "react";
import styled from "styled-components";

export const bmidesktop = ({}) => {
  return (
    <DesktopRootRootRoot>
      <FlexColumn>
        <StandardCollection
          src={`https://file.rendit.io/n/VCaICgK2QW2Nw3X0efLW.svg`}
        />
        <NARMTrack1 />
        <Text4>BMI Calculator</Text4>
        <Text5>Name Of Meal Or Food Item</Text5>
        <FlexRow>
          <WisteriaRectangle />
          <Text6>Your BMI:</Text6>
        </FlexRow>
        <Text7>Height (Feet)</Text7>
        <WisteriaRectangle1 />
        <Text8>Weight (Pounds)</Text8>
        <WisteriaRectangle2 />
        <Ellipse src={`https://file.rendit.io/n/Y3Y4lKO05Q8A5ik2b0Df.svg`} />
      </FlexColumn>
      <Ellipse1 src={`https://file.rendit.io/n/Uq6tyIa0LLMton5NAlcm.svg`} />
    </DesktopRootRootRoot>
  );
};

const Text1 = styled.div`
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  font-family: Roboto;
  text-decoration: underline;
  white-space: nowrap;
`;
const DesktopRootRootRoot = styled.div`
  width: 1440px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #979797;
  overflow: hidden;
`;
const FlexColumn = styled.div`
  width: 965px;
  height: 1024px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
const StandardCollection = styled.img`
  width: 65px;
  height: 64px;
  left: 227px;
  top: 0px;
  position: absolute;
`;
const NARMTrack1 = styled.div`
  width: 24px;
  height: 53px;
  position: relative;
  padding: 0px 0px 0px 178px;
`;
const Text4 = styled.div`
  align-self: flex-end;
  margin: 0px 62px 65px 0px;
  color: #ffffff;
  font-size: 55px;
  font-weight: 700;
  font-family: Roboto;
  text-align: center;
  white-space: nowrap;
`;
const Text5 = styled.div`
  width: 277px;
  height: 25px;
  margin: 0px 0px 4px 256px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Roboto;
  text-align: center;
`;
const FlexRow = styled.div`
  width: 965px;
  gap: 13px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: stretch;
  align-items: center;
  margin: 0px 0px 35px 0px;
`;
const WisteriaRectangle = styled.div`
  width: 403px;
  height: 52px;
  border-width: 3px;
  border-radius: 10px;
  border-style: solid;
  border-color: rgba(134, 131, 232, 0.81);
  background-color: rgba(169, 167, 235, 0.6);
`;
const Text6 = styled.div`
  width: 277px;
  height: 25px;
  align-self: flex-start;
  margin: 3px 0px 0px 0px;
  color: #ffffff;
  font-size: 48px;
  font-weight: 700;
  font-family: Roboto;
  text-align: center;
`;
const Text7 = styled.div`
  width: 154px;
  height: 25px;
  margin: 0px 0px 1px 251px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Roboto;
  text-align: center;
`;
const WisteriaRectangle1 = styled.div`
  width: 403px;
  height: 52px;
  margin: 0px 0px 42px 265px;
  border-width: 3px;
  border-radius: 10px;
  border-style: solid;
  border-color: rgba(134, 131, 232, 0.81);
  background-color: rgba(169, 167, 235, 0.6);
`;
const Text8 = styled.div`
  width: 220px;
  height: 26px;
  margin: 0px 0px 4px 234px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Roboto;
  text-align: center;
`;
const WisteriaRectangle2 = styled.div`
  width: 403px;
  height: 52px;
  margin: 0px 0px 0.04px 265px;
  border-width: 3px;
  border-radius: 10px;
  border-style: solid;
  border-color: rgba(134, 131, 232, 0.81);
  background-color: #FFFFFF;
`;
const Ellipse = styled.img`
  width: 399px;
  height: 442px;
  mix-blend-mode: overlay;
`;
const Ellipse1 = styled.img`
  width: 365px;
  height: 590px;
  position: relative;
  align-self: flex-start;
  mix-blend-mode: overlay;
`;
export default bmidesktop;