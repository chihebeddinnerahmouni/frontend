import React from 'react';
import { NurseDataContext } from "../../../Layout/nurse profile/NurseWorkLayout";
import { useContext } from "react";
import NoworkPage from './NoworkPage';
import WaitForReaquest from './WaitForReaquest';



const NurseWorkPage = () => {

    const { isWork } = useContext(NurseDataContext);
    if (!isWork) return <NoworkPage />
    if (isWork) return <WaitForReaquest />
}

export default NurseWorkPage
