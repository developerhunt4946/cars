import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = async ({ isAdminPage = false }) => {
    const isAdmin = false;
    return (
        <header className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
            <nav className='mx-auto px-4 py-4 flez items-center justify-between'>
                <Link href={isAdminPage ? '/admin' : '/'}>
                    <p className='font-semibold text-gray-400 text-3xl'>MyCar AI</p>
                </Link>
            </nav>
        </header>
    )
}

export default Header
