// Import the Pagination component from its correct location
import Pagination from '../Pagination/Pagination';

// Your Testimonial component where you want to use Pagination
import React from 'react';

const Testimonial = () => {
  return (
    <div>
      <div className="max-w-[90px] px-2 mx-auto">
      {/* Use the Pagination component */}
      <Pagination />
      </div>
      {/* Other content of your Testimonial component */}
    </div>
  );
}

export default Testimonial;
