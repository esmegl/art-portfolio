import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import { Icon } from '@iconify/react';

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home');
	// Check if the user scrolls the window
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if(window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		}

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [])

	const onUpdateActiveLink = (value: any) => {
		setActiveLink(value);
	}

	return (
		<Navbar expand="lg" className={scrolled ? "scrolled": ""}>
			<Container>
				<Navbar.Brand href="#home">
					<img className="logo" src={logo} alt="Logo"/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
						<Nav.Link href="#portfolio" className={activeLink === 'portfolio' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('portfolio')}>Projects</Nav.Link>
						<Nav.Link href="#drafts" className={activeLink === 'drafts' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('drafts')}>Drafts</Nav.Link>
					</Nav>
					<span className="navbar-text">
						<div className="social-icon">
							<a href="https://www.instagram.com/artist_in_green/" target="_blank"><Icon icon="mdi:instagram" color="white" width="30" height="30"></Icon></a>
						</div>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}