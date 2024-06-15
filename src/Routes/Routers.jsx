import ProfileLayout from "../Layout/ProfileLayout";
import MainLayout from "../Layout/MainLayout";
import WhiteHeaderLayout from "../Layout/WhiteHeaderLayout";
import Home from "../pages/Home";
 import Services from "../pages/Services";
 import Login from "../pages/Login";
 import Signup from "../pages/Signup";
 import Contact from "../pages/Contacts";
 import Doctors from "../pages/Doctors/Doctors";
import ProfileInfos from "../pages/Doctors/ProfileInfos";
import DoctorDetails from "../pages/Doctors/DoctorsDetails";
 import SchedulesPage from "../pages/Doctors/SchedulesPage";
import { Routes, Route } from "react-router-dom";
import NurseInfosPage from "../pages/Nurses/NurseInfosPage";
import AcceptingWork from "../pages/Nurses/nurseWorkPages/acceptingWork";
import NurseWorkLayout from "../Layout/nurse profile/NurseWorkLayout";
import NoworkPage from "../pages/Nurses/nurseWorkPages/NoworkPage";
import RecievingRequest from "../pages/Nurses/nurseWorkPages/RecievingRequest";
import EndWork from "../pages/Nurses/nurseWorkPages/EndWork";
//user
import UserLayout from "../Layout/UserLayout";
import UserProfileInfos from "../pages/User/UserProfileInfosPage";
import AskingForNurse from "../pages/User/AskingForNursePage";
import SetPosition from "../pages/User/SetPositionPage";
import NearbyNurses from "../pages/User/NearbyNursesPage";
import ServiceEnd from "../pages/User/ServiceEndPage";
import ThankYouPage from "../pages/User/ThankYouPage";
import NurseResultPage from "../pages/User/NurseResultPage";
import TestPage from "../pages/User/TestPage";


const Routers = ()=>{
return (
<Routes>
<Route path="/" element={<MainLayout><Home /></MainLayout>} />
<Route path="/" element={<MainLayout><Home /></MainLayout>} />
<Route path="/home" element={<MainLayout><Home /></MainLayout>} />
<Route path="/doctors" element={<WhiteHeaderLayout><Doctors /></WhiteHeaderLayout>} />
<Route path="/doctors/:id" element={<MainLayout><DoctorDetails/></MainLayout>} />
<Route path="/login" element={<WhiteHeaderLayout><Login /></WhiteHeaderLayout>}/>
<Route path="/register" element={<WhiteHeaderLayout><Signup/></WhiteHeaderLayout>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/services" element={<Services/>} />
<Route path="/docProfile" element={<ProfileLayout type="PROFILE"><ProfileInfos /></ProfileLayout>} />
<Route path="/schedules" element={<ProfileLayout type="SCHEDULES"><SchedulesPage /></ProfileLayout>} />
{/* nurses */}
<Route path="/Nurse-Profile" element={<NurseWorkLayout><NurseInfosPage /></NurseWorkLayout>} />
<Route path="/Nurse-noWork" element={<NurseWorkLayout><NoworkPage  /></NurseWorkLayout>} />
<Route path="/Nurse-recieving" element={<NurseWorkLayout><RecievingRequest  /></NurseWorkLayout>} />
<Route path="/Nurse-accepting" element={<NurseWorkLayout><AcceptingWork /></NurseWorkLayout>} />
<Route path="/Nurse-endWork" element={<NurseWorkLayout><EndWork /></NurseWorkLayout>} />
{/* user */}
<Route path="/User-Profile" element={<UserLayout><UserProfileInfos /></UserLayout>} />
<Route path="/User-asking" element={<UserLayout><AskingForNurse /></UserLayout>} />
<Route path="/User-set-position" element={<UserLayout><SetPosition /></UserLayout>} />
<Route path="/User-result" element={<UserLayout><NurseResultPage /></UserLayout>} />
<Route path="/User-service-end" element={<UserLayout><ServiceEnd /></UserLayout>} />
<Route path="/User-thanks" element={<UserLayout><ThankYouPage /></UserLayout>} />
<Route path="/User-test" element={<UserLayout><TestPage /></UserLayout>} />
</Routes>
);
};
export default Routers;

// /* <Route path="/NurseWork" element={<NurseLayout><NurseWorkPage /></NurseLayout>}*/