
import React from 'react';

const iconClass = "w-16 h-16";

export const DiseaseIcon: React.FC = () => (
  <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 6.718a4.5 4.5 0 01.34-1.853l.425-1.42a1.5 1.5 0 00-2.09-2.09l-1.42.426a4.5 4.5 0 01-1.853.34H9a4.5 4.5 0 00-4.5 4.5v1.086a4.5 4.5 0 01.34 1.853l.425 1.42a1.5 1.5 0 002.09 2.09l1.42-.426a4.5 4.5 0 011.853-.34h1.086a4.5 4.5 0 004.5-4.5V9.418a4.5 4.5 0 01-1.818-2.7zM9 15a6 6 0 100-12 6 6 0 000 12z" />
  </svg>
);

export const YieldIcon: React.FC = () => (
  <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.94-3.94m3.94 3.94l-3.94 3.94" />
  </svg>
);

export const PriceIcon: React.FC = () => (
  <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0H21m-9 12.75h9m-9 3.75h9M3.75 6.75h16.5M3.75 9.75h16.5m0 0a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
  </svg>
);

export const TrainingIcon: React.FC = () => (
  <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.748 8.98l-2.07-1.38a.75.75 0 01.34-1.34l2.07 1.38a.75.75 0 01-1.34 2.07-1.34.34zM19.252 8.98l2.07-1.38a.75.75 0 00-.34-1.34l-2.07 1.38a.75.75 0 101.34 2.07-1.34.34zM12 12.75a.75.75 0 00.75-.75V8.25a.75.75 0 00-1.5 0v3.75c0 .414.336.75.75.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z" />
  </svg>
);

export const ChatIcon: React.FC = () => (
  <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const SpinnerIcon: React.FC = () => (
  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);
