import React, { useState, useEffect } from 'react';
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../Component/Card';

function Freebook() {
  const [book, setBook] = useState([]);


  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book/");
        setBook(res.data.filter(data => data.category === "free"));
      console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Default to show 3 slides
    slidesToScroll: 1, // Scroll 1 slide at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides for large screens
          slidesToScroll: 1, // Scroll 1 slide at a time
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides for medium screens
          slidesToScroll: 1, // Scroll 1 slide at a time
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide for small screens
          slidesToScroll: 1, // Scroll 1 slide at a time
        }
      }
    ]
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="text-center px-4 md:px-7">
        <h1 className="text-4xl font-semibold text-white mb-5">Free Offered Courses</h1>
        <p className="text-xl text-white mx-auto max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, vel quidem recusandae id hic sunt vero similique illo molestiae magni pariatur cupiditate aut rem delectus est dignissimos nihil repudiandae iure.
        </p>
      </div>
      <div className="px-4 md:px-20 mt-12">
        <Slider {...settings} className="relative">
          {book.map(item => (
            <div key={item.id} className="px-2">
              <Card item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;

