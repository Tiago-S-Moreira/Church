import { Carousel } from 'antd';
import image1 from '../img/banner1.png';
import image2 from '../img/banner2.png';
import image3 from '../img/banner3.png';
import image5 from '../img/banner5.png';


const contentStyle = {
  width: '100%',
  height: '55rem',
  lineHeight: '160px',
  textAlign: 'center',
};

const mediaQueries = {
  '@media (max-width: 768px)': {
    height: '40rem',
    lineHeight: '120px'
  },
  '@media (max-width: 480px)': {
    height: '30rem',
    lineHeight: '80px'
  }
};

const responsiveContentStyle = {
  ...contentStyle,
  ...mediaQueries
};

const Banner = () => (
  <Carousel autoplay >
    <div>
      <img src={image1} style={responsiveContentStyle} alt="" />
    </div>
    <div>
    <img src={image2} style={responsiveContentStyle} alt="" />
    </div>
    <div>
    <img src={image3} style={responsiveContentStyle} alt="" />
    </div>
    <div>
    <img src={image5} style={responsiveContentStyle} alt="" />
    </div>
  </Carousel>
);
export default Banner;