import React from "react";
import s from  "./ProfileInfo.module.css" ;

 

const ProfileInfo = () => {
  return (

    <div >
      <div>
        <img className="img-main" src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt='img'></img>
      </div>
      <div className={s.descreptionBlock}>
        ava
      </div>

    </div>
  )
}

export default ProfileInfo