import React from 'react';
import Article from '../../components/article/Article';

import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';



import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Electronic Health record are the best " />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="New Study Finds Electronic Health Records Improve Patient Care"/>
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Hospitals Adopt AI to Streamline Health Records and Improve Outcomes" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Privacy Concerns Arise as Health Records Shift to the Cloud" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Patients Take Control: How Personal Health Records are Empowering Consumers" />
      </div>
    </div>
  </div>
);

export default Blog;