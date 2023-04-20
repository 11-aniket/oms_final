import React from 'react';
import { motion } from 'framer-motion';

function ForbiddenPage() {
  const imgVariants = {
    start: {
      x: -50,
    },
    end: {
      x: 50,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-3xl font-bold text-red-500 mb-4">403 Forbidden Error</h1>
      <p className="text-xl text-gray-600 mb-8">Sorry, you don't have permission to access this page.</p>
      <motion.img
        src="https://i.pinimg.com/originals/f8/9b/06/f89b0669f209d3c98fa65c4212be669e.jpg"
        alt="403 Forbidden Error"
        className="w-50 h-50 object-contain rounded-full shadow-lg"
        variants={imgVariants}
        initial="start"
        animate="end"
      />
    </div>
  );
}

export default ForbiddenPage;
