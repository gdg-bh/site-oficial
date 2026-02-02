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

                            {/* GDG BH Meet com dropdown de anos */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('gdgbhmeet')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="text-google-gray hover:text-google-blue transition-colors duration-200 font-regular flex items-center gap-1">
                                    GDG BH Meet
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'gdgbhmeet' ? 'rotate-180' : ''}`} />
                                </button>

                                {openDropdown === 'gdgbhmeet' && (
                                    <div
                                        className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                                        onMouseEnter={() => handleMouseEnter('gdgbhmeet')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            to="/gdg-bh-meet-2"
                                            className="block px-4 py-2 text-google-gray hover:text-google-blue hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            2ª Edição
                                        </Link>
                                        <Link
                                            to="/gdg-bh-meet-1"
                                            className="block px-4 py-2 text-google-gray hover:text-google-blue hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            1ª Edição
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Build With AI com dropdown de anos */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('buildwithai')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="text-google-gray hover:text-google-blue transition-colors duration-200 font-regular flex items-center gap-1">
                                    Build With AI
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'buildwithai' ? 'rotate-180' : ''}`} />
                                </button>

                                {openDropdown === 'buildwithai' && (
                                    <div
                                        className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                                        onMouseEnter={() => handleMouseEnter('buildwithai')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            to="/build-with-ai-2025"
                                            className="block px-4 py-2 text-google-gray hover:text-google-blue hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            2025
                                        </Link>
                                        <Link
                                            to="/build-with-ai-2024"
                                            className="block px-4 py-2 text-google-gray hover:text-google-blue hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            2024
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Google I/O Extended com dropdown de anos */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('googleio')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="text-google-gray hover:text-google-blue transition-colors duration-200 font-regular flex items-center gap-1">
                                    Google I/O Extended
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'googleio' ? 'rotate-180' : ''}`} />
                                </button>

                                {openDropdown === 'googleio' && (
                                    <div
                                        className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                                        onMouseEnter={() => handleMouseEnter('googleio')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            to="/google-io-extended-2025"
                                            className="block px-4 py-2 text-google-gray hover:text-google-blue hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            2025
                                        </Link>
                                        <Link
                                            to="/google-io-extended-2024"
                                            className="block px-4 py-2 text-google-gray hover:text-google-blue hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            2024
                                        </Link>
                                        <Link
                                            to="/google-io-extended-2023"
                                            className="block px-4 py-2 text-google-gray hover:text-google-blue hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            2023
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* GDG For Women com dropdown de eventos */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('gdgforwomen')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="text-google-gray hover:text-google-blue transition-colors duration-200 font-regular flex items-center gap-1">
                                    GDG For Women
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'gdgforwomen' ? 'rotate-180' : ''}`} />
                                </button>

                                {openDropdown === 'gdgforwomen' && (
                                    <div
                                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                                        onMouseEnter={() => handleMouseEnter('gdgforwomen')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            to="/iwd-2026"
                                            className="block px-4 py-2 text-google-gray hover:text-google-blue hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            IWD 2026
                                        </Link>
                                    </div>
                                )}
                            </div>
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

                            {/* GDG BH Meet Mobile Dropdown */}
                            <div>
                                <button
                                    onClick={() => setIsMobileEventsOpen(isMobileEventsOpen === 'gdgbhmeet' ? '' : 'gdgbhmeet')}
                                    className="w-full flex items-center justify-between px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 font-regular"
                                >
                                    GDG BH Meet
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileEventsOpen === 'gdgbhmeet' ? 'rotate-180' : ''}`} />
                                </button>

                                {isMobileEventsOpen === 'gdgbhmeet' && (
                                    <div className="pl-6 space-y-1">
                                        <Link
                                            to="/gdg-bh-meet-2"
                                            className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 text-sm"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsMobileEventsOpen('');
                                            }}
                                        >
                                            2ª Edição
                                        </Link>
                                        <Link
                                            to="/gdg-bh-meet-1"
                                            className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 text-sm"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsMobileEventsOpen('');
                                            }}
                                        >
                                            1ª Edição
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Build With AI Mobile Dropdown */}
                            <div>
                                <button
                                    onClick={() => setIsMobileEventsOpen(isMobileEventsOpen === 'buildwithai' ? '' : 'buildwithai')}
                                    className="w-full flex items-center justify-between px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 font-regular"
                                >
                                    Build With AI
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileEventsOpen === 'buildwithai' ? 'rotate-180' : ''}`} />
                                </button>

                                {isMobileEventsOpen === 'buildwithai' && (
                                    <div className="pl-6 space-y-1">
                                        <Link
                                            to="/build-with-ai-2025"
                                            className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 text-sm"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsMobileEventsOpen('');
                                            }}
                                        >
                                            2025
                                        </Link>
                                        <Link
                                            to="/build-with-ai-2024"
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

                            {/* Google I/O Extended Mobile Dropdown */}
                            <div>
                                <button
                                    onClick={() => setIsMobileEventsOpen(isMobileEventsOpen === 'googleio' ? '' : 'googleio')}
                                    className="w-full flex items-center justify-between px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 font-regular"
                                >
                                    Google I/O Extended
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileEventsOpen === 'googleio' ? 'rotate-180' : ''}`} />
                                </button>

                                {isMobileEventsOpen === 'googleio' && (
                                    <div className="pl-6 space-y-1">
                                        <Link
                                            to="/google-io-extended-2025"
                                            className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 text-sm"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsMobileEventsOpen('');
                                            }}
                                        >
                                            2025
                                        </Link>
                                        <Link
                                            to="/google-io-extended-2024"
                                            className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 text-sm"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsMobileEventsOpen('');
                                            }}
                                        >
                                            2024
                                        </Link>
                                        <Link
                                            to="/google-io-extended-2023"
                                            className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 text-sm"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsMobileEventsOpen('');
                                            }}
                                        >
                                            2023
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* GDG For Women Mobile Dropdown */}
                            <div>
                                <button
                                    onClick={() => setIsMobileEventsOpen(isMobileEventsOpen === 'gdgforwomen' ? '' : 'gdgforwomen')}
                                    className="w-full flex items-center justify-between px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 font-regular"
                                >
                                    GDG For Women
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileEventsOpen === 'gdgforwomen' ? 'rotate-180' : ''}`} />
                                </button>

                                {isMobileEventsOpen === 'gdgforwomen' && (
                                    <div className="pl-6 space-y-1">
                                        <Link
                                            to="/iwd-2026"
                                            className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 text-sm"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsMobileEventsOpen('');
                                            }}
                                        >
                                            IWD 2026
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
