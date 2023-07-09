import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="container-fluid footerImg">
      <div className="row">
        <div className="col-12 col-lg-6  darkOverly px-4 px-lg-5 py-5 text-white ">
          <h1 className='px-lg-5 fw-bolder mt-lg-5'>Want all the latest news?
            Subscribe now!</h1>
          <h6 className=' px-lg-5' style={{ fontSize: '20px' }}>For latest news and updates regarding our <br className="d-none d-lg-block" /> projects, please subscribe to PCHFNA's <br className="d-none d-lg-block" /> newsletter.</h6>
          <div className="row">
            <form action="" className='my-5' >
              <div className="row mb-2  px-lg-5">
                <div className="col">
                  <label htmlFor="name" className='fw-bold'>First Name</label>
                  <input type="text" className="form-control bg-transparent rounded-0 text-white " style={{ outline: 'none' }} />
                </div>
              </div>
              <div className="row py-4  px-lg-5">
                <div className="col">
                  <label htmlFor="lastName" className='fw-bold'>Last Name</label>
                  <input type="text" className="form-control bg-transparent rounded-0 text-white " style={{ outline: 'none' }} />
                </div>
              </div>
              <div className="row mt-2  px-lg-5">
                <div className="col">
                  <label htmlFor="email" className='fw-bold'>Email</label>
                  <input type="email" className="form-control bg-transparent rounded-0 text-white " style={{ outline: 'none' }} />
                </div>
              </div>
              <div className="row mt-4  px-lg-5">
                <div className="col">
                   <button className='btn btn-danger rounded-0 text-white px-3 py-2 fw-bold'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-lg-6 text-white dangerOverly px-lg-5 py-3 py-lg-5">
          <div className="row mt-lg-5 py-lg-5">
            <div className="col-12 mt-5-lg ">
              <h4 className='fw-bold mt-lg-5'>Contact Information</h4>
              <h5 className='fw-semibold mt-3'>Contact Details</h5>
              <div><span className='fw-bold'>Call:</span> (646) 776-2498</div>
              <div><span className='fw-bold'>Email: </span>info@pchfna.org</div>
            </div>
            <div className="col-12 mt-lg-3 ">
              <h5 className='fw-bold mt-4 mt-lg-2'>Our Address</h5>
              <p>7 Sylvan Lane, Scarsdale, NY, 10583</p>
              <p className='mt-4'><span className='fw-bold'>PCHFNA TAX ID: </span> 81-4291117</p>
            </div>
            <div className="col-12 mt-lg-2 ">
              <p className='fw-bold btn p-0 m-0 text-white mt-4 mt-lg-2'><i class="fa-solid fa-arrow-right"></i> Privacy Policy</p>
              <div className='mt-4'><img src="https://widgets.guidestar.org/gximage2?o=9619047&l=v4" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* copyright  */}
    <div className="container-fluid " style={{backgroundColor:'#343a40'}}>
      <div className="row py-4 ">
        <div className="col text-center text-secondary  mt-2">
          <p>&copy; 2021 PCHFNA. All rights reserved.</p>
        </div>
      </div>
    </div>
    </>
  )
}
