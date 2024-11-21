import styled from "styled-components";

const GradientBox = styled.div`
  background: linear-gradient(to right, #267871, #136a8a);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface WhiteBoxProps {
    custompadding?: string;
}

export const WhiteBox = styled.div<WhiteBoxProps>`
    border: 5px solid #fff;
    padding: ${({ custompadding }) => custompadding || "5vw"}; // Default to "5vw" if not provided
    border-radius: 1vw;
    text-align: center;
    background: rgba(${({ theme }) => theme.colors.rgb.contrast});
`;

const SignInTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.contrast};
  margin-bottom: 20px;
`;

const SignInMethodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RowFiller = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const SignInButton = styled.div`
  cursor: pointer;
  transition: transform 0.2s, color 0.2s;
  color: #333;

  &:hover {
    transform: scale(1.1);
    color: #FFF;
  }
`;

export const Styled = {
    GradientBox,
    WhiteBox,
    SignInTitle,
    SignInMethodWrapper,
    RowFiller,
    SignInButton,
};
