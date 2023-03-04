import {
  BREAKPOINT,
  COLOR_TEXT,
  FONT_DEFAULT_DESKTOP,
  FONT_DEFAULT_MOBILE,
  FONT_FAMILY_HEADING,
} from "styles/Constants";
import styled from "styled-components";
import Container from "components/Container/container";

const headerHeightDesktop = 90;
const headerHeightMobile = 60;
const chartMarginDesktop = 30;
const chartMarginMobile = 30;

export const TrendsInner = styled.div`
  margin: 0 auto;
  @media (min-width: ${BREAKPOINT}px) {
    padding: 50px 0;
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 30px 0;
  }
  /* background: red;; */
`;

export const TrendsHeader = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    flex-direction: row;
    height: ${headerHeightDesktop}px;
    margin-bottom: ${chartMarginDesktop}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column;
    height: ${headerHeightMobile * 2}px;
    margin-bottom: ${chartMarginMobile}px;
  }
  div.title {
    font-family: ${FONT_FAMILY_HEADING};
    color: ${COLOR_TEXT};
    display: flex;
      align-items: center;
      justify-content: center;
    @media (min-width: ${BREAKPOINT}px) {
      height: ${headerHeightDesktop}px;
      font-size: 1.6em;
      line-height: 1em;
    }
    @media (max-width: ${BREAKPOINT}px) {

      height: ${headerHeightMobile}px;
      font-size: 1.4em;
      line-height: 1em;
    }
    /* background: green; */
  }
  /* background: gold; */
`;

export const TrendsAttribution = styled.div`
  text-align: right;
  opacity: 0.5;
  color: ${COLOR_TEXT};
  font-size: 0.9em;
`;

export const TrendsDescription = styled.div`
  height: auto;
  text-align: left;
  @media (min-width: ${BREAKPOINT}px) {
    margin-top: ${chartMarginDesktop}px;
    ${FONT_DEFAULT_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    margin-top: ${chartMarginMobile}px;
    ${FONT_DEFAULT_MOBILE};
  }
  color: ${COLOR_TEXT};
  /* background: gold; */
`;

export const TrendsSkeleton = (props) => (
  <Container {...props}>
    <div style={{ height: props.height }} />
  </Container>
);
