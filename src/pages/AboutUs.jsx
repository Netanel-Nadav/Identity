import React from 'react';

export function AboutUs() {
  return (
    <section className='about-us flex justify-center column align-center'>
      <h1>About Me</h1>
      <div className="wrraper flex">
        <div className="img-container">
          <img src="https://res.cloudinary.com/dvxuxsyoe/image/upload/v1646312270/hj5tj6x1eq4wbvvmjpzw.jpg" alt="Netanel nadav" />
        </div>
        <div className="info flex column space-between">
          <div className="info-txt">
            <h1>Summery:</h1>
            <p>My name is netanel nadav, i'm 30 years old with a Master Degree in digital communication. i've worked 3 years in a startup as a Marketer & PPC Specaliest and i decided to take my skills to the next level. thats why i started learning Code so i can make good idea's come true!</p>
          </div>
          <div className="actions flex">
            <a href="https://www.linkedin.com/in/netanel-nadav/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/Netanel-Nadav" target="_blank"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}
