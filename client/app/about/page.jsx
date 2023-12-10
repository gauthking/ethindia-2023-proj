import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <section className="text-white py-16 p-20">
      <div className="container mx-auto flex">
        {/* Left side for text */}
        <div className="w-1/2 pr-8">
          <div className="text-start">
            <h2 className="text-4xl font-bold mb-6 text-green-500">About Us</h2>
            <p className="text-lg mb-8">
              We proudly present zXdao, pioneering a transformative approach to unlock the full potential of DAOs.
            </p>
            <div className='flex flex-col justify-start gap-6'>
              <p>Our Solutions:</p>
              <p>1. AI-Driven Participation: Leveraging VADER and traditional Machine Learning, we construct a behavioral model of each user through sentiment analysis. In cases where users fail to vote by the proposal deadline, our AI acts on their behalf, ensuring continuous and representative participation.</p>
              <p>2. zk Anonymity: Employing cutting-edge zk proofs and the Semaphore protocol, we introduce robust anonymity measures. Users validate their identity commitment by being part of the DAO. This process empowers users or their corresponding AI to vote securely from any wallet, supported by a comprehensive zk proof.</p>
            </div>
          </div>
        </div>
        {/* Right side for image */}
        <div className="w-1/2">
          <div className="max-w-md">
            <Image
              src="/bg.svg" // Replace with your image path
              alt="About Us"
              className="w-full h-auto rounded-md shadow-lg"
              height={200}
              width={200}
              responsive={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
