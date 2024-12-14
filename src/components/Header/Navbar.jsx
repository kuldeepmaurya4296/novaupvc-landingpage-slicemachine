'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import TopHeader from './TopHeader';
import { MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation = ({
    logoSrc,
    logoAlt = "nova logo",
    logoWidth = 100,
    logoHeight = 100,
    routes,
    videoLink = "/",
    phone = 'slice.primary.phone',
    email = 'slice.primary.email'
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const pathname = usePathname(); // Get current pathname

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const currentScrollY = window.scrollY;
                setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
                setLastScrollY(currentScrollY);
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [lastScrollY]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 1024);
            };

            window.addEventListener('resize', handleResize);
            handleResize();
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const isActive = (route) => (pathname === route ? 'text-[#c69240]' : 'text-white'); // Highlight active route

    return (
        <nav className="overflow-x-hidden">
            {/* Top Header */}
            <AnimatePresence>
                {!isMobile && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <TopHeader
                            logo={logoSrc}
                            videoLink={videoLink}
                            phone={phone}
                            email={email}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navbar */}
            <motion.nav
                className={`fixed w-full z-50 bg-gray-800 uppercase ${isMobile ? 'py-3' : ''}`}
                initial={{ y: 0 }}
                animate={{
                    y: scrollDirection === 'down' ? '-200%' : lastScrollY === 0 ? '0' : '-110%',
                    transition: { duration: 0.4 },
                }}
            >
                <div className="w-full flex items-center justify-between px-4 lg:px-8 lg:py-4 max-w-full">
                    {/* Logo */}
                    <div className={`text-white font-bold text-lg w-[20%] ${lastScrollY === 0 ? 'block lg:hidden' : 'block'}`}>
                        <Link href="/">
                            <Image
                                src={logoSrc}
                                width={logoWidth}
                                height={logoHeight}
                                alt={logoAlt}
                                className="bg-white p-1 w-10 rounded-lg"
                            />
                        </Link>
                    </div>

                    {/* Navigation */}
                    {!isMobile && (
                        <div className="w-full flex text-lg items-center justify-center">
                            <ul className="flex justify-between gap-12 text-white">
                                {routes.map(({ route, label }) => (
                                    <li key={route.key}>
                                        <Link href={route?.url} className={`text-hover ${isActive(route?.url)}`}>
                                            {route?.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-white focus:outline-none text-xl"
                    >
                        {isOpen ? 'Close' : <MenuIcon className="w-10 h-10" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && isMobile && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 right-0 h-full w-2/3 bg-gray-800 text-white z-40 p-6 shadow-lg overflow-y-auto"
                        >
                            <button
                                onClick={toggleMenu}
                                className="text-white text-xl mb-6 focus:outline-none"
                            >
                                ✕
                            </button>
                            <ul className="flex flex-col space-y-6">
                                {routes.map(({ route }) => (
                                    <li key={route.key}>
                                        <Link href={route?.url} className={`text-hover ${isActive(route?.url)}`}>
                                            {route?.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </nav>
    );
};

export default Navigation;
