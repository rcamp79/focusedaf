import React from 'react';


function Header(props) {
    return (
      <nav className="navbar">
          <div className="navbar-container">
              <h3>Focused AF Photography</h3>
          <ul className="navbar-nav">
            { props.children }
          </ul>
          </div>
      </nav>

























        // <header className="header">
        //     <div className="brand">
        //         <h2 className='brand-text'>Focused AF Photography</h2>
        //     </div>
        //     <div className="social_group">
        //         <ul>
        //             <li>
        //                 <a href="/">
        //                     <i className="fab fa-facebook fa-2x"></i>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="/">
        //                     <i className="fab fa-instagram fa-2x"></i>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="/">
        //                     <i className="fab fa-twitter fa-2x"></i>
        //                 </a>
        //             </li>
        //         </ul>
        //     </div>
        // </header>
    )
}

export default Header
