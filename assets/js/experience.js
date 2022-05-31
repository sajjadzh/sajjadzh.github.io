AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Doctoral Assistant",
    cardImage: "assets/img/experience-page/EPFL.jpg",
    place: "Laboratory for Applied Mechanical Design, EPFL, Lausanne, Switzerland",
    time: "(August, 2018 - present)",
    desp: "<li>Integrated design optimization and experimental investigation of high-speed small-scale turbopump for Organic Rankine Cycle(ORC) application</li>        <li>Developed a state-of-the-art software for automated design and CAD generation of turbopumps</li><li>Developed an interface for automated CFD evaluation of turbomachines</li><li>Designed and Instrumented turbopump experimental rig using state-of-the art measurement techniques</li><li>Developed and integrated surrogate AI models based on automated CFD for designing turbopumps for ORC applications</li><li>Generated pre-design maps guidelines and experimentally validated models for designing turbopumps for ORC applications</li>",
  },
  {
    title: "Graduate researcher",
    cardImage: "assets/img/experience-page/UT_MS.jpg",
    place: "Advanced Refrigeration and HVAC Systems Laboratory, Uninversity of Tehran ",
    time: "(September 2015 - February, 2018)",
    desp: "<li>Contributed significantly to foundation of Advanced Refrigeration and HVAC Systems Laboratory</li><li>Designed and fabricated experimental apparatuses for performance evaluation of commercial refrigerants</li><li>Instrumentation and development of interfaces and scripts for data acquiring control operations and data processing of experimental results</li><li>Conducted experiments on visualization and image analysis of two - phase flows</li><li>Experimental measurements of flow condensation and boiling of R1234yf</li>",  
  },

  {
    title: "Research Intern",
    cardImage: "assets/img/experience-page/Merseburg.jpg",
    place: "Energietechnik Laboratory, Merseburg University of Applied Sciences, Merseburg, Germany",
    time: "(June, 2019 - August, 2019)",
    desp: "<li>Instrumentation of experimental heat pump system working with CO2</li><li>Measurements and software adaption for data acquisition</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/img/experience-page/UT_BS.jpg",
    place: "Fluid Mechanic Laboratory, Uninversity of Tehran",
    time: "(September, 2013 - September, 2014)",
    desp: "<li>Conducted research on numerical analysis and biomedical flow simulation in heart pumps (LVAD)</li><li>Designed and simulated hydraulic components of VLH (Very Low Head) turbine</li>",  
  },

];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);