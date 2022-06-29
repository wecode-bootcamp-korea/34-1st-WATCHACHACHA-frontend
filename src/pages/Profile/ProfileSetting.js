import React from "react";
import "./ProfileSetting.scss";

const ProfileSetting = () => {
  return (
    <div className="setting">
      <div className="settingBox">
        <header className="settingHeader">
          <div className="settingHeaderIconBox">
            <div className="iconContain">
              <button className="xButton" />
            </div>
          </div>
          <div className="settingHeaderTextBox">
            <div className="headerText">로그아웃</div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default ProfileSetting;
