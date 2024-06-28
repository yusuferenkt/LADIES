import React from 'react'
import annelerImage from '../assets/images/anneler-gunu.jpeg';
import makyajImage from '../assets/images/makyaj.jpg';
import trendsImage from '../assets/images/trends.jpg';

export default function Slider() {
  return (
    <div className='slider'>
        <div id='carouselUrunSlider' className='carousel slide'>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img src={annelerImage} className='d-block w-100' alt="Anneler Günü"/>
                </div>
                <div class="carousel-item">
                    <img src={makyajImage} class="d-block w-100" alt="Makyaj" />
                </div>
                <div class="carousel-item">
                    <img src={trendsImage} class="d-block w-100" alt="Trendler" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselUrunSlider" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselUrunSlider" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}
