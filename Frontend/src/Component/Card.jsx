import React from 'react';

function Card({ item }) {
  return (
    <div className="mt-4 my-3">
      <div className="card bg-base-100 w-full max-w-xs mx-auto shadow-xl hover:scale-105 duration-200">
        <figure>
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline hover:text-pink-500 duration-500 cursor-pointer">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
