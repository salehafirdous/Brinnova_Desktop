import React from 'react';
import { Phone } from 'lucide-react';
import './App.css';

const StrokeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M12 4c-3 0-5 2-5 4.5 0 .5-.1 1-.2 1.5A3.5 3.5 0 0 0 5 14c0 2 1.5 3 3 3 .5 0 1 .1 1.5.2A4.5 4.5 0 0 0 14 15.5M12 4c3 0 5 2 5 4.5 0 .5.1 1 .2 1.5A3.5 3.5 0 0 1 19 14c0 2-1.5 3-3 3-.5 0-1 .1-1.5.2A4.5 4.5 0 0 1 10 15.5" />
    <g><path d="M13 3l-3 7h4l-3 8" /></g>
  </svg>
);

const ParalysisIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M9 11h4a2 2 0 0 1 2 2v3" />
    <path d="M11 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    <path d="M15 16h3.5" />
    <path d="M9 11v6" />
    <path d="M7 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <g><circle cx="7" cy="15" r="2" /></g>
  </svg>
);

const OrthoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M9 3c0 4 2 6 2 9s-2 5-2 9" />
    <path d="M15 3c0 4-2 6-2 9s2 5 2 9" />
    <g><circle cx="12" cy="12" r="3" /></g>
  </svg>
);

const NeuroIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M13 4a6 6 0 0 1 6 6c0 2.2-1 4-2 6a3 3 0 0 0-1.5 2.5V21h-5v-2.5A3 3 0 0 0 8.5 16c-1-2-2-3.8-2-6a6 6 0 0 1 6.5-6z" />
    <g>
      <path d="M12.5 7l3 1.5v3l-3 1.5-3-1.5v-3z" />
      <path d="M12.5 10v3" />
      <path d="M9.5 8.5l3 1.5 3-1.5" />
    </g>
  </svg>
);

const GeriatricIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M10 6c-1 3-3 5-3 8v7" />
    <path d="M10 6c2 1 4 1 5 3v6" />
    <path d="M7 14h5" />
    <g>
      <path d="M17 9c1 0 2 .5 2 1.5V21" />
      <path d="M15 9h2" />
    </g>
  </svg>
);

const PolytraumaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M12 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <path d="M5 21v-3a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v3" />
    <g>
      <circle cx="12" cy="17" r="4" />
      <path d="M12 15.5v3M10.5 17h3" />
    </g>
  </svg>
);

const RespiratoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M12 3v5" />
    <path d="M12 8l-2 2" />
    <path d="M12 8l2 2" />
    <path d="M10 10c-2-2-5-1-5 3v3c0 3 2 5 5 2v-8z" />
    <path d="M14 10c2-2 5-1 5 3v3c0 3-2 5-5 2v-8z" />
    <g>
      <path d="M8 12v3M16 12v3" />
    </g>
  </svg>
);

const SpeechIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M11 4a6 6 0 0 1 6 6c0 2.2-1 4-2 6a3 3 0 0 0-1.5 2.5V21H8v-2.5A3 3 0 0 0 6.5 16c-1-2-2-3.8-2-6a6 6 0 0 1 6.5-6z" />
    <g>
      <path d="M18 10a4 4 0 0 1 0 4M21 8a8 8 0 0 1 0 8" />
    </g>
  </svg>
);

const PhysioIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <circle cx="12" cy="7" r="2.5"/>
    <path d="M12 10v6"/>
    <path d="M12 10c-2 0-4.5 1-4.5 3"/>
    <path d="M12 10c2 0 4.5 1 4.5 3"/>
    <path d="M12 16l-3 4"/>
    <path d="M12 16l3 4"/>
    <path d="M8 19h8"/>
  </svg>
);

const icons = {
  stroke: <StrokeIcon />,
  paralysis: <ParalysisIcon />,
  ortho: <OrthoIcon />,
  neuro: <NeuroIcon />,
  geriatric: <GeriatricIcon />,
  polytrauma: <PolytraumaIcon />,
  respiratory: <RespiratoryIcon />,
  speech: <SpeechIcon />,
  physio: <PhysioIcon />
};

function App() {
  return (
    <div className="container">
      <div className="hero-section">
        <div className="hero-right">
          <img src="/hero-new-image-2.jpg" alt="Rehabilitation Care" className="hero-image-desktop" />
        </div>
        
        <svg className="hero-overlay" viewBox="0 0 2000 1000" preserveAspectRatio="none">
          <path d="M 1100,0 C 800,400 1200,900 2000,900 L 2000,1100 L 0,1100 L 0,0 Z" fill="#026fa6" />
          <path d="M 1050,0 C 750,420 1100,950 2000,950 L 2000,1100 L 0,1100 L 0,0 Z" fill="#f6921e" />
          <path d="M 1040,0 C 740,420 1080,965 2000,965 L 2000,1100 L 0,1100 L 0,0 Z" fill="#ffffff" />
        </svg>

        <div className="hero-left">
          <div className="logo-section">
            <img src="/logo.png" alt="Brinnova Transitional Care" className="logo-image" />
          </div>
          
          <h1 className="hero-title">
            <div className="navy-text title-line-1">Comprehensive</div>
            <div className="orange-text title-line-2">Rehabilitation Care</div>
            <div className="navy-text title-line-3">For Every Stage of Recovery</div>
          </h1>
          
          <p className="hero-description">
            At Brinnova Care, we deliver personalized rehabilitation<br/>
            programs for a wide range of conditions. Our expert team<br/>
            focuses on restoring independence, improving mobility<br/>
            and enhancing quality of life with compassion<br/>
            and clinical excellence.
          </p>
        </div>
      </div>

      <div className="conditions-section">
        <div className="conditions-title-container">
          <div className="conditions-line"></div>
          <h2 className="conditions-title">Conditions We Care For</h2>
          <div className="conditions-line"></div>
        </div>

        <div className="conditions-grid">
          {[
            { icon: icons.stroke, label: "Stroke\nRehabilitation" },
            { icon: icons.paralysis, label: "Paralysis\nRehabilitation" },
            { icon: icons.ortho, label: "Orthopedic\nRehabilitation" },
            { icon: icons.neuro, label: "Neuro\nRehabilitation" },
            { icon: icons.geriatric, label: "Geriatric\nCare" },
            { icon: icons.polytrauma, label: "Polytrauma\nCare" },
            { icon: icons.respiratory, label: "Respiratory\nCare" },
            { icon: icons.speech, label: "Speech &\nSwallow Therapy" },
            { icon: icons.physio, label: "Physiotherapy\n& More" }
          ].map((item, index) => (
            <div key={index} className="condition-item">
              <div className="condition-icon-circle">
                {item.icon}
              </div>
              <span className="condition-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-banner">
        <div className="cta-left">
          <div className="cta-icon-circle">
            <Phone size={32} color="#026fa6" fill="#026fa6" />
          </div>
          <div className="cta-text">
            Call us to Book an Assessment worth <strong>Rs. 2,000 FREE.</strong>
          </div>
        </div>
        <div className="cta-right">
          <div className="cta-sub">Speak to our care team today</div>
          <div className="cta-phone">+91 88855 59994</div>
        </div>
      </div>
    </div>
  );
}

export default App;
