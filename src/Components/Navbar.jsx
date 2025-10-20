import React from 'react';

const Navbar = () => {
    return (
        <nav className='fixed top-0 z-50 p-3 md:p-9'>
            <img src="/images/nav-logo.svg" alt="logo" className='w-20 md:w-24' />
        </nav>
    );
};

export default Navbar;