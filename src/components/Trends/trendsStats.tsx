import styled from "styled-components";
import { COLOR_TEXT } from "styles/Colors";
import { BREAKPOINT } from "styles/Constants";
import { FONT_FAMILY_CONDENSED, FONT_FAMILY_DEFAULT } from "styles/Text";

const TrendsStats = (props) => {
  return (
    <>
      <StatsWrap>
        <TrendsCap>
          <Legend>Market Size</Legend>
          <Value>
            {props.cap_current}
            <span>b</span>
          </Value>
        </TrendsCap>
        <TrendsCagr>
          <Legend>CAGR</Legend>
          <Value>
            {props.cagr_current}
            <span>%</span>
          </Value>
        </TrendsCagr>
      </StatsWrap>
    </>
  );
};

export default TrendsStats;

const headerHeightDesktop = 90;
const headerHeightMobile = 60;

const StatsWrap = styled.div`
  display: flex;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${headerHeightDesktop}px;
    width: 34%;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${headerHeightMobile}px;
    width: 100%;
  }
`;

const TrendsCap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
  margin-right: 12px;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${headerHeightDesktop}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${headerHeightMobile}px;
  }
  background: hsla(0, 0%, 1%, 0.2);
`;

const TrendsCagr = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${headerHeightDesktop}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${headerHeightMobile}px;
  }
  background: hsla(0, 0%, 100%, 0.2);
  /* background: gold; */
`;

const Legend = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  font-family: ${FONT_FAMILY_CONDENSED};
  text-transform: uppercase;
  opacity: 0.7;
  color: ${COLOR_TEXT};
  @media (min-width: ${BREAKPOINT}px) {
    font-size: 0.9em;
    line-height: 2em;
    height: 45%;
  }
  @media (max-width: ${BREAKPOINT}px) {
    font-size: 0.8em;
    line-height: 1em;
    height: 40%;
  }
  /* background: blue; */
`;

const Value = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  font-family: ${FONT_FAMILY_DEFAULT};
  font-weight: 500;
  text-transform: uppercase;
  color: ${COLOR_TEXT};
  @media (min-width: ${BREAKPOINT}px) {
    height: 55%;
    font-size: 2em;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: 60%;
    font-size: 1.4em;
  }
  span {
    opacity: 0.5;
    @media (min-width: ${BREAKPOINT}px) {
      padding-left: 3px;
      font-size: 0.6em;
      line-height: 2em;
    }
    @media (max-width: ${BREAKPOINT}px) {
      padding-left: 3px;
      font-size: 0.7em;
      line-height: 2.2em;
    }
  }
`;
