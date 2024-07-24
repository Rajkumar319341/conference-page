import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import logo from "../Images/smart.png";

const Nav = styled.div`
  background: white;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }
`;

const NavIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
	margin-left: ${({ homeIcon }) => (homeIcon ? "10px" : "0")};
    margin-bottom: 10px;
  }
`;

const SidebarNav = styled.nav`
  background: #060b26;
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;

  
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Logo = styled.img`
  width: 80px;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIconsContainer>
            <NavIcon to="#">
              <FaIcons.FaBars color="black" onClick={showSidebar} />
            </NavIcon>
            <NavIcon to="/" homeIcon>
              <AiIcons.AiFillHome size={"25px"} color="#004bac"  />
              <Link
                to="/"
                style={{
                  marginLeft: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div className="holdnav">
                  <img
                    className="logo"
                    src={logo}
                    alt="logo"
                    border="0"
                    height="50px"
                    style={{ marginTop: "0.8rem", width: "auto", maxWidth: "100%" }}
                  />
                </div>
              </Link>
            </NavIcon>
          </NavIconsContainer>
          <h1
            style={{
              textAlign: "center",
              color: "#167BEE",
              margin: "0",
              fontSize: "1.5rem",
              fontFamily:"Georgia, serif"
            }}
          >
            Join Our Meeting @Care4edu
          </h1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => (
              <SubMenu item={item} key={index} />
            ))}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
