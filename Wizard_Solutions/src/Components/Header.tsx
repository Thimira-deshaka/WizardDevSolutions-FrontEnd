import React from "react";
import styled from "styled-components";
import logo from "../assets/wizardDevSol-logoo.png";

// Styled Components for the Header
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #001f3f;

  img {
    margin-right: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0 15px;
      position: relative;

      a {
        text-decoration: none;
        color: #333;
        font-weight: 500;

        &:hover {
          color: #0033cc;
        }
      }

      // Optional Dropdown Styles
      ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 10px 0;
        list-style: none;

        li {
          padding: 10px 20px;

          a {
            color: #333;
          }

          &:hover {
            background-color: #f0f0f0;
          }
        }
      }

      &:hover ul {
        display: block;
      }
    }
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 20px;
  cursor: pointer;
`;

// Header Component
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img
          src={logo}
          alt="Wizard Dev Solution Logo"
          style={{ width: "60px", height: "60px", marginRight: "10px" }}
        />
        <span>Wizard Dev Solution</span>
      </LogoContainer>
      <Nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#pages">Pages</a>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
            <ul>
              <li>
                <a href="#portfolio-1">Portfolio 1</a>
              </li>
              <li>
                <a href="#portfolio-2">Portfolio 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Nav>
      <RightContainer>
        <SearchIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path d="M22 20L20 22 14 16 14 14 16 14z"></path>
            <path d="M9,16c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7C16,12.9,12.9,16,9,16z M9,4C6.2,4,4,6.2,4,9c0,2.8,2.2,5,5,5 c2.8,0,5-2.2,5-5C14,6.2,11.8,4,9,4z"></path>
            <path
              d="M13.7 12.5H14.7V16H13.7z"
              transform="rotate(-44.992 14.25 14.25)"
            ></path>
          </svg>
        </SearchIcon>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
