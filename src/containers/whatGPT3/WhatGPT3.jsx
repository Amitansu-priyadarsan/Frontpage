import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Health record ?" text=" A Health record refers to an electronic health record that is stored on a decentralized network, such as a blockchain. The use of blockchain technology allows for secure, transparent, and decentralized storage of health information, which can be accessed by authorized parties with the proper permissions." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Video calling " text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Uniswap" text="you can pay your doctor directly " />
      <Feature title="Documents" text="A health record typically contains a variety of documents that provide information about a person's health history, treatment, and care" />
      <Feature title=" Calender " text="  calendar can be used to keep track of important health events, such as doctor appointments, follow-up visits, and medication schedules. " />
    </div>
  </div>
);

export default WhatGPT3;