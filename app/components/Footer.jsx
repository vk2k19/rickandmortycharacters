'use client';
import React from 'react';

export default function Footer () {
  return <>
    <footer className="row" data-testid="footer"><p>&copy; Copyright {process.env.NEXT_PUBLIC_COPYRIGHT_YEAR}</p></footer>
    <style jsx>{
      `footer {
        background: #222;
        color: #fff;
        padding: 2rem 0 1rem 0;
        text-align: center;
      }`
    }</style>
  </>;
}
