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
import UserInfoPage from "../pages/User/UserInfoPage";
import UserLayout from "../Layout/UserLayout";
import NurseLayout from "../Layout/nurse profile/NurseLayout";
import NurseInfosPage from "../pages/Nurses/NurseInfosPage";
import AcceptingWork from "../pages/Nurses/nurseWorkPages/acceptingWork";
import NurseWorkLayout from "../Layout/nurse profile/NurseWorkLayout";
import NoworkPage from "../pages/Nurses/nurseWorkPages/NoworkPage";
import RecievingRequest from "../pages/Nurses/nurseWorkPages/RecievingRequest";

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
<Route path="/userProfile" element={<UserLayout type="PROFILE"><UserInfoPage /></UserLayout>} />
<Route path="/NurseProfile" element={<NurseLayout><NurseInfosPage /></NurseLayout>} />
<Route path="/NurseWork" element={<NurseWorkLayout><NoworkPage  /></NurseWorkLayout>} />
<Route path="/NurseWork/recieving" element={<NurseWorkLayout><RecievingRequest  /></NurseWorkLayout>} />
<Route path="/NurseWork/accepting" element={<NurseWorkLayout><AcceptingWork /></NurseWorkLayout>} />
</Routes>
);
};
export default Routers;

// /* <Route path="/NurseWork" element={<NurseLayout><NurseWorkPage /></NurseLayout>}*/