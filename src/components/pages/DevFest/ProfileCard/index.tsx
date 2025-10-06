import instagramIcon from '../../../../assets/icons/InstagramGray.svg';
import linkedinIcon from '../../../../assets/icons/LinkedinGray.svg';
import githubIcon from '../../../../assets/icons/GithubGray.svg';
import postIcon from '../../../../assets/icons/InfoGray.svg';

interface ProfileProps {
  photoUrl: string;
  name: string;
  role: string;
  description: string;
  links: {
    linkedin?: string;
    instagram?: string;
    github?: string;
    post?: string;
  };
}

export default function ProfileCard({ photoUrl, name, role, description, links }: ProfileProps) {
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
        {links.linkedin && (
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-1 hover:bg-gray-200 transition-transform transform hover:scale-110"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        )}

        {links.instagram && (
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-full p-1 hover:bg-gray-200 transition-transform transform hover:scale-110"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
        )}

        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full p-1 hover:bg-gray-200 transition-transform transform hover:scale-110"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        )}

        {links.post && (
          <a
            href={links.post}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Post"
            className="rounded-full p-1 hover:bg-gray-200 transition-transform transform hover:scale-110"
          >
            <img src={postIcon} alt="Post" />
          </a>
        )}
      </div>
    </div>
  );
}
