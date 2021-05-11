import React from "react";
import "./Status.css";

const Status = () => {
  return (
      <div className="allstatus">
      <div className="gird1" >
          <div className="col-1">
          <h1>
						The world's biggest
						<br></br>
						healthcare platform
					</h1>
            <p>
			We work from 7 offices all over the world, bringing Docplanner Group to life in a dozen countries.
			</p>
          </div>
          <div className="col-2">
            <div className="fade-elements__visible1">
                <div>
                <img scr="C:\Users\ASUS\Desktop\Formation React\img\flag.png" alt="flag.png"/>
                <h3 className="mahmoud">Leader in 12 countries</h3>
                <p>Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile</p>

                </div>
            </div>
            <div className="fade-elements__visible2">
            <img scr="./Formation React/img/visits.png" alt="visits.png"/>
              <h3>4.8 million appointments</h3>
              <p>booked last month</p>
            </div>
            <div className="fade-elements__visible3">
            <img scr="./Formation React/img/patients.png" alt="patients.png" width="200px"/>
              <h3>61.9 mln unique patients</h3>
              <p>visit our websites each month</p>
            </div>
            <div className="fade-elements__visible4">
            <img scr="./Formation React/img/doctors.png" alt="doctors.png"/>
              <h3>92.5k active doctors</h3>
              <p>trust our solutions</p>
            </div>

          </div>

      </div>
      </div>
    
  );
};

export default Status;
