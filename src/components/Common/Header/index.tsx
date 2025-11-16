import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import logoGdgBlack from '../../../assets/logos/logo-gdg-black.svg';
import { ChevronDown } from 'lucide-react';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isMobileEventsOpen, setIsMobileEventsOpen] = useState<string>('');
    const dropdownTimerRef = useRef<number | null>(null);

    const handleMouseEnter = (eventName: string) => {
        if (dropdownTimerRef.current) {
            clearTimeout(dropdownTimerRef.current);
        }
        setOpenDropdown(eventName);
    };

    const handleMouseLeave = () => {
        dropdownTimerRef.current = window.setTimeout(() => {
            setOpenDropdown(null);
        }, 200);
    };

    return (
        <header className="bg-white shadow-soft sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logoGdgBlack}
                                alt="Google Developer Group Belo Horizonte"
                                className="md:h-8 h-6 w-auto"
                            />
                        </Link>
                    </div>

                    <div className="hidden xl:flex items-center space-x-8">
                    <nav className="flex items-center space-x-8">
                        {/* DevFest com dropdown de anos */}
                        <div 
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('devfest')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-google-gray hover:text-google-blue transition-colors duration-200 font-regular flex items-center gap-1">
                                DevFest
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'devfest' ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {openDropdown === 'devfest' && (
                                <div 
                                    className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                                    onMouseEnter={() => handleMouseEnter('devfest')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link
                                        to="/devfest"
                                        className="block px-4 py-2 text-google-gray hover:text-google-blue hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        2025
                                    </Link>
                                    <Link
                                        to="/devfest-2024"
                                        className="block px-4 py-2 text-google-gray hover:text-google-blue hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        2024
                                    </Link>
                                </div>
                            )}
                        </div>

                        <a
                            href="#"
                            className="text-google-gray hover:text-google-blue transition-colors duration-200 font-regular"
                        >
                            GDG BH Meet
                        </a>

                        <a
                            href="#"
                            className="text-google-gray hover:text-google-blue transition-colors duration-200 font-regular"
                        >
                            Build With AI
                        </a>

                        <a
                            href="#"
                            className="text-google-gray hover:text-google-blue transition-colors duration-200 font-regular"
                        >
                            Google I/O Extended
                        </a>
                    </nav>

                    {/* <div className="hidden xl:flex items-center">
                        <a
                            href="https://www.sympla.com.br/evento/devfest-belo-horizonte/3103493"
                            target="_blank"
                            className="bg-google-blue hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-regular transition-colors duration-200 shadow-soft cursor-pointer"
                        >
                            Garantir ingresso
                        </a>
                    </div> */}

                    </div>

                    <div className="xl:hidden flex items-center space-x-3">
                        {/* <a
                            href="https://www.sympla.com.br/evento/devfest-belo-horizonte/3103493"
                            target="_blank"
                            className="bg-google-blue hover:bg-blue-600 text-white px-3 py-2 rounded-lg font-regular transition-colors duration-200 shadow-soft text-sm whitespace-nowrap"
                        >
                            Ingresso
                        </a> */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-google-gray hover:text-google-blue transition-colors duration-200 p-1"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="xl:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                            {/* DevFest Mobile Dropdown */}
                            <div>
                                <button
                                    onClick={() => setIsMobileEventsOpen(isMobileEventsOpen === 'devfest' ? '' : 'devfest')}
                                    className="w-full flex items-center justify-between px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 font-regular"
                                >
                                    DevFest
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileEventsOpen === 'devfest' ? 'rotate-180' : ''}`} />
                                </button>
                                
                                {isMobileEventsOpen === 'devfest' && (
                                    <div className="pl-6 space-y-1">
                                        <Link
                                            to="/devfest"
                                            className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 text-sm"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsMobileEventsOpen('');
                                            }}
                                        >
                                            2025
                                        </Link>
                                        <Link
                                            to="/devfest-2024"
                                            className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 text-sm"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsMobileEventsOpen('');
                                            }}
                                        >
                                            2024
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <a
                                href="#"
                                className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 font-regular"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                GDG BH Meet
                            </a>

                            <a
                                href="#"
                                className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 font-regular"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Build With AI
                            </a>

                            <a
                                href="#"
                                className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 font-regular"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Google I/O Extended
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
