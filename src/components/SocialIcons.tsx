import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export function KaggleIcon({ className = '', size = 18 }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M18.825 23.859c-.022.083-.113.141-.23.141h-3.418c-.141 0-.272-.073-.341-.192l-4.707-7.464-1.921 1.831v5.617c0 .114-.093.208-.208.208H5.208c-.115 0-.208-.094-.208-.208V.208C5 5 .093 5 .208 5h2.792c.115 0 .208.093.208.208v14.154l6.398-6.471c.075-.076.177-.119.284-.119h3.666c.113 0 .203.057.228.139.027.087-.008.183-.081.258l-5.636 5.568 5.885 9.387c.07.094.092.195.069.278z" />
    </svg>
  );
}

export function LeetCodeIcon({ className = '', size = 18 }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 9.7l3.84-4.113 1.956 1.952c.54.54 1.415.54 1.955 0a1.382 1.382 0 0 0 0-1.954L14.444.438A1.374 1.374 0 0 0 13.483 0zm2.748 10.457H8.56a1.38 1.38 0 0 0 0 2.76h7.671a1.38 1.38 0 0 0 0-2.76z" />
    </svg>
  );
}

export function HackerRankIcon({ className = '', size = 18 }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm2.148 5.766H9.852v12.468h4.296V5.766zm-1.81 4.773v2.922h-.677v-2.922h.677z" />
    </svg>
  );
}
