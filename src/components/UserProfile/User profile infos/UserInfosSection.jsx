import React, { useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { UserContext } from '../../../Layout/UserLayout';
import convertToLocalServerPath from '../../../utils/photoPathChanging';


const UserInfosSection = () => {

    const { userData } = useContext(UserContext);
    if (!userData) return <p>loading</p>;
    let { name, email, phone, profilePicture } = userData;
    let profilePictureCorrect = convertToLocalServerPath(profilePicture);

  


  return (
 <div className="infosSection relative bg-white p-[25px] rounded-20 mt-[35px] w-[70%] flex gap-[35px] items-center shadow-panelShadow">
        <img src={profilePictureCorrect} className="profilePicture w-[180px] h-[180px] rounded-[50%]" />
        <div className="infos flex-grow">
          <p className="doctorName text-[30px] font-medium text-darkGreen2">{name}</p>
          <span className="key text-[#888888]">date:</span>{" "}
          <span className="value text-darkGreen2">29 may 2024</span>
          <br />
          <span className="key text-[#888888]">email:</span>{" "}
          <span className="value text-darkGreen2">{email}</span>
          <br />
          <span className="key text-[#888888]">phone:</span>{" "}
          <span className="value text-darkGreen2">{phone}</span>
          <br />
          <span className="key text-[#888888]">bio:</span>{" "}
          <span className="value text-darkGreen2">
            aaaa Aaaa aaaa Aaaa aaaa Aaaa aaaa Aaaa aaaa Aaaa aaaa Aaaa aaaa
            Aaaa aaaa Aaaa
          </span>
        </div>
        <AiOutlineUser className="modifyProfileIcon text-[20px] text-darkGreen2 cursor-pointer absolute right-[25px] top-[25px]" />
      </div>
  )
}

export default UserInfosSection
