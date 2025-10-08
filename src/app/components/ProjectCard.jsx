import React from 'react';
import { CodeBracketIcon, EyeIcon, DevicePhoneMobileIcon, CubeTransparentIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, previewUrlWeb }) => {
    return (
        <div className="card-modern">
        <div
            className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden"
            style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}
        >
            <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-projectOverlayColor bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                <Link
                    href={gitUrl}
                    className="h-14 w-14 mr-2 border-2 relative rounded-full glass border-textColor hover:border-white group/link hover:shadow-soft transition-all duration-300 hover:scale-110"
                >
                    <CodeBracketIcon className="h-10 w-10 text-textColor absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-colors duration-300" />
                </Link>
                {!previewUrlWeb && (
                    <Link
                        href={previewUrl}
                        className="h-14 w-14 border-2 relative rounded-full glass border-textColor hover:border-white group/link hover:shadow-soft transition-all duration-300 hover:scale-110"
                    >
                        <EyeIcon className="h-10 w-10 text-textColor absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-colors duration-300" />
                    </Link>
                )}
                {previewUrlWeb && (
                    <Link
                        href={previewUrl}
                        className="h-14 w-14 mr-2 border-2 relative rounded-full glass border-textColor hover:border-white group/link hover:shadow-soft transition-all duration-300 hover:scale-110"
                    >
                        <DevicePhoneMobileIcon className="h-10 w-10 text-textColor absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-colors duration-300" />
                    </Link>
                )}
                {previewUrlWeb && (
                    <Link
                        href={previewUrlWeb}
                        className="h-14 w-14 border-2 relative rounded-full glass border-textColor hover:border-white group/link hover:shadow-soft transition-all duration-300 hover:scale-110"
                    >
                        <CubeTransparentIcon className="h-10 w-10 text-textColor absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-colors duration-300" />
                    </Link>
                )}
            </div>
        </div>
            <div className="text-white rounded-b-xl mt-3 glass py-6 px-4 shadow-soft">
                <h5 className="font-xl font-semibold mb-2 gradient-text">{title}</h5>
                <p className="text-textColor leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;