
import './Banner.css';
import { Link } from "react-router-dom";

function Banner() {



  return (
    <div id="carouselExampleCaptions" className="carousel carousel-fade slide banner" /*data-bs-ride="carousel"*/ data-bs-interval="false">

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <Link to="#">
            <img src={ process.env.PUBLIC_URL + '/image/banner-img-1.jpg' } className="d-block" alt="..." />
            <div className="carousel-caption item-one">
              <p>輕薄休閒襯衫<br /><span>NT$ 790</span></p>
            </div>
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="">
            <img src={ process.env.PUBLIC_URL + '/image/banner-img-2.jpg' } className="d-block" alt="..." />
            <div className="carousel-caption item-two">
              <p>休閒西裝外套<br /><span>NT$ 1490</span></p>
            </div>
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="">
            <img src={ process.env.PUBLIC_URL + '/image/banner-img-3.jpg' } className="d-block" alt="..." />
            <div className="carousel-caption item-three">
              <p>特級彈性丹寧系列<br /><span>舒適彈性不悶熱</span></p>
            </div>
          </Link>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Banner;