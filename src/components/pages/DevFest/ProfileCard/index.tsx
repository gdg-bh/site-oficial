import { useState } from 'react';
import instagramIcon from '../../../../assets/icons/InstagramGray.svg';
import linkedinIcon from '../../../../assets/icons/LinkedinGray.svg';
import githubIcon from '../../../../assets/icons/GithubGray.svg';
import postIcon from '../../../../assets/icons/InfoGray.svg';
import SpeakerModal from '../../../Common/SpeakerModal';

interface ProfileProps {
  photoUrl: string;
  name: string;
  role: string;
  description: string;
  links: {
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
  speakerInfo?: string;
  talkTitle?: string;
  talkInfo?: string;
}

export default function ProfileCard({ photoUrl, name, role, description, links, speakerInfo, talkTitle, talkInfo }: ProfileProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="max-w-sm bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center h-full">
        <img
          className="w-[100px] h-[100px] rounded-full object-cover mb-4 shadow-sm"
          src={photoUrl}
          alt={`${name} photo`}
        />

      <h3 className="text-lg font-medium text-gray-900">{name}</h3>
      <p className="text-lg font-light text-gray-600">{role}</p>
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

        <button
          onClick={handleInfoClick}
          aria-label="Informações da Palestra"
          className="rounded-full p-1 hover:bg-gray-200 transition-transform transform hover:scale-110 cursor-pointer"
        >
          <img src={postIcon} alt="Info" />
        </button>
      </div>
    </div>

    <SpeakerModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      photoUrl={photoUrl}
      name={name}
      role={role}
      description={description}
      speakerInfo={speakerInfo}
      talkTitle={talkTitle}
      talkInfo={talkInfo}
      links={links}
    />
    </>
  );
}
