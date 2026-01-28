import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import linkedinIcon from '../../../assets/icons/LinkedinGray.svg';

interface SpeakerModalProps {
  isOpen: boolean;
  onClose: () => void;
  photoUrl: string;
  name: string;
  role: string;
  description: string;
  speakerInfo?: string;
  talkTitle?: string;
  talkInfo?: string;
  links?: {
    linkedin?: string;
  };
}

export default function SpeakerModal({
  isOpen,
  onClose,
  photoUrl,
  name,
  role,
  description,
  speakerInfo,
  talkTitle,
  talkInfo,
  links,
}: SpeakerModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;

  const modalContent = (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black transition-opacity duration-300 ${
        isAnimating ? 'bg-opacity-50' : 'bg-opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          {/* Botão de fechar */}
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fechar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Conteúdo do modal - Layout horizontal */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Lado esquerdo - Foto e informações do palestrante */}
            <div className="flex flex-col items-center text-center md:w-1/3 flex-shrink-0">
              <img
                className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
                src={photoUrl}
                alt={`${name} photo`}
              />

              <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
              <p className="text-xl font-medium text-gray-700 mb-1">{role}</p>
              <p className="text-lg text-gray-600 mb-4">{description}</p>

              {/* Link do LinkedIn */}
              {links?.linkedin && (
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full p-1 hover:bg-gray-200 transition-transform transform hover:scale-110 inline-block"
                >
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
              )}
            </div>

            {/* Lado direito - Informações do palestrante e da palestra */}
            {(speakerInfo || talkTitle || talkInfo) && (
              <div className="flex-1 md:w-2/3">
                <div className="bg-gray-50 rounded-xl p-6 h-full">
                  {/* Informações sobre o palestrante */}
                  {speakerInfo && (
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base mb-6">
                      {speakerInfo}
                    </p>
                  )}

                  {/* Título da palestra */}
                  {talkTitle && (
                    <p className="text-gray-900 font-bold leading-relaxed text-base mb-3">
                      {talkTitle}
                    </p>
                  )}

                  {/* Informações sobre a palestra */}
                  {talkInfo && (
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                      {talkInfo}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
