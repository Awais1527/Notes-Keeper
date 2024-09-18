import React from 'react'


export default function About() {
 
  return (<>
  



    <div className="container d-flex justify-content-center align-items-center min-vh-100">
  <div className="accordion w-100" id="accordionExample" style={{ maxWidth: "1100px" }}>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
         About Us
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        Welcome to Notes Keeper, your personal and secure space for managing and organizing notes efficiently. Our platform is designed to provide a seamless experience for users to create, store, and access their notes anytime, anywhere.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
         What We Do
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        At Notes Keeper, we prioritize simplicity and security. Each user gets a personalized account, ensuring that your notes are safely stored and accessible only to you. After logging in, you can easily create, view, edit, and delete your notes, all in one place.


        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Features
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        User Authentication: Secure login system that ensures your notes are private and accessible only by you.<br/>
Personalized Note Storage: Each user has their own account, and notes are stored separately and securely.<br/>
Efficient Note Management: Our simple and intuitive interface makes it easy to manage your notes with just a few clicks.
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}
