
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { MdHome } from "react-icons/md";
import logo from "../Images/smart.png";


const Nav = styled.div`
	background: white;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const NavIcon = styled(Link)`
	margin-left: 2rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const SidebarNav = styled.nav`
	background:#060b26 ;
	width: 200px;
	height: 100vh;
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

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav>
					<NavIcon to="#" >
						<FaIcons.FaBars color="black"
							onClick={showSidebar}
						/>
					</NavIcon>
					<NavIcon to="/">
					<AiIcons.AiFillHome size={"25px"}  color="#004bac"/>
					<Link to='/'>
          <div className="holdnav" >

            <img className="logo" src={logo} alt="logo" border="0" height="50px"   />
          </div>
        </Link>
					</NavIcon>
					<h1
						style={{
							textAlign: "center",
							marginLeft: "500px",
							color: "#0dc5ff",
						}}
					>
						Join Our Meeting @Care4edu
					</h1>
				</Nav>
				<SidebarNav sidebar={sidebar}>
					<SidebarWrap>
						<NavIcon to="#">
							<AiIcons.AiOutlineClose
								onClick={showSidebar}
							/>
						</NavIcon>
						{SidebarData.map((item, index) => {
							return (
								<SubMenu
									item={item}
									key={index}
								/>
							);
						})}
					</SidebarWrap>
				</SidebarNav>
			</IconContext.Provider>
		</>
	);
};

export default Sidebar;
