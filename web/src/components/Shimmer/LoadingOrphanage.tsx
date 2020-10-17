import React from 'react';

import '../../styles/components/skeleton.css';
import '../../styles/Shimmer/loadingOrphanage.css';
import Sidebar from '../Sidebar';

export default function Orphanage() {
  return (
    <div id="page-orphanage">
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <div className="skeleton banner-skeleton" />

          <div className="images-skeleton">
            <div className="skeleton  image-skeleton" />
            <div className="skeleton  image-skeleton" />
            <div className="skeleton  image-skeleton" />
          </div>

          <div className="orphanage-details-content">
            <div className="skeleton orphanage-title-skeleton" />
            <div className="skeleton orphanage-description-skeleton" />

            <div className="skeleton map-container-skeleton">
              <span className="skeleton white map-skeleton" />

              <footer>
                <div className="skeleton map-footer-skeleton" />
              </footer>
            </div>

            <hr />

            <div className="skeleton orphanage-title-skeleton" />
            <div className="skeleton orphanage-description-skeleton" />

            <div className="open-details">
              <div className="skeleton hour-skeleton" />
              <div className="skeleton open-on-weekends-skeleton" />
            </div>

            <div className="skeleton whatsapp-button-skeleton" />
          </div>
        </div>
      </main>
    </div>
  );
}
