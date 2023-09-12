import React from 'react';
import DoctorCard from './Doctor';


const doctorsData = [
  {
    name: 'Dr. John Smith',
    domain: 'www.drjohnsmith.com',
    language: 'Hindi English',
    specification: 'sleep',
    contact: '8839207439',
    session: '12pm-3pm',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',

    },
  {
    name: 'Dr. Jane Doe',
    domain: 'www.drjanedoe.com',
    language: 'Hindi English',
    specification: 'sleep',
    contact: '8435041204',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
  },
  {
    name: 'Dr. Michael Johnson',
    domain: 'www.drmichaeljohnson.com',
    language: 'Hindi English',
    specification: 'sleep',

    contact: '6263339986',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
  },
  // Add 12 more doctors following the same structure
  {
    name: 'Dr. Emily Davis',
    domain: 'www.dremilydavis.com',
    language: 'Hindi English',
    specification: 'sleep',

    contact: '8827361145',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
  },
  {
    name: 'Dr. William Brown',
    domain: 'www.drwilliambrown.com',
    language: 'Hindi English',
    specification: 'sleep',

    contact: '8305199189',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
  },
  {
    name: 'Dr. Sarah Wilson',
    domain: 'www.drsarahwilson.com',
    language: 'Hindi English',
    specification: 'sleep',

    contact: '6754328908',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
  },
  {
    name: 'Dr. Robert Lee',
    domain: 'www.drrobertlee.com',
    language: 'Hindi English',
    specification: 'sleep',

    contact: '9993708987',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
  },
  {
    name: 'Dr. Jennifer White',
    domain: 'www.drjenniferwhite.com',
    language: 'Hindi English',
    specification: 'sleep',

    contact: '9399987867',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
  },
  {
    name: 'Dr. David Hall',
    domain: 'www.drdavidhall.com',
    language: 'Hindi English',
    specification: 'sleep',

    contact: '626676545',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
  },
  {
    name: 'Dr. Lisa Green',
    domain: 'www.drlisagreen.com',
    language: 'Hindi English',
    specification: 'sleep',

    contact: '6266565434',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
  },
  {
    name: 'Dr. Richard Clark',
    domain: 'www.drrichardclark.com',
    language: 'Hindi English',
    specification: 'sleep',

    contact: '9993765645',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
  },
  {
    name: 'Dr. Amanda Martinez',
    domain: 'www.dramandamartinez.com',
    language: 'Hindi English',
    specification: 'sleep',

    contact: '9897654367',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',  },
  {
    name: 'Dr. James Turner',
    domain: 'www.drjamesturner.com',
    language: 'Hindi English',
    specification: 'sleep',

    contact: '8998687564',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',},
  {
    name: 'Dr. Mary Harris',
    domain: 'www.drmaryharris.com',
    language: 'Hindi English',
    specification: 'sleep',

    contact: '8998687564',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',},
  {
    name: 'Dr. Christopher King',
    domain: 'www.drchristopherking.com',
    language: 'Hindi English',
    specification: 'sleep',

    contact: '8998687564',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',},
];


const DoctorList = () => {
    return (
      <div className="doctor-list">
        {doctorsData.map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            domain={doctor.domain}
            language={doctor.language}
            specification={doctor.specification}
            contact={doctor.contact}
            session={doctor.session}
            imageUrl={doctor.imageUrl}
          />
        ))}
      </div>
    );
  };
  
  export default DoctorList;
  




