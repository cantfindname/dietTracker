import React from "react";
import styled from "styled-components";

export const search = ({}) => {
  return (
    <searchdesk>
      <FlexRow>
        <FlexColumn>
          <StandardCollection
            src={`https://file.rendit.io/n/hCkwieBNJhsGUNUJ3mt5.svg`}
          />
          <NARMTrack1 />
        </FlexColumn>
        <Component />
      </FlexRow>
      <FlexColumn1>
        <FlexColumn2>
          <Text4>Diet Tracking Made Easy</Text4>
          <FlexColumn3>
            <WisteriaText>Search Foods*</WisteriaText>
            <WisteriaText1>Search</WisteriaText1>
          </FlexColumn3>
          <Text5>Or input my own meal</Text5>
        </FlexColumn2>
       
      </FlexColumn1>
     
    </searchdesk>
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
const searchdesk = styled.div`
  width: 1209px;
  height: 1015px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 9px 231px 0px 0px;
  background-color: #767676;
  overflow: hidden;
`;
const FlexRow = styled.div`
  width: 982px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 0px 227px;
`;
const FlexColumn = styled.div`
  width: 202px;
  height: 74px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0px 0px 0px 29px;
`;
const StandardCollection = styled.img`
  width: 65px;
  height: 64px;
  left: 0px;
  top: 0px;
  position: absolute;
`;
const NARMTrack1 = styled.div`
  width: 24px;
  height: 53px;
  position: relative;
  padding: 0px 0px 0px 178px;
`;
const Component = styled.div`
  width: 373px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  align-items: center;
  margin: 22px 0px 0px 0px;
`;
const FlexColumn1 = styled.div`
  width: 1150px;
  position: relative;
  gap: 41px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 59px 0px 0px;
`;
const FlexColumn2 = styled.div`
  width: 860px;
  height: 212px;
  position: relative;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: stretch;
  align-items: flex-start;
  padding: 9px 0px 9px 290px;
`;
const Text4 = styled.div`
  width: 724px;
  height: 230px;
  left: 358px;
  top: 0px;
  position: absolute;
  color: #ffffff;
  font-size: 60px;
  font-weight: 700;
  font-family: Roboto;
  text-align: center;
`;
const FlexColumn3 = styled.div`
  width: 166px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  padding: 0px 0px 0px 694px;
`;
const WisteriaText = styled.div`
  width: 194px;
  height: 59px;
  left: 0px;
  top: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 642px 0px 18px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 300;
  font-family: Roboto;
  text-align: center;
  white-space: nowrap;
  border-width: 3px;
  border-radius: 10px;
  border-style: solid;
  border-color: rgba(134, 131, 232, 0.81);
  background-color: rgba(169, 167, 235, 0.6);
`;
const WisteriaText1 = styled.div`
  width: 94px;
  height: 59px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  padding: 0px 33px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  font-family: Roboto;
  text-align: center;
  white-space: nowrap;
  border-width: 3px;
  border-radius: 10px;
  border-style: solid;
  border-color: rgba(134, 131, 232, 0.81);
  background-color: rgba(169, 167, 235, 0.6);
`;
const Text5 = styled.div`
  width: 331px;
  height: 20px;
  position: relative;
  margin: 0px 0px 0px 264px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Roboto;
  text-decoration: underline;
  text-align: center;
`;
const Ellipse = styled.img`
  width: 399px;
  height: 442px;
  mix-blend-mode: overlay;
`;
const Ellipse1 = styled.img`
  width: 365px;
  height: 590px;
  left: 1075px;
  top: 0px;
  position: absolute;
  mix-blend-mode: overlay;
`;
export default search;