import React from 'react'

const HeroSection = () => {
  return (
    <main className='hero Container'>
        <div className="hero-cont">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH YOUR 
                SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR 
                SHOES.
            </p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <div className="sec-btn">
                <button>Category</button>  
                </div>
                
            </div>
            <div className="shop">
                <p>Also Available On</p>
            </div>

            <div className="brand-icons">
                <img src='/images/amazon.png' alt = "amazon" />
                <img src='/images/flipkart.png' alt = "amazon" />

            </div>
        </div>
        <div className="hero-img">
        <img src='/images/hero-image.png' alt = "amazon" />

        </div>
    </main>
  )
}

export default HeroSection
