import emailIcon from '../../../assets/icons/EmailWhite.svg';
import instagramIcon from '../../../assets/icons/InstagramWhite.svg';
import linkedinIcon from '../../../assets/icons/LinkedinWhite.svg';
import symplaIcon from '../../../assets/icons/SymplaWhite.svg';
import whatsappIcon from '../../../assets/icons/WppWhite.svg';
import facebookIcon from '../../../assets/icons/FacebookWhite.svg';
import twitterIcon from '../../../assets/icons/XWhite.svg';
import logoGdg from '../../../assets/logos/logo-gdg-white.svg';

export function Footer() {
    const socialIcons = [
        { icon: emailIcon, alt: 'Email', href: 'mailto:gdgbhz@gmail.com' },
        { icon: instagramIcon, alt: 'Instagram', href: 'https://www.instagram.com/gdg_bh/' },
        { icon: linkedinIcon, alt: 'LinkedIn', href: 'https://www.linkedin.com/company/gdg-bh/' },
        { icon: symplaIcon, alt: 'Sympla', href: 'https://www.sympla.com.br/produtor/gdgbh' },
        {
            icon: whatsappIcon,
            alt: 'WhatsApp',
            href: 'https://chat.whatsapp.com/KTJwo0KIgQGJj3d2iU4viC',
        },
        { icon: facebookIcon, alt: 'Facebook', href: 'https://www.facebook.com/gdgbh/' },
        { icon: twitterIcon, alt: 'Twitter', href: 'https://x.com/gdg_bh' },
    ];

    return (
        <footer className="bg-[#21242C] text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <img src={logoGdg} alt="GDG Logo" className="w-[410px] h-[53px]" />
                        </div>

                        <p className="text-[#6A7181] text-lg leading-relaxed max-w-md">
                            Desenvolvedores apaixonados e construtores de comunidades dedicados a
                            promover o crescimento e o compartilhamento de conhecimento
                        </p>

                        <div className="flex space-x-6 md:justify-start justify-center flex-wrap md:flex-nowrap gap-6 md:gap-0">
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-[42px] h-[42px] bg-[#383A42] rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors flex-shrink-0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={social.icon}
                                        alt={social.alt}
                                        className={`${
                                            social.alt === 'Sympla'
                                                ? 'w-7 h-7'
                                                : social.alt === 'WhatsApp'
                                                  ? 'w-6 h-6'
                                                  : social.alt === 'Facebook'
                                                    ? 'w-6 h-6'
                                                    : social.alt === 'Twitter'
                                                      ? 'w-5 h-5'
                                                      : 'w-7 h-7'
                                        }`}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white text-xl font-semibold">E-mail</h4>
                        <p className="text-[#FFFFFF66] text-lg">gdgbhz@gmail.com</p>
                    </div>
                </div>

                <div className="border-t border-gray-600 mb-8"></div>

                <div className="text-[#FFFFFF66] text-lg">
                    © 2025 Google Developer Group - Belo Horizonte
                </div>
            </div>
        </footer>
    );
}
