import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoGdgBlack from '../../../assets/logos/logo-gdg-black.svg';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-soft">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logoGdgBlack}
                                alt="Google Developer Group Belo Horizonte"
                                className="md:h-8 h-6 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Navegação central - Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className="text-google-gray hover:text-google-blue transition-colors duration-200 font-medium"
                        >
                            O que é o GDG?
                        </Link>
                        <Link
                            to="/gdg-bh-meet"
                            className="text-google-gray hover:text-google-blue transition-colors duration-200 font-medium"
                        >
                            GDG BH Meet
                        </Link>
                        <Link
                            to="/build-with-ai"
                            className="text-google-gray hover:text-google-blue transition-colors duration-200 font-medium"
                        >
                            Build With AI
                        </Link>
                        <Link
                            to="/google-io-extended"
                            className="text-google-gray hover:text-google-blue transition-colors duration-200 font-medium"
                        >
                            Google I/O Extended
                        </Link>
                        <Link
                            to="/devfest"
                            className="text-google-gray hover:text-google-blue transition-colors duration-200 font-medium"
                        >
                            DevFest
                        </Link>
                    </nav>

                    {/* Botão de call-to-action - Desktop */}
                    <div className="hidden md:flex items-center">
                        <button className="bg-google-blue hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 shadow-soft">
                            Garantir ingresso
                        </button>
                    </div>

                    {/* Botão mobile menu */}
                    <div className="md:hidden flex items-center space-x-3">
                        <button className="bg-google-blue hover:bg-blue-600 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 shadow-soft text-sm whitespace-nowrap">
                            Ingresso
                        </button>
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

                {/* Menu mobile */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                            <Link
                                to="/"
                                className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                O que é o GDG?
                            </Link>
                            <Link
                                to="/gdg-bh-meet"
                                className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                GDG BH Meet
                            </Link>
                            <Link
                                to="/build-with-ai"
                                className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Build With AI
                            </Link>
                            <Link
                                to="/google-io-extended"
                                className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Google I/O Extended
                            </Link>
                            <Link
                                to="/devfest"
                                className="block px-3 py-2 text-google-gray hover:text-google-blue transition-colors duration-200 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                DevFest
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
