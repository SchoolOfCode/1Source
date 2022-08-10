/* PLAN
1. Title
    - Shall we reuse the header component? Or do we need to create a new component?

2. Login/Sign up button
    - Button
    - Add styling
    - Link to authenticator

3. Continue as guest button
    - Button
    - Add styling
    - Link to the homepage!

4. Graphics
    - Ask CJ if we wants to add a background. 
*/

// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// import firebase from "../../../firebase/clientApp"
// import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"


import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import LogInModal from "./LogInModal.jsx";
import SiteLogo from "../Header/NavMenu/SiteLogo.jsx";
import Background from "./Background.jsx";
import SignUpModal from "./SignUpModal.jsx";

const LinkStyles = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  font-size: 1.25rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const TagLine = styled.a`
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
`;

const PageContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Button = styled.div`
  font-size: 1.25rem;
  text-align: center;
  color: var(--font-primary-color);
  border-radius: 10px;
  border: 0.1rem solid var(--secondary);
  padding: 0.7rem;
  width: 10rem;
  cursor: pointer;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 10vh;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const SplashPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const openLoginModalHandler = () => {
    setIsLoginModalOpen(true);
  };
  const closeLoginModalHandler = () => {
    setIsLoginModalOpen(false);
  };

  const openSignUpModalHandler = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModalHandler = () => {
    setIsSignUpModalOpen(false);
  };

  function handleLoginClick() {
    openLoginModalHandler();
  }
  function handleSignUpClick() {
    openSignUpModalHandler();
  }
  return (
    <>
      <PageContainer>
        <Background closeLoginModalHandler={closeLoginModalHandler} />
        <SiteLogo />
        {isLoginModalOpen && (
          <LogInModal closeLoginModalHandler={closeLoginModalHandler} />
        )}
        {isSignUpModalOpen && (
          <SignUpModal closeSignUpModalHandler={closeSignUpModalHandler} />
        )}
        <Main>
          <TagLine> For movies, tv, games and Music. Find your next slice of entertainment with 1Source</TagLine>
          <br></br>

          <ButtonGroup>
            <Button onClick={handleLoginClick}>Login</Button>
            <Button onClick={handleSignUpClick}>Sign Up</Button>
          </ButtonGroup>

          <Link href="/home">
            <LinkStyles> Continue as Guest...</LinkStyles>
          </Link>
        </Main>
      </PageContainer>
    </>
  );
};

export default SplashPage;
