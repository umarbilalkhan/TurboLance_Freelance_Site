# TurboLance: A Comprehensive Freelancing Platform

## Executive Summary

This proposal outlines the development of a comprehensive freelancing platform, TurboLance, featuring innovative components tailored to meet the evolving needs of clients and developers. Key features include a price-controlled freelance market and detailed client profiles to ensure transparency, security, and efficiency in the freelancing experience.

## Introduction

The freelancing industry is experiencing rapid growth, with an increasing demand for platforms that offer transparency, security, and efficiency. Our proposed solution, TurboLance, addresses these needs by introducing advanced features that enhance the freelancing experience for both clients and developers.

## Objectives

The project aims to develop a user-friendly freelancing platform with the following objectives:
- Establish a user-friendly freelancing platform that ensures fairness through a price-controlled market.
- Enhance transparency by providing comprehensive client profiles, aiding developers in making informed decisions.

## Functionality

### Functional Requirements

1. **Client-based Model**
   - The platform uses a client-based model, meaning the client will have to look for the developer to get their work done. Developers will have their gigs prepared, and the client will choose the developer they like for their project.

2. **Price-Controlled Freelance Market**
   - This feature regulates pricing within the freelancing platform, ensuring that rates charged by developers fall within a predetermined range. By setting controlled ranges for hourly rates based on technology or language, the platform maintains fairness and prevents instances of overpricing or underpricing.

3. **Detailed Client Profiles**
   - The platform will provide comprehensive profiles for clients, containing information such as their previous work history on the freelancing site, feedback and ratings from previous developers, total expenditure on the platform, and other relevant details. This feature enhances transparency and helps developers make informed decisions when considering projects.

4. **User Account Modes**
   - The platform will feature two user modes:
     - **Developer Mode**: Designed for developers seeking freelance opportunities to gain experience and build their portfolios.
     - **Client Mode**: Designed for clients looking to hire developers for their projects. In this mode, clients can post project requirements, browse developer profiles, and communicate with developers to negotiate terms.

### Developer Module

1. Developers will have the ability to showcase their portfolio, highlighting their previous projects, technologies used, and the outcomes achieved.
2. The platform will maintain a detailed project history for each developer, including project descriptions, client feedback, ratings, and any relevant documentation.
3. Developers can set their availability.
4. This module allows developers to demonstrate their skills and expertise to potential clients, increasing their chances of being hired for projects.

### Client Module

1. Clients can easily post detailed project descriptions, including project objectives, required skills, timelines, and budget constraints.
2. The platform will suggest developers whose skills and expertise align with the project requirements.
3. Clients can search for a specific developer for their projects.

### Constraints

- Users must login or sign up to use the website.
- Clients must log in to client mode to avail themselves of the features available for clients.
- Developers must log in to developer mode to avail themselves of the features available for developers.

## Expected Outcomes

Upon completion, TurboLance anticipates achieving:
- Increased user satisfaction through fair pricing and transparent collaboration.
- Reduction in fraudulent activities, enhancing the overall integrity of the platform.
- Establishment as a secure and reliable freelancing platform with global recognition.

# TurboLance: A Comprehensive Freelancing Platform

<img width="945" alt="git3" src="https://github.com/bilaltariq360/TurboLance/assets/130790502/d10365ee-616e-4ab4-98d3-edcfc3f197a8">
<br/>
<img width="945" alt="git2" src="https://github.com/bilaltariq360/TurboLance/assets/130790502/ddbda4a4-b784-4cea-b06c-31dab709a1e0">


# TurboLance: Code
```
import "./App.css";

import Home from "./component/Home";
import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Error from "./component/404";
import Gigs from "./component/Gigs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Dashboard from "./component/Dashboard";
import Documentation from "./component/Documentation";
import Otp from "./component/otp";
import ForgotPassword from "./component/forgotPassword";
import DevProfile from "./component/DeveloperProfile";
import UsrDashboard from "./component/UsrDashboard";
import DevProposals from "./component/DevProposals";
import ProfileMenu from "./component/ProfileDropDown";
import ProposalDashboard from "./component/ProposalDashboard";
import WorkingProposals from "./component/WorkingProposals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gigs" element={<Gigs />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/UsrDashboard" element={<UsrDashboard />} />
        <Route path="/DevProposals" element={<DevProposals />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="Footer" element={<Footer />} />
        <Route path="/Documentation" element={<Documentation />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/DeveloperProfile" element={<DevProfile />} />
        <Route path="/ProposalDashboard" element={<ProposalDashboard />} />
        <Route path="/profilemenu" element={<ProfileMenu />} />
        <Route path="/WorkingProposals" element={<WorkingProposals />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```


## Conclusion

The proposed freelancing platform, TurboLance, offers a unique blend of innovative features designed to elevate the freelancing experience for clients and developers alike. By prioritizing transparency, fairness, and security, we aim to create a thriving ecosystem that fosters trust, collaboration, and success.

---

*This README file outlines the vision, objectives, and functionalities of the TurboLance freelancing platform. For more detailed documentation and development updates, please refer to the project wiki.*
