import React from 'react';

const Card = ({ post }) => {
  return (
    <article className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow mb-6 max-w-4xl mx-auto">
      <img 
        src={post.image} 
        alt={post.title} 
        className="md:w-1/3 h-48 object-cover"
      />
      <div className="p-6 flex flex-col justify-between md:w-2/3">
        <div>
          <h2 className="text-2xl font-bold mb-2 hover:text-purple-600 cursor-pointer">{post.title}</h2>
          <p className="text-gray-700 mb-4">{post.summary}</p>
        </div>
        <footer className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</footer>
      </div>
    </article>
  );
};

export default Card;
