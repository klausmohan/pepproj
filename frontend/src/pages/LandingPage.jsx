import React, { useState } from "react";
import { LayoutTemplate } from "lucide-react";

import { landingPageStyles } from "../assets/dummystyle.js";

const LandingPage = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
  return (
    <div className={landingPageStyles.container}>
      <header className={landingPageStyles.header}>
        <div className={landingPageStyles.headerContent}>
          <div className={landingPageStyles.logoContainer}>
            <div className={landingPageStyles.logoIcon}>
              <LayoutTemplate className={landingPageStyles.logoIconInner} />
                      </div>
                      <span className={landingPageStyles.logoText}>
                          Resume Builder
                        </span>
                  </div>
                  <button className={landingPageStyles.mobileMenuButton}>


                  </button>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;



