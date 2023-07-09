import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide content " data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://pchfna.org/wp-content/uploads/2021/06/banner1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption text-start  ">
              <img src="https://pchfna.org/wp-content/uploads/2021/06/heart-PCHF-1.png" className='animated-item' alt="" />
              <h4 className='animated-item'>Save Lives & Smiles of CHD Kids</h4>
              <h1 className='animated-item' style={{ color: 'red',fontWeight:'bold' }}>BE THEIR HOPE!</h1>
              {/* <h3 className='fw-light'>Children's Heart Hospital & Research Institute</h3> */}
              <button className='button1 animated-item'>
                <span>Donate Now &nbsp;</span>
              </button>


            </div>
          </div>
          <div className="carousel-item ">
            <img src="https://pchfna.org/wp-content/uploads/2021/06/banner2-e1625157987897.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption text-start   ">
              <img src="https://pchfna.org/wp-content/uploads/2021/06/heart-PCHF-1.png" className='animated-item' alt="" />
              <h4 className='animated-item'>Had it... Fought it...</h4>
              <h1 className='animated-item' style={{ color: 'red',fontWeight:'bold' }}>SURVIVED IT!</h1>
              {/* <h3 className='fw-light'>Children's Heart Hospital & Research Institute</h3> */}
              <button className='button1 animated-item'>
                <span>Donate Now &nbsp;</span>
              </button>


            </div>
          </div>
          <div className="carousel-item ">
            <img src="https://pchfna.org/wp-content/uploads/2021/06/banner3-e1625158003979.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption text-start   ">
              <img src="https://pchfna.org/wp-content/uploads/2021/06/heart-PCHF-1.png" className='animated-item' alt="" />
              <h4 className='animated-item'>1 in 100</h4>
              <h1 className='animated-item' style={{ color: 'red',fontWeight:'bold' }}>CHILDREN ARE BORN WITH</h1>
              <h3 className='fw-light animated-item'>Congenital Heart Disease (CHD)</h3>
              <button className='button1 animated-item'>
                <span>Donate Now &nbsp;</span>
              </button>


            </div>
          </div>
          <div className="carousel-item ">
            <img src="https://pchfna.org/wp-content/uploads/2021/06/banner4.jpg" className="d-block w-100 " alt="..." />
            <div className="carousel-caption text-start    ">
              <div className="img mt-2 mt-lg-0">
              <img src="https://pchfna.org/wp-content/uploads/2021/06/heart-PCHF-1.png" className='animated-item' alt="" />

              </div>
              <h4 className="animated-item">Let's Build</h4>
              <h1 className='animated-item' style={{ color: 'red',fontWeight:'bold' }}>PAKISTAN'S FIRST DEDICATION</h1>
              <h3 className='animated-item fw-light'>Children's Heart Hospital & Research Institute</h3>
              <button className='button1 animated-item'>
                <span>Donate Now &nbsp;</span>
              </button>


            </div>
          </div>
          <div className="carousel-item">
            <img src="https://pchfna.org/wp-content/uploads/2022/05/website-na.jpg" className="d-block w-100" alt="..." />
           
          </div>
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

  )
}
