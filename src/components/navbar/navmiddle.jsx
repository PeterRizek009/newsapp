import React from 'react';




const NavMiddlle = () => {
    return (
        <div className='py-12 h-auto w-full flex justify-between md:justify-around items-center'>
            <img className='inline-block p-2 md:py-0 max-w-[180px] md:ml-10' src={require("./Logo.png")} alt='logo'/>
            <img className='hidden md:inline-block' src={require("./Add.png")} alt='logo'/>

        </div>
        );
}

export default NavMiddlle;