import React from "react";
import Card2 from "./Card2";

import image1 from './assets/s1.png';
import image2 from './assets/s2.png'
import image3 from './assets/s3.png'
import image4 from './assets/s4.png'
const cardInfo = [
  {
    id: 1,
    image: image1,
    name:"Mike",
    gpa: 3.8
    
  },
  {
    id: 2,
    image: image2,
    name:"Manal",
    gpa: 3.6
   
  },
  {
    id: 3,
    image: image3,
    name:"Moe",
    gpa: 3.2
  },
  {
    id: 4,
    image: image4,
    name:"Mary",
    gpa: 2.6
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
        {cardInfo.map(({ image, name, gpa, id }) => (
          <div className="col-md-4" key={id}>
            <Card2 imageSource={image} name={name} gpa={gpa}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;