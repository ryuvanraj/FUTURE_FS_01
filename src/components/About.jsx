import React from 'react';

const About = () => (
  <section id="about">
    <div className="wrapper">
      <article>
        <div className="title">
          <h3>Who's this guy?</h3><div className="separator" />
          <img
            src="/yuvan.jpg" 
            alt="Yuvan Raj"
            className="about-photo"
          />
        </div>
        <div className="desc full">
          <h4>My name is Yuvan.</h4>
          <p>
            I’m a passionate Full Stack Developer focused on building seamless, high-performing web applications using modern frameworks and scalable architecture. I enjoy turning complex problems into elegant, interactive user experiences while keeping performance and maintainability in mind.
            I’m also an aspiring Web3 Developer with hands-on experience building and deploying full stack decentralized applications. I’ve completed several projects that reflect my problem-solving skills and adaptability across technologies and languages. 
            Always eager to learn and grow, I’m looking to contribute to impactful projects within a collaborative and forward-thinking team.
          </p>
          <h4>I'm a programmer.</h4>
          <p>
            I work across the stack, typically using React, Node.js, Express, and SQL, while also exploring technologies like Solidity and smart contract development in the Web3 space. Clean code and thoughtful UI/UX are at the heart of my development approach.
          </p>
          <p className='tech-stack-title'>My Tech Stack</p>
          {/* Tech Stack Section */}
          <div className="tech-stack">
            <img src="/HTML is Now the Latest Version of Markup Language….jpeg" alt="HTML" title="HTML" />
            <img src="/e42ca2b3-f762-41d2-b399-5c5d36c88f5c.jpeg" alt="CSS" title="CSS" />
            <img src="/c93d81ca-890d-4e5c-82ba-3f8b315350f7.jpeg" alt="JavaScript" title="JavaScript" />
            <img src="/49eec903-dae0-4ecc-bc70-02208f4bc574.jpeg" alt="React" title="React" />
            <img src="/Standardize npm package's Node_js version to….jpeg" alt="Node.js" title="Node.js" />
            <img src="/Decorate laptops, Hydro Flasks, cars and more with….jpeg" alt="TailwindCSS" title="TailwindCSS" />
            <img src="/606853a1-4b6f-424b-ada6-c5cc76e16d0a.jpeg" alt="Python" title="Python" />
            <img src="/Best Online Java Compiler.jpeg" alt="Java" title="Java" />
            <img src="/sql.jpeg" alt="SQL" title="SQL" />
            <img src="/solidity-feat.jpg" alt="Solidity" title="Solidity" />
            <img src="/block.png" alt="Blockchain" title="Blockchain" />
            <img src="/Decorate laptops, Hydro Flasks, cars and more with… (1).jpeg" alt="Git" title="Git" />
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default About;
