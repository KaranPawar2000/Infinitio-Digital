import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManageUser from './Components/Admin/ManageUser';
import ManageBranch from './Components/Admin/ManageBranch';
import UserAcessLog from './Components/Admin/UserAcessLog';
import UserActivityLog from './Components/Admin/UserActivityLog';
import BranchWiseDetailed from './Components/Admin/BranchWiseDetailed';
import BranchWiseSummary from './Components/Admin/BranchWiseSummary';
import PanVerification from './Components/User/Panverification';
import AadharVerification from './Components/User/AadharVerification';
import VoterIdVerification from './Components/User/VoterIdVerification';
import PassportVerification from './Components/User/PassportVerification';
import Dl from './Components/User/Dl';
import Electricity from './Components/User/Electricity';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manage_user' element={<ManageUser />} />
        <Route path='/manage_branch' element={<ManageBranch />} />
        <Route path='/branch_wise_summary' element={<BranchWiseSummary />} />
        <Route path='/branch_wise_detailed' element={<BranchWiseDetailed />} />
        <Route path='/user_access_log' element={<UserAcessLog />} />
        <Route path='/user_activity_log' element={<UserActivityLog />} />
        <Route path='/pan' element={<PanVerification />} />
        <Route path='/aadhar' element={<AadharVerification />} />
        <Route path='/voter' element={<VoterIdVerification />} />
        <Route path='/pass-port' element={<PassportVerification />} />
        <Route path='/dl' element={<Dl/>} />
        <Route path='/electricity' element={<Electricity/>} />
 





      </Routes>
    </BrowserRouter>
  );
}

export default App;
