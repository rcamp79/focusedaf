import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import { Container } from 'react-bootstrap';
import Carousel, { Modal, ModalGateway } from "react-images";
import Header from '../Components/Header';
import NavItem from '../Components/NavItem';
import { ReactComponent as FacebookIcon } from '../Assets/Icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../Assets/Icons/twitter.svg';
import { ReactComponent as InstaIcon } from '../Assets/Icons/instagram.svg';
import { ReactComponent as HamburgerIcon } from '../Assets/Icons/menu.svg';
import NavMenu from '../Components/NavMenu';
import { Link } from 'react-router-dom';

function Portfolio() {

  const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    }

  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className='portfolio-container'>
      <Header>
        <NavItem icon={<FacebookIcon />} />
        <NavItem icon={<TwitterIcon />} />
        <NavItem icon={<InstaIcon />} />
        <NavMenu icon={<HamburgerIcon />}>
          <div className="nav-menu">
            <ul className="nav-links">
              <li className='nav-item'>
                <Link to="/" className='nav-menu-link'>
                  <span className="link-text">
                    Home
                  </span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/about" className='nav-menu-link'>
                  <span className="link-text">
                    About
                  </span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/" className='nav-menu-link' disabled>
                  <span className="link-text">
                    Login
                  </span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/portfolio" className='nav-menu-link'>
                  <span className="link-text">
                    Portfolio
                  </span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/Pricing" className='nav-menu-link'>
                  <span className="link-text">
                    Pricing
                  </span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/contact" className='nav-menu-link '>
                  <span className="link-text">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </NavMenu>
      </Header>
      <Container className="portfolio">
        <Gallery photos={photos} direction={"row"} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Container>

    </div>
  )
}

export default Portfolio;
