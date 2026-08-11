import React from 'react';
import DesktopApp from './DesktopApp';
import MobileApp from './MobileApp';

function App() {
  return (
    <>
      <div className="desktop-view-wrapper">
        <DesktopApp />
      </div>
      <div className="mobile-view-wrapper">
        <MobileApp />
      </div>
    </>
  );
}

export default App;
