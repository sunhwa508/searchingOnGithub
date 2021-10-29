import styled, { keyframes } from "styled-components";

const spinner = keyframes`
  0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    39% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
`;

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
`;

export const Wrapper = styled.div`
  top: 32px;
  left: 32px;
  position: absolute;
  width: 32px;
  height: 32px;
  background: #24292f;
  animation: ${spinner} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
`;

export const Before = styled.div`
  content: " ";
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: #24292f;
  left: -24px;
  border-radius: 50% 0 0 50%;
`;

export const After = styled.div`
  content: " ";
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: #24292f;
  top: -24px;
  border-radius: 50% 50% 0 0;
`;
