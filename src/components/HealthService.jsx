// src/pages/HealthService.jsx
import React from 'react';

const HealthService = () => {
  return (
    <div className="max-w-4xl mx-auto mt-24 p-6">
      <h1 className="text-4xl font-bold mb-6">Health Services</h1>
      <p className="text-lg leading-relaxed mb-4">
        We offer a wide range of health services designed to meet your needs, from general consultations to specialized care.
      </p>
      <ul className="list-disc list-inside">
        <li>General Check-ups</li>
        <li>Pediatric Care</li>
        <li>Dental Services</li>
        <li>Laboratory Testing</li>
        <li>Vaccinations</li>
      </ul>
    </div>
  );
};

export default HealthService;
