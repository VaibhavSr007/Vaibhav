import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hello I'm <span className="green">Vaibhav Srivastava </span>, zealous final year engineering graduate with hunger to learn technologies and make an <span className="green">impact </span> to create a better tomorrow.
            <br/>
            <br />
            Experienced <span className="green">problem solver</span> with a strong analytical background and expertise in <span className="green">frontend  </span> && <span className="green" > backend </span> development using a variety of technologies.
            <br />
            <br />
            <span className="green">AWS certified cloud practitioner</span>,  capable of building scalable web applications and managing cloud solutions. Over <span className="green">700 problem-solving</span> achievements on LeetCode, with a contest max. rating of <span className="green">1650+</span> .
            
            <br/>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;