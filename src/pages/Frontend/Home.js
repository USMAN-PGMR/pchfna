import { useEffect, useState } from 'react';
import React from 'react'
import Carousel from '../../components/Frontend/Carousel/Carousel'
// import CountUp from 'react-countup/build/CountUp';
import CountUp from 'react-countup';
// import Navbar from '../../components/Frontend/Header/Navbar'

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [hasZoomedIn, setHasZoomedIn] = useState(false);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 0 && !hasZoomedIn) {
      setHasZoomedIn(true);
    }
  }, [scrollY, hasZoomedIn]);
  return (
    <>
      <Carousel />
      {/* Every Life Matters */}
      <div className="container mt-5">
      <div className="row pt-lg-5">
        <div className={`col text-center ${hasZoomedIn ? 'zoomIn visible' : 'invisible'}`}>
          <h1 className='fw-bold zoomIn'>Every Life Matters, Every Child Matters</h1>
          <h4 className='zoomIn text-secondary'>PCHFNA Is Registered Under Section 501 (C)(3)</h4>
        </div>
      </div>
      <div className="row my-2">
        <div className={`col-12 col-md-8 offset-md-2 ${hasZoomedIn ? 'zoomIn visible' : 'invisible'}`}>
          <hr />
        </div>
      </div>
      <div className="row my-2">
        <div className={`col-12 col-md-8 offset-md-2 ${hasZoomedIn ? 'zoomIn visible' : 'invisible'}`}>
          <p className='text-secondary zoomIn'>Pakistan Children’s Heart Foundation North America (PCHFNA) is committed to ensuring that we provide access to appropriate healthcare to patients born with Congenital Heart Disease (CHD) and related illnesses in Pakistan. PCHFNA is a U.S. based 501 (C)(3) tax-exempt, non-profit organization.</p>
        </div>
      </div>
      <div className="row">
        <div className={`col text-center ${hasZoomedIn ? 'zoomIn visible' : 'invisible'}`}>
          <button className='button1 zoomIn'>
            <span>Read More &nbsp;</span>
          </button>
        </div>
      </div>
    </div>
      {/* cards */}
      <div className="container my-5 pb-md-4 ">
        <div className="row">
          <div className={`col-12 col-md-6 col-lg-3 ${hasZoomedIn ? 'zoomIn visible' : 'invisible'}`}>
            <div className="card card1 rounded-0 mt-2 zoomIn">
              <div className="row">
                <div className="col text-center my-5">
                  <i class="fa-solid fa-circle-user" style={{ fontSize: '80px' }}></i>
                  <h5 className='mt-4 fw-bold'>Become A Volunteer</h5>
                </div>
              </div>

            </div>
          </div>
          <div className={`col-12 col-md-6 col-lg-3 ${hasZoomedIn ? 'zoomIn visible' : 'invisible'}`}>
            <div className="card card1 rounded-0 mt-2 zoomIn">
              <div className="row">
                <div className="col text-center my-5">
                  <i class="fa-solid fa-heart" style={{ fontSize: '80px' }}></i>
                  <h5 className='mt-4'>Our Story</h5>
                </div>
              </div>

            </div>
          </div>
          <div className={`col-12 col-md-6 col-lg-3 ${hasZoomedIn ? 'zoomIn visible' : 'invisible'}`}>
            <div className="card card1 rounded-0 mt-2 zoomIn">
              <div className="row">
                <div className="col text-center my-5">
                  <i class="fa-regular fa-money-bill-1" style={{ fontSize: '80px' }}></i>
                  <h5 className='mt-4'>Make A Difference</h5>
                </div>
              </div>

            </div>
          </div>
          <div className={`col-12 col-md-6 col-lg-3 ${hasZoomedIn ? 'zoomIn visible' : 'invisible'}`}>
            <div className="card card1 rounded-0 mt-2 zoomIn">
              <div className="row">
                <div className="col text-center my-5">
                  <i class="fa-solid fa-newspaper" style={{ fontSize: '80px' }}></i>
                  <h5 className='mt-4'>Subscribe For eNews</h5>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      {/* journy & struggle */}
      <div className="  py-5 mt-5 imgBack "  >
        <div className="container  ">

          <div className="row">
            <div className="col text-center">
              <h1 className='text-white fw-bolder' >Our Journey & Struggle for Children <br />
                Born with CHD <br />
                Reported by the BBC</h1>
            </div>
          </div>
          <div className="row text-center mt-4">
            <div className="col text-center">
              <button class="text-center btn-circle ">
              <i class="fa-solid fa-play"></i>
              </button>
              <span className='ms-2 text-white'>Watch Video</span>
            </div>
          </div>
        </div>
      </div>
      {/* what we want */}
      <div className="container-fluid py-5 bg-light">
        <div className="row py-lg-5">
          <div className={`col text-center ${hasZoomedIn ? 'zoomIn visible' : 'invisible'}`}>
            <h1 className='zoomIn' style={{fontSize:'40px',fontWeight:'bolder'}}>What do we do?</h1>
            <h6 className='zoomIn'>Our Focus Area</h6>
          </div>
        </div>
        <div className="container pb-lg-2">
          <div className="row mt-2">
            <div className={`col-12 col-md-6 col-lg-3 ${hasZoomedIn ? 'zoomIn visible' : 'invisible'}`}>
              <div className="card card2 crtHeart rounded-0 p-4  mt-2 zoomIn">
                <div className="row">
                <i class="fa-solid fa-heart" style={{ fontSize: '50px' }}></i>
                </div>
                <div className=" mt-4 row">
                  <h6 className='fw-bolder' style={{fontSize:'17px'}}>Child Heart Treatment</h6>
                  <p>Financially supporting the surgical or interventional treatment of deserving and needful CHD patients.</p>
                </div>
              </div>
            </div>
            <div className={`col-12 col-md-6 col-lg-3 ${hasZoomedIn ? 'zoomIn visible' : 'invisible'}`}>
              <div className="card card2 crtHospital rounded-0 p-4 mt-2 zoomIn ">
                <div className="row">
                <i class="fa-solid fa-hospital" style={{ fontSize: '50px' }}></i>
                </div>
                <div className=" mt-4 row">
                  <h6 className='fw-bolder' style={{fontSize:'17px'}}>Hospital Construction</h6>
                  <p>Building Pakistan’s first dedicated, state of the art Children’s Heart Hospital & Research Institute (CHHRI).</p>
                </div>
              </div>
            </div>
            <div className={`col-12 col-md-6 col-lg-3 ${hasZoomedIn ? 'zoomIn visible' : 'invisible'}`}>
              <div className="card card2 crtUser rounded-0 p-4   mt-2 zoomIn">
                <div className="row">
                <i class="fa-solid fa-users" style={{ fontSize: '50px' }}></i>
                </div>
                <div className=" mt-4 row">
                  <h6 className='fw-bolder' style={{fontSize:'17px'}}>Capacity Building</h6>
                  <p>Organizing medical workshops to help healthcare professionals improve their abilities.</p>
                </div>
              </div>
            </div>
            <div className={`col-12 col-md-6 col-lg-3 ${hasZoomedIn ? 'zoomIn visible' : 'invisible'}`}>
              <div className="card card2 crtBullhorn rounded-0 p-4  mt-2 zoomIn">
                <div className="row">
                <i class="fa-solid fa-bullhorn" style={{ fontSize: '50px' }}></i>
                </div>
                <div className=" mt-4 row">
                  <h6 className='fw-bolder' style={{fontSize:'17px'}}>CHD Awareness</h6>
                  <p>Creating awareness for our cause among the general public as well as policy-makers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* As pakistan's */}
      <div className="backGroundImage " >
        <div className="container-fluid">
          <div className="row">
            <div className="col">
          <h1 className='text-white text-center fw-bolder'>As Pakistan’s leading children’s heart charity, your <span className='mb-5 '  style={{borderBottom: '5px solid red',}}>donations</span>  can help us save and improve lives.</h1>

            </div>
          </div>
        {/* <div className="row">
        </div> */}
        <div className={`row mt-4 ${hasZoomedIn ? 'zoomIn visible' : 'invisible'}`}>
          <div className="col text-center">

          <button className='button1 zoomIn'>
            <span>Donate Now &nbsp;</span>
          </button>
          </div>
        </div>
        </div>
      </div>
      {/* Our Mission */}
      <div className="container-fluid  pb-0  heartBg">
        <div className="row">
          <div className="col-12 col-md-7  px-0  " >
           <div className="container px-3 px-md-5  mt-5  ">
            <div className="row px-md-4 mt-md-5 pt-lg-4">
              <div className="col-12">
                <h2 className='fw-bolder'>Our Mission</h2>
              </div>
              <div className="col-12">
                <p className='fw-semibold text-secondary'>As one of the leading heart surgery charity organizations working in Pakistan, our children’s heart unit fund helps us provide access to quality healthcare for deserving and needful children born with Congenital Heart Disease (CHD) and build Pakistan’s first dedicated, state-of-the-art Children’s Heart Hospital & Research Institute (CHHRI), which will act as a model institute for the training of healthcare professionals, education of the public at large and promoting research into the causes & management of CHD.</p>
              </div>
            </div>
            <div className="row px-md-4 mt-3 mt-md-4">
              <div className="col-12">
                <h2 className='fw-bolder'>Our Vision</h2>
              </div>
              <div className="col-12 mb-1 ">
                <p className='text-secondary fw-semibold'>To ensure that not a single child in Pakistan born with a congenital heart defect remains untreated</p>
              </div>
            </div>
           </div>
          </div>
          <div className="col-12 col-md-5 px-md-0 mb-3 mb-md-0" >
            <img src="https://pchfna.org/wp-content/uploads/2021/06/VISSIO1.jpg" className=' mx-0 w-100' alt="" />
          </div>
        </div>
      </div>
      {/* counters */}
      <div className="container-fluid countBack py-5">
        <div className="row">
          <div className="col">

          <div className="container my-5">
            <div className="row text-center">

          <div className="col-12 col-lg-4 ">
            <div className="row mt-5">
            <i class="fa-regular fa-flag" style={{fontSize:'55px',color:'red'}}></i>
            </div>
            <div className="row my-3">
              <h1 style={{fontSize:'80px' ,color:'white',fontWeight:'bold'}}>
              <CountUp end={11} />
              </h1>
            </div>
            <div className="row pb-3">
              <h5 style={{color:'white',}}>Us Chapters</h5>
            </div>
          </div>
          <div className="col-12 col-lg-4  ">
            <div className="row mt-5">
            <i class="fa-solid fa-stethoscope" style={{fontSize:'55px',color:'red'}}></i>
            </div>
            <div className="row my-3">
              <h1 style={{fontSize:'80px' ,color:'white',fontWeight:'bold'}}>
              <CountUp end={407} />
                </h1>
            </div>
            <div className="row pb-3">
              <h5 style={{color:'white',}}>Surgeries Till Date</h5>
            </div>
          </div>
          <div className="col-12 col-lg-4  ">
            <div className="row mt-5">
            <i class="fa-regular fa-hospital" style={{fontSize:'55px',color:'red'}}></i>
            </div>
            <div className="row my-3">
              <h1 style={{fontSize:'80px' ,color:'white',fontWeight:'bold'}}>
              <CountUp end={145} />
                </h1>
            </div>
            <div className="row pb-3">
              <h5 style={{color:'white',}}>Children Awaiting Surgery</h5>
            </div>
          </div>
          
            </div>
          </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
