import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Sidebar from "./Sidebar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import List from "./List_users/ListDoctor";

import ListClinic from "./List_users/ListClinic";
import Profile from "./View/Profile";
import AddDoctor from "./Add/AddDoctor";
import Add_workDoctor from "./Add/Add_workDoctor";
import Add_workResption from "./Add/Add_workResption";
import EditDoctor from "./Edit/EditDoctor";
import ViewClinic from "./View/ViewClinic";
import AddAppoint from "./Add/AddAppoint";
import AddPatient from "./Add/AddPatient";
import ViewDoctor from "./View/ViewDoctor";
import ListPatient2 from "./List_users/ListPatient2";
import ViewPatient from "./View/ViewPatient";
import Visit from "./Visit";
import AddVisite from "./Add/AddVisite";
import AddResption from "./Add/AddResption";

import DoctorClinic from "./Add/DoctorClinic";

import ListSecretary from "./List_users/ListSecretary";
import AddClinic from "./Add/AddClinic";
import Add_workDay from "./Components/Add_workDay";
import ViewSecretary from "./View/viewSecretary";
import EditResption from "./Edit/EditResption";
import EditPatient from "./Edit/EditPatient";
import EdieWork from "./Edit/EdieWork";

import Add_referralToEntity from "./Add/Add_referralToEntity";
import ListReferral from "./List_users/ListReferral";
import AddReferral from "./Add/AddReferral";

import ListTypeReferral from "./List_users/ListTypeReferral";
import ShowReferralToEntity from "./View/ShowReferralToEntity";
import AddTypeReferral from "./Add/AddTypeReferral";
import AddReferralToEntityReferral from "./Add/AddReferralToEntityReferral";
import ViewWorkDoctor from "./View/ViewWorkDoctor";
import ViewQueueVisitDoctor from "./View/ViewQueueVisitDoctor";
import AddTypeReferralToPatient from "./Add/AddTypeReferralToPatient";
import Viewreferral2Patient from "./View/Viewreferral2Patient";
import ShowPhonesForUser from "./View/ShowPhonesForUser";
import AddPhone from "./Add/AddPhone";
import ChangePassword from "./Auth/ChangePassword";
import EndServiceUser from "./Auth/EndServiceUser";
import StartService from "./Auth/StartService";
import GetReport from "./Report/GetReport";
import Show_EntityToReferral from "./View/Show_EntityToReferral";
import ViewQueueVisitDoctorNow from "./View/ViewQueueVisitDoctorNow";
import GetReportReferral from "./Report/GetReportReferral";
import GetReportVisit from "./Report/GetReportVisit";
import ShowReferralsToDoctor from "./View/ShowReferralsToDoctor";
import Search from "./Search";
import SearchDoctor from "./Search/SearchDoctor"
const App = () => {
  const img = require("./Image/دوما.jpg");
  return (
    <>
      <Navbar fixed="top" bg="white">
        <img style={{ width: "2.5%" }} src={img} alt=".." />
      </Navbar>
      <Sidebar />
      <div className="side-body" >
        <Routes>
          <Route path="/AddDoctor" element={<AddDoctor />} />

          <Route path="/Doctors" element={<List />} />
          <Route path="/Doctors/EditDoctor/:id" element={<EditDoctor />} />
          <Route path="/Doctors/ViewDoctor/:id" element={<ViewDoctor />} />
          <Route path="/addWorkDoctor/:id" element={<Add_workDoctor />} />

          <Route path="/ViewWorkDoctor/:id" element={<ViewWorkDoctor />} />
          <Route path="/ListPatient" element={<ListPatient2 />} />
          <Route
            path="/ListPatient/ViewPatient/:id"
            element={<ViewPatient />}
          />
          <Route
            path="/ListPatient/EditPatient/:id"
            element={<EditPatient />}
          />
{/* show queue */}
          <Route
            path="/ViewQueueVisitDoctor/:id"
            element={<ViewQueueVisitDoctor />}
          />
          <Route
            path="/ViewQueueVisitDoctorNow/:id"
            element={<ViewQueueVisitDoctorNow />}
          />


          <Route path="/AddApoint/:id" element={<AddAppoint />} />

          <Route path="/AddPatient" element={<AddPatient />} />

          <Route path="/ListClinic" element={<ListClinic />} />
          <Route path="/ListClinic/ViewClinic/:id" element={<ViewClinic />} />
          <Route path="/AddClinic" element={<AddClinic />} />
          <Route path="/AddResption" element={<AddResption />} />

          <Route path="/ListSecretary" element={<ListSecretary />} />
          <Route
            path="/ListSecretary/viewSecretary/:id"
            element={<ViewSecretary />}
          />

          <Route path="/EditWorkResption/:id" element=<EdieWork /> />

          <Route
            path="/ListSecretary/updateResption/:id"
            element={<EditResption />}
          />
          <Route
            path="/ListSecretary/addWorkResption/:id"
            element={<Add_workResption />}
          />

          <Route path="/DoctorClinic" element={<DoctorClinic />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/AddVisit/:id" element={<AddVisite />} />
          <Route path="/Visit/:id" element={<Visit />} />
          <Route
            path="/Viewreferral2Patient/:id"
            element={<Viewreferral2Patient />}
          />
          <Route path="/addWork" element={<Add_workDay />} />
          {/* referral */}
          <Route path="/ListReferral" element={<ListReferral />} />
          <Route path="/AddReferralToEntity" element=<Add_referralToEntity /> />
          <Route path="/AddReferral" element={<AddReferral />} />
          <Route
            path="/showReferralToEntity/:id"
            element={<ShowReferralToEntity />}
          />
          <Route path="/showEntityToReferral/:id" element={<Show_EntityToReferral/>}/>
          <Route path="/ListTypeReferral" element={<ListTypeReferral />} />
          <Route path="/AddTypeReferral" element={<AddTypeReferral />} />
          <Route
            path="/AddReferralToEntityReferral"
            element={<AddReferralToEntityReferral />}
          />
          <Route
            path="/AddTypeReferralToPatient/:id"
            element={<AddTypeReferralToPatient />}
          />
<Route path="/Doctors/showReferralsToDoctor/:id" element={<ShowReferralsToDoctor/>}/>

          {/* phone */}
          <Route
            path="/ShowPhonesForUser/:id"
            element={<ShowPhonesForUser />}
          />
          <Route path="/AddPhoneToUser/:id" element={<AddPhone />} />

          {/* password  */}
          <Route path="/ChangePassword" element={<ChangePassword/>}/>

          {/*  service user */}
          <Route path="/endServiceUser" element={<EndServiceUser/>}/>
          <Route path="/startServiceUser" element={<StartService/>}/>

          {/* report */}

          <Route path="/GetReportReferral" element={<GetReportReferral/>}/>
          <Route path="/GetReportVisit" element={<GetReportVisit/>}/>
       
       {/* search */}

          <Route path="/searchDoctor" element={<SearchDoctor/>}/>

        </Routes>
      </div>
    </>
  );
};
export default App;
