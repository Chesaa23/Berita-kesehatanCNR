import React from 'react';
import { posts } from "../data/posts";

const Home = ({ search }) => {
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6 pt-40">
      <h1 className="text-3xl font-bold mb-8 text-center">Berita Terbaru</h1>

      <div className="space-y-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="flex flex-col md:flex-row gap-4 bg-white shadow rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full md:w-1/3 h-48 object-cover"
              />
              <div className="flex flex-col justify-between p-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
                  <p className="text-gray-600 text-sm">{post.description}</p>
                </div>
                <span className="text-xs text-gray-400 mt-4">{post.date}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Tidak ada berita ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
