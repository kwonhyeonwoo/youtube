import React, { useCallback } from 'react';
import "./css/index.css";
import ProfileContainer from '../../components/Profile/container/ProfileContainer';
import { useNavigate } from 'react-router-dom';
type Props = {

}

const VideoCreate = () => {
   
    
    return (
      <main className="video-create-page">
        <section className="video-create-section">
          <ProfileContainer />
        </section>
      </main>
    );
}

export default VideoCreate