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
import NurseLayout from "../Layout/nurse profile/NurseLayout";
import NurseInfosPage from "../pages/Nurses/NurseInfosPage";
import AcceptingWork from "../pages/Nurses/nurseWorkPages/acceptingWork";
import NurseWorkLayout from "../Layout/nurse profile/NurseWorkLayout";
import NoworkPage from "../pages/Nurses/nurseWorkPages/NoworkPage";
import RecievingRequest from "../pages/Nurses/nurseWorkPages/RecievingRequest";
import EndWork from "../pages/Nurses/nurseWorkPages/EndWork";
//user
import UserLayout from "../Layout/UserLayout";
import UserProfileInfos from "../pages/User/UserProfileInfos";
import AskingForNurse from "../pages/User/AskingForNurse";
import SetPosition from "../pages/User/SetPosition";


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
<Route path="/Nurse-Profile" element={<NurseLayout><NurseInfosPage /></NurseLayout>} />
<Route path="/Nurse-noWork" element={<NurseWorkLayout><NoworkPage  /></NurseWorkLayout>} />
<Route path="/Nurse-recieving" element={<NurseWorkLayout><RecievingRequest  /></NurseWorkLayout>} />
<Route path="/Nurse-accepting" element={<NurseWorkLayout><AcceptingWork /></NurseWorkLayout>} />
<Route path="/Nurse-endWork" element={<NurseWorkLayout><EndWork /></NurseWorkLayout>} />
{/* user */}
<Route path="/userProfile" element={<UserLayout><UserProfileInfos /></UserLayout>} />
<Route path="/user/asking" element={<UserLayout><AskingForNurse /></UserLayout>} />
<Route path="/user/set-position" element={<UserLayout><SetPosition /></UserLayout>} />
</Routes>
);
};
export default Routers;

// /* <Route path="/NurseWork" element={<NurseLayout><NurseWorkPage /></NurseLayout>}*/