import React from 'react';
import './Testimonial.css';
import VectorImg from '../../Images/Vector3.png';

const Testimonial = (props) => {
  return (
    <div id="testimonial" className={props.darkBg ? 'darkBg' : 'lightBg'}>
      <div
        id="testimonial-wrapper"
        className={props.imgStart ? 'imgStart' : 'imgEnd'}
      >
        <div className="testimonial-desc">
          <h1 className={props.darkText ? 'darkText' : 'lightText'}>
            {props.title}
          </h1>
          <p
            id="testimonial-sub-title"
            className={props.darkSubTitle ? 'darkSubTitle' : 'lightSubTitle'}
          >
            {props.subTitle}
          </p>
          <p
            id="testimonial-text"
            className={props.darkText ? 'darkText' : 'lightText'}
          >
            {props.text}
          </p>
          <span>
            <p className={props.darkSubTitle ? 'darkBtn' : 'lightBtn'}>
              SHARE YOUR OWN STORY!
            </p>
            <img src={VectorImg} alt="slick line" />
          </span>
        </div>
        <div className="testimonial-img-con">
          <div
            id="testimonial-ellipse"
            className={props.darkEllipse ? 'darkEllipse' : 'lightEllipse'}
          />
          <img src={props.img} alt={props.alt} className="testimonial-img" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
