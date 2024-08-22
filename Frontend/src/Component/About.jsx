import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


function About() {
  return (
    <>
      <Navbar />
      <div className="dark:bg-slate-900 text-white py-16 px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 mt-8">About Us</h1>
          <p className="text-lg leading-relaxed mb-8 mt-8">
            Welcome to our platform! We are committed to providing you with the best experience possible. 
            Our team is dedicated to offering top-quality services and solutions to meet your needs. 
            We believe in innovation, excellence, and putting our users first.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Mission</h2>
              <p>
                Our mission is to empower individuals and businesses with cutting-edge tools 
                and resources that drive success. We strive to create a positive impact 
                through our innovative approach and commitment to excellence.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Vision</h2>
              <p>
                We envision a world where technology seamlessly integrates with daily life, 
                making it easier, more efficient, and more enjoyable. We aim to be at the forefront 
                of this transformation, leading the way with our passion for progress.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Meet the Team</h2>
            <p className="text-lg">
              Our team is composed of talented professionals who are passionate about what they do. 
              We work together to bring you the best service and support.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
