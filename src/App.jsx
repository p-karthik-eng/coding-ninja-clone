import { useState } from 'react'

import './App.css'

// import all files

import Navbar from './components/Navbar'

import Home from './components/Home'

import Iit from './components/Iit'

import Newlunches from './components/Newlunches'

// import Blackcard from './components/Blackcard'

import PlacementS  from './components/PlacementS'

import Certi from './components/Certi'
 
import Learning from './components/Learning'      

import Footer from './components/Footer'

import Spotlight from './components/Spotlight'
// footer end shimmer effect

import FooterEnd from './components/FooterEnd'

import Mentor from './components/Mentor'

import Doing from './components/Doing'

import Stop from './components/Stop'


import Resolve from './components/Resolve'
 

//import Founder from './components/Founder'

import Hackathons from './components/Hackathons'

import FacultySection from './components/Faculty'
import Footertext from './components/Footertext'

import SlidingR from './components/SlidingR'

import Support from './components/Support'
import CoursesSection from './components/CoursesSection'
import TransformingSection from './components/TransformingSection'


// import Team from './components/Team'

function App() {


  return (
    <>
{/* //coding ninja clone */}

<Navbar/>
<Home/>
<CoursesSection />
<TransformingSection />

{/* 
<Blackcard/> */}

<PlacementS/>


<Learning/>

<Resolve/>

{/* <Team/> */}

<Mentor/>

<Doing/>

<Stop/>

{/* <Support/> */}


{/* <Founder/> */}
<SlidingR/>
<Hackathons/>
<FacultySection/>
<Spotlight/>
<Certi/>


<Footer/>

<FooterEnd/>


<Footertext/> 


    </>
  )
}

export default App
