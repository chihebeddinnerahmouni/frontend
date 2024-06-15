import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../../Layout/UserLayout';
import NearByNurseComp from '../../components/UserProfile/nearby nurses/NearByNurseComp';
import image from '../../assets/images/doctor-img01.png'
import image2 from '../../assets/images/doctor-img02.png'
import image3 from '../../assets/images/doctor-img03.png';
import Loading from '../../components/all/Loading';
import AcceptedRequest from './AcceptedRequestPage';
import NoNearbyNursePage from './NoNearbyNursePage';
import NearbyNurses from './NearbyNursesPage';





const NurseResultPage = () => {


  const { resStatus } = useContext(UserDataContext);
  if (!resStatus) return <Loading />
  //const resStatus = sessionStorage.getItem('resStatus');
  
    if (!resStatus) return <Loading />
    if (resStatus === 200) return <NearbyNurses/>
    if (resStatus === 201) return <NoNearbyNursePage />

}

export default NurseResultPage;