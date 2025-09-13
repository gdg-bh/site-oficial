import instagramIcon from '../../../../assets/icons/InstagramGray.svg';
import linkedinIcon from '../../../../assets/icons/LinkedinGray.svg';
import githubIcon from '../../../../assets/icons/GithubGray.svg';

export default function ProfileCard({
    photoUrl = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
    name = 'Nome Sobrenome',
    role = 'Cargo',
    description = 'Breve descrição sobre a pessoa: interesses, skills ou uma frase curta que resuma o profissional.',
    links = { linkedin: '#', instagram: '#', github: '#' },
}) {
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center h-full">
            <img
                className="w-[100px] h-[100px] rounded-full object-cover mb-4 shadow-sm"
                src={photoUrl}
                alt={`${name} photo`}
            />

            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            <p className="text-lg font-light text-[#4285F4]">{role}</p>
            <p className="text-md leading-[18px] text-gray-600 mt-1">{description}</p>

            <div className="flex items-center gap-3 mt-4">
                {links.linkedin ? (
                    <a
                        href={links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="rounded-full p-1 hover:bg-gray-200 transition-transform transform hover:scale-110"
                    >
                        <img src={linkedinIcon} alt="Linkedin"></img>
                    </a>
                ) : (
                    ''
                )}
                {links.instagram ? (
                    <a
                        href={links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="rounded-full p-1 hover:bg-gray-200 transition-transform transform hover:scale-110"
                    >
                        <img src={instagramIcon} alt="Linkedin"></img>
                    </a>
                ) : (
                    ''
                )}
                {links.github ? (
                    <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="rounded-full p-1 hover:bg-gray-200 transition-transform transform hover:scale-110"
                    >
                        <img src={githubIcon} alt="Linkedin"></img>
                    </a>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}
