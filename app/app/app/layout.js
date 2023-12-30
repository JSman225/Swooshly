'use client'
import '../globals.css';
import Nav from './nav';
import BottomSheet from './bottomSheet';
import React, { useState, useEffect } from 'react';

export default function AppLayout({ children }) {
  useEffect(() => {
    document.addEventListener("gesturestart", function (e) {
      e.preventDefault();
      document.body.style.zoom = 0.99;
    });

    document.addEventListener("gesturechange", function (e) {
      e.preventDefault();
      document.body.style.zoom = 0.99;
    });

    document.addEventListener("gestureend", function (e) {
      e.preventDefault();
      document.body.style.zoom = 1;
    });
  });
  return (
    <section className="bg-[#111111] w-full h-screen max-w-md rounded-top overflow-x-hidden">

      <div className="rounded-top w-full h-full" id="app">
        {children}
      </div>

      <Nav />

      <BottomSheet />
    </section>
  )
}
