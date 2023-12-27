import React from 'react';
import Logo_Vfood from '../images/logo.png';
import Button from './Button';
import {AiOutlineClose} from 'react-icons/ai';
import {HiMenuAlt3} from 'react-icons/hi'

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    return(
        <header className={'w-full fixed z-10 bg-white'}>
            <nav className={'w-full flex py-2 md:py-3 px-4 md:px-20 items-center justify-between'}>
                <a href={'/'} className={'flex items-center justify-center text-white text-lg cursor-pointer'}>
                    <img src={Logo_Vfood} alt='Logo Vfood' className={'hidden md:block w-8 h-8 lg:w-14 lg:h-14'}/>
                    <b className={'text-xl'}>&nbsp;<span className={'text-green-700'}>V</span><span className={'text-red-600'}>Food</span></b>
                </a>

                <ul className={'hidden md:flex text-green-700 text-xl gap-6'}>
                    <li>
                        <a href={'/'} >Home</a>
                    </li>
                    <li>
                        <a href={'/#recipes'}>Recipes</a>
                    </li>
                    <li>
                        <a href={'/'}>Blogs</a>
                    </li>
                    <li>
                        <a href={'/'}>Trending</a>
                    </li>
                    <li>
                        <a href={'/'}>Take Chefs</a>
                    </li>
                </ul>

                <Button title={'Sign Up'} containerStyle={'hidden md:block bg-transparent border text-xl border-green-700 text-green-700 hover:bg-green-800 hover:text-white rounded-full min-w-[130px]'} />
                <button className={'block md:hidden text-green-700 text-xl'} onClick={() => setOpen(prev => !prev)}>
                    {open ? <AiOutlineClose/> : <HiMenuAlt3/>}
                </button>
            </nav>
            <div className={`${open ? 'flex' : 'hidden'} bg-white flex-col w-full px-4 pt-16 pb-10 text-green-700 gap-6 text-[28px]`}>
                <a href={'/'}>Home</a>
                <a href={'/#recipes'}>Recipes</a>
                <a href={'/'}>Trending</a>
                <a href={'/'}>Blogs</a>
            </div>
        </header>
    )
}

export default Navbar;