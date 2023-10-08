import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({event}) => {
    console.log(event)
    return (
        
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-[284px]' src={event.icon} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">
      {event.name}

    </h2>
    <p>{event.description}</p>
    <div className="card-actions justify-end">
      
    <Link to={`productDetails/Detail/${event.name}`}>
  <button className="badge btn btn-primary badge-outline">Details</button>
</Link>
    </div>
  </div>
</div>

    );
};

export default Event;