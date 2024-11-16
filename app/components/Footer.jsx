'use client';
import React from 'react';

export default function Footer () {
  return <footer className="row bg-dark text-white" data-testid="footer">
      <p className='m-0 text-center py-4'>&copy; Copyright {process.env.NEXT_PUBLIC_COPYRIGHT_YEAR}</p>
    </footer>;
}
