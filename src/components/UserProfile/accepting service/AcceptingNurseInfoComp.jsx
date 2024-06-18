import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import image from '../../../assets/images/doctor-img02.png';
import { UserDataContext } from '../../../Layout/UserLayout';
//import { faStar as faStarHalf } from '@fortawesome/free-solid-svg-icons';


const AcceptingNurseInfoComp = () => {

  const {acceptedRequest} = useContext(UserDataContext);
  const data = acceptedRequest.nurseData;
  
  const renderStars = (rate) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-darkGreen4 text-[13px]" />);
    } else if (i - rate < 1) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalf} className="text-darkGreen4 text-[13px]" />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-400 text-[13px]" />);
    }
  }
  return stars;
};


  return (
     <div className="clientInfos w-full flex items-center justify-between mt-6">        
        <div className="infos flex gap-2">
          <img src={image} className='w-[50px] rounded-[10px]' />
          <div className="nameRate">
            <span className="text-darkGreen4 font-[500] ">{data.nurseName}</span>
          <p className="text-writingGrey mt-1 text-[14px] flex gap-1">{/*<FontAwesomeIcon icon={faStar} className="text-darkGreen4 text-[14px]" />{data.nurseRate}*/}{renderStars(data.nurseRate)}</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faPhone} className="text-white bg-darkGreen4 w-[15px] h-[15px] p-3 rounded-50" />      
    </div>
  )
}

export default AcceptingNurseInfoComp
