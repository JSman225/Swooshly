'use client'
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.addEventListener('contextmenu', function (event) {
      if (event.target.tagName === 'IMG') {
        event.preventDefault();
      }
    });
    document.querySelectorAll('.swipe-container').forEach(container => {
      let touchStartX = 0;
      let touchEndX = 0;

      container.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
      });

      container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe(container, touchStartX, touchEndX);
      });
    });

    function handleSwipe(container, start, end) {
      const minDistance = 80;
      const swipeDistance = start - end;

      if (swipeDistance > minDistance) {
        // Animate the swipe container to slide all the way to the right
        container.style.transition = 'transform 0.3s ease-in-out';
        container.style.transform = `translateX(-${container.clientWidth}px)`;

        // Remove the swipe container after the animation completes
        setTimeout(() => {
          container.style.display = 'none';
        }, 300); // Adjust the delay as needed to match the animation duration
      }
    }
  }, []);

  return (
    <main>
      <div className="mx-4 my-5">
        <h1 className="text-white text-4xl font-sans">Notifications</h1>
      </div>
      <div className="flex flex-col justify-center mx-4 h-full">
        <div id="recentListContainer">
          <p className="text-lg opacity-75 font-sans text-white font-semibold">Unread</p>
          <div className="mt-4" id="recentList">
            <div
              className="w-full h-20 mb-3 last:mb-0 swipe-container overflow-x-scroll flex">
              <div className="rounded-l-2xl min-w-full swipe-element snap-start flex justify-start items-center">
                <img id="img" className="object-cover rounded-xl h-16 w-16 ml-1.5"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                <div className="text-white font-light ml-3">
                  <p id="name" className="flex gap-1 mb-1">
                    Lauren Roberts
                  </p>
                  <p id="username" className="text-xs opacity-75 max-w-[14rem] line-clamp-2">
                    Et ad aliquip labore enim ipsum irure dolore ea. Dolor sint minim commodo mollit aliqua
                    cillum
                    laborum velit nostrud. Irure proident adipisicing sunt ullamco proident dolor id sint ea. Ad
                    consequat in ullamco tempor reprehenderit do fugiat excepteur et tempor. Esse id anim sint
                    dolor. Irure nisi in exercitation ut voluptate quis ad in sit est incididunt. Elit sint esse
                    cupidatat nisi.
                  </p>
                </div>
              </div>
              <div className="rounded-r-2xl min-w-[20%] flex items-center justify-end bg-red-500 text-white relative">
                <svg className="w-7 h-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </div>
            </div>


            <div
              className="w-full h-20 mb-3 last:mb-0 swipe-container overflow-x-scroll flex">
              <div className="rounded-l-2xl min-w-full swipe-element snap-start flex justify-start items-center">
                <img id="img" className="object-cover rounded-xl h-16 w-16 ml-1.5"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                <div className="text-white font-light ml-3">
                  <p id="name" className="flex gap-1 mb-1">
                    Lauren Roberts
                  </p>
                  <p id="username" className="text-xs opacity-75 max-w-[14rem] line-clamp-2">
                    Et ad aliquip labore enim ipsum irure dolore ea. Dolor sint minim commodo mollit aliqua
                    cillum
                    laborum velit nostrud. Irure proident adipisicing sunt ullamco proident dolor id sint ea. Ad
                    consequat in ullamco tempor reprehenderit do fugiat excepteur et tempor. Esse id anim sint
                    dolor. Irure nisi in exercitation ut voluptate quis ad in sit est incididunt. Elit sint esse
                    cupidatat nisi.
                  </p>
                </div>
              </div>
              <div className="rounded-r-2xl min-w-[20%] flex items-center justify-end bg-red-500 text-white relative">
                <svg className="w-7 h-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </div>
            </div>

            <div
              className="w-full h-20 mb-3 last:mb-0 swipe-container overflow-x-scroll flex">
              <div className="rounded-l-2xl min-w-full swipe-element snap-start flex justify-start items-center">
                <img id="img" className="object-cover rounded-xl h-16 w-16 ml-1.5"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                <div className="text-white font-light ml-3">
                  <p id="name" className="flex gap-1 mb-1">
                    Lauren Roberts
                  </p>
                  <p id="username" className="text-xs opacity-75 max-w-[14rem] line-clamp-2">
                    Et ad aliquip labore enim ipsum irure dolore ea. Dolor sint minim commodo mollit aliqua
                    cillum
                    laborum velit nostrud. Irure proident adipisicing sunt ullamco proident dolor id sint ea. Ad
                    consequat in ullamco tempor reprehenderit do fugiat excepteur et tempor. Esse id anim sint
                    dolor. Irure nisi in exercitation ut voluptate quis ad in sit est incididunt. Elit sint esse
                    cupidatat nisi.
                  </p>
                </div>
              </div>
              <div className="rounded-r-2xl min-w-[20%] flex items-center justify-end bg-red-500 text-white relative">
                <svg className="w-7 h-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>



  )
}



