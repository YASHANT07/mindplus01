// import React, { useState } from 'react';
// import './DoctorStyle.css';

// const Doctor = ({ name, domain, language, specification, contact, session, imageUrl }) => {
//   const [showContact, setShowContact] = useState(false);
//   const [showSession, setShowSession] = useState(false);

//   const handleContactClick = () => {
//     setShowContact(true);
//     setTimeout(() => {
//       setShowContact(false);
//     }, 5000);
//   };

//   const handleSessionClick = () => {
//     setShowSession(true);
//     setTimeout(() => {
//       setShowSession(false);
//     }, 5000);
//   };

//   function DoctorCard({ doctor }) {
//     const cardStyle = {
//       display: 'flex',
//       alignItems: 'center',
//       padding: '10px',
//       border: '1px solid #ccc',
//       marginBottom: '10px',
//     };
  
//     const imageStyle = {
//       flex: '1',
//       marginRight: '10px',
//     };
  
//     const detailsStyle = {
//       flex: '3',
//     };

//   return (
//     <div className="doctor-card" style={cardStyle}>
//       <div className="doctor-image" style={imageStyle}>
//         { <img  className=""src={imageUrl} alt={name} />}
//       </div>
//       <div className="doctor-details" style={detailsStyle}>
//       <h2>{name}</h2>
//       <p>Domain: {domain}</p>
//       <p>Languages: {language}</p>
//       <p>Specialization: {specification}</p>
//       {showContact ? (
//         <p>Contact Number: {contact}</p>
//       ) : (
//         <button className='contactbtn' onClick={handleContactClick}>Contact</button>
//       )}
//       {showSession ? (
//         <p>Book Session: {session}</p>
//       ) : (
//         <button className='bookbtn' onClick={handleSessionClick}>Book Session</button>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Doctor;

import React, { useState } from 'react';
import './DoctorStyle.css';

// DoctorCard component
function DoctorCard({ doctor, handleContactClick, handleSessionClick, showContact, showSession }) {
  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  };

  const imageStyle = {
    flex: '1',
    marginRight: '10px',
  };

  const detailsStyle = {
    flex: '3',
  };

  return (
    <div className="doctor-card" style={cardStyle}>
      <div className="doctor-image" style={imageStyle}>
        <img className="" src={doctor.imageUrl} alt={doctor.name} />
      </div>
      <div className="doctor-details" style={detailsStyle}>
        <h2>{doctor.name}</h2>
    
        <p>Domain: {doctor.domain}</p>
        <p>Languages: {doctor.language}</p>
        <p>Specialization: {doctor.specification}</p>
        {showContact ? (
          <p>Contact Number: {doctor.contact}</p>
        ) : (
          <button className='contactbtn' onClick={handleContactClick}>Contact</button>
        )}
        {showSession ? (
          <p>Book Session: {doctor.session}</p>
        ) : (
          <button className='bookbtn' onClick={handleSessionClick}>Book Session</button>
        )}
      </div>
    </div>
  );
}

// Doctor component
const Doctor = ({ name, domain, language, specification, contact, session, imageUrl }) => {
  const [showContact, setShowContact] = useState(false);
  const [showSession, setShowSession] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
    setTimeout(() => {
      setShowContact(false);
    }, 5000);
  };

  const handleSessionClick = () => {
    setShowSession(true);
    setTimeout(() => {
      setShowSession(false);
    }, 5000);
  };

  return (
    <DoctorCard
      doctor={{
        name,
        domain,
        language,
        specification,
        contact,
        session,
        imageUrl,
      }}
      showContact={showContact}
      showSession={showSession}
      handleContactClick={handleContactClick}
      handleSessionClick={handleSessionClick}
    />
  );
};

export default Doctor;

