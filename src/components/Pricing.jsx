// src/pages/Pricing.jsx
import React from 'react';

const Pricing = () => {
  return (
    <div className="max-w-4xl mx-auto mt-24 p-6">
      <h1 className="text-4xl font-bold mb-6">Pricing</h1>
      <p className="text-lg leading-relaxed mb-4">
        Our pricing is transparent and affordable to ensure you get the best care without worries.
      </p>
      <table className="w-full text-left border-collapse border border-gray-300">
        <thead>
          <tr className="bg-purple-200">
            <th className="border border-gray-300 px-4 py-2">Service</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">General Consultation</td>
            <td className="border border-gray-300 px-4 py-2">$50</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Pediatric Check-up</td>
            <td className="border border-gray-300 px-4 py-2">$40</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Dental Cleaning</td>
            <td className="border border-gray-300 px-4 py-2">$70</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Vaccination</td>
            <td className="border border-gray-300 px-4 py-2">$30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;
