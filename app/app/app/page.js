'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import Nav from './nav'
import Link from 'next/link'
import Temp from './temp'

export default function Home() {
  const [tempVisible, setTempVisible] = useState(false);

  const toggleTemp = () => {
    setTempVisible(!tempVisible);
  };

  useEffect(() => {
    console.log("we got here");
    const lockScreen = () => {
      if (screen.orientation.lock) {
        screen.orientation.lock('portrait');
      } else if (screen.lockOrientation) {
        screen.lockOrientation('portrait');
      } else if (screen.mozLockOrientation) {
        screen.mozLockOrientation('portrait');
      } else if (screen.msLockOrientation) {
        screen.msLockOrientation('portrait');
      } else if (screen.orientation && screen.orientation.type === 'landscape-primary') {
        screen.orientation.lock('portrait-primary');
      } else if (screen.orientation && screen.orientation.type === 'landscape-secondary') {
        screen.orientation.lock('portrait-secondary');
      }
    }

    lockScreen();

    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

    function preventDefault(e) {
      e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
      }
    }

    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
      }));
    } catch (e) { }

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    // call this to Disable
    function disableScroll() {
      window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
      window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
      window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
      window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    // call this to Enable
    function enableScroll() {
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
      window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
      window.removeEventListener('touchmove', preventDefault, wheelOpt);
      window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    function getRandomHoldOnMessage() {
      const messages = [
        "Almost there, just a sec!",
        "Hold tight, we're on it!",
        "Patience, it's coming!",
        "Wait up, it's happening!",
        "A quick pause, be ready!",
        "Just a moment, stay tuned!",
        "Almost done, stay patient!",
        "Coming right up, stay put!",
        "On the way, one sec!",
        "Hold on, it's close!",
        "Be patient, we're fast!",
        "Nearly there, hang on!",
        "Stay tuned, it's near!",
        "Hold up, it's coming!",
        "A sec away, stay calm!",
        "Coming soon, stay ready!",
        "Be ready, it's close!",
        "Almost ready, stay excited!",
        "Stay with us, it's close!",
        "Hold on, it's here soon!"
      ];


      const randomIndex = Math.floor(Math.random() * messages.length);
      return messages[randomIndex];
    }

    const abortController = new AbortController();
    const signal = abortController.signal;




    const searchInput = document.getElementById("searchInput");
    const loading = document.getElementById('loading');
    function isBlankOrWhitespace(str) {
      return str.trim() === '';
    }

    function search() {

      var searchTerm = searchInput.value;

      if (isBlankOrWhitespace(searchTerm)) {
        searchInput.value = '';
        return;
      }


      userList.innerHTML = "";

      loading.classList.remove('hidden');
      document.getElementById('holdOnMessage').innerHTML = getRandomHoldOnMessage();


      // Create a new AbortController instance

      fetch(`/app/fetchUsers?user=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          const userList = document.getElementById("userList");
          loading.classList.add('hidden');
          if (data.length === 0) {
            // Display a message indicating no results
            const noResultsMessage = document.createElement("p");
            noResultsMessage.className = "text-white text-center py-4";
            noResultsMessage.innerText = "No results found.";
            userList.appendChild(noResultsMessage);
          }
          else {
            data.forEach(user => {
              const userDiv = document.createElement("div");
              userDiv.className = "rounded-2xl w-full h-16 flex justify-start items-center";

              const userImg = document.createElement("img");
              userImg.className = "object-cover rounded-full h-[54px] w-[54px] ml-1.5";
              userImg.src = user.profilePicture;

              const userInfoDiv = document.createElement("div");
              userInfoDiv.className = "text-white font-light ml-3";

              const userName = document.createElement("p");
              userName.className = "flex gap-1";
              userName.innerText = user.name;

              const verifiedImg = document.createElement("img");
              verifiedImg.width = 20;
              verifiedImg.height = 20;
              if (user.verified === "true") {
                verifiedImg.src = "../assets/blue_check.svg";
              } else {
                verifiedImg.classList.add('hidden');
              }

              userName.appendChild(verifiedImg);

              const userUsername = document.createElement("p");
              userUsername.className = "text-xs opacity-75";
              userUsername.innerText = user.username;

              userInfoDiv.appendChild(userName);
              userInfoDiv.appendChild(userUsername);

              userDiv.appendChild(userImg);
              userDiv.appendChild(userInfoDiv);



              userList.appendChild(userDiv);
            });
          }

        })
        .catch(error => {
          console.error("An error occurred:", error);
        });

    }
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        // Prevent the default action of the "Enter" key (e.g., form submission)
        event.preventDefault();

        search();

      }
    });

    document.getElementById('searchIcon').addEventListener("click", function (event) {

      search();

    });


    // Function to call the serverless function
    async function fetchSearchResults(query) {
      var searchTerm = query;

      if (isBlankOrWhitespace(searchTerm)) {
        searchInput.value = '';
        return;
      }

      try {
        const response = await searchUsers(searchTerm)
          .then(response => response.json())
          .then(data => {
            console.log('Search results:', data);
          });

        // Do something with the results, e.g., update UI
      } catch (error) {
        console.error('Error searching:', error);
      }
    }
    // Debounce function with immediate invocation option
    function debounce(func, delay, immediate) {
      let timeoutId;
      return function (...args) {
        const context = this;

        const later = () => {
          timeoutId = null;
          if (!immediate) {
            func.apply(context, args);
          }
        };

        const callNow = immediate && !timeoutId;

        clearTimeout(timeoutId);
        timeoutId = setTimeout(later, delay);

        if (callNow) {
          func.apply(context, args);
        }
      };
    }

    // Debounce input and call the serverless function
    const debouncedFetch = debounce(fetchSearchResults, 300);

    // Attach an event listener to the input field
    searchInput.addEventListener('input', (event) => {
      const query = event.target.value;

      // Only trigger the search when there are at least 2 letters
      if (query.length >= 2) {
        debouncedFetch(query);
      } else {
        // Clear previous search results or take other appropriate action
        // For example: clearResults();
      }
    });

    const toggleSearch = () => {
      const targetElement = document.getElementById('searchBar');
      targetElement.classList.toggle('hidden');
      const targetElement2 = document.getElementById('searchBarLarge');
      targetElement2.classList.toggle('hidden');


      const targetElement4 = document.getElementById('resultsContainer');
      targetElement4.classList.toggle('hidden');
      const targetElement3 = document.getElementById('searchContainer');
      targetElement3.classList.toggle('h-screen');
      targetElement3.classList.toggle('absolute');
      targetElement3.classList.toggle('top-0');
      targetElement3.classList.toggle('left-0');
      targetElement3.classList.toggle('max-w-md');
      targetElement3.classList.toggle('w-full');
      targetElement3.classList.toggle('bg-[#111111]');
      targetElement3.classList.toggle('z-40');

      // Focus the real input
      searchBar.focus();
      // Get a reference to the input field

      // Trigger a click event on the input field
      var clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      searchBar.dispatchEvent(clickEvent);

      // Add more classes to toggle as needed
    };

    const toggleButton2 = document.getElementById('cancelSearch');
    toggleButton2.addEventListener('click', toggleSearch);
    toggleButton2.addEventListener('click', function () {
      abortController.abort();
      loading.classList.add('hidden');
      userList.innerHTML = "";
    });
    const toggleButton = document.getElementById('searchBarLarge');
    toggleButton.addEventListener('mousedown', toggleSearch);
  }, []);

  return (
    <main class="rounded-top">
      <div id="searchContainer" className="search-container flex flex-col justify-center">
        <div className="relative mx-4 mt-2 h-full">
          <input id="searchBarLarge" type="search"
            className="apple-search-input px-3 py-2 h-[42px] text-base border border-gray-300 rounded-lg bg-gray-100 text-gray-700 w-full"
            placeholder="Search" />
          <div id="searchBar" className="hidden">
            <div className="flex items-center">
              <div className="relative flex items-center w-9/12 border h-[42px] border-gray-300 rounded-lg bg-gray-100">
                <input type="search" id="searchInput"
                  className="apple-search-input px-3 py-2 focusNone text-base bg-gray-100 rounded-lg text-gray-700 w-full"
                  placeholder="Search" />
                <svg id="searchIcon" className="w-6 h-6 mr-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <p id='cancelSearch' className="ml-5 text-white tracking-[1.5px]">Cancel</p>
            </div>

          </div>
          <div id="resultsContainer" className="w-full h-full my-5 hidden">
            <div id="loading" className="w-full hidden">
              <svg className="mx-auto" width="75" height="75" version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100"
                enableBackground="new 0 0 0 0" xmlSpace="preserve">
                <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                  <animateTransform attributeName="transform" dur="1s" type="translate"
                    values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1" />
                </circle>
                <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
                  <animateTransform attributeName="transform" dur="1s" type="translate"
                    values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2" />
                </circle>
                <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
                  <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite" begin="0.3" />
                </circle>
              </svg>
              <p className="text-center w-16 text-white" id="holdOnMessage"></p>
            </div>
            <div id="userList" className="mt-5">

            </div>
            <div id="recentListContainer">
              <p className="text-md opacity-75 text-white font-sans font-semibold">Recent searches</p>
              <div className="mt-4" id="recentList">
                <div className="rounded-2xl w-full h-16 flex justify-start items-center">
                  <img id="img" className="object-cover rounded-full h-[54px] w-[54px] ml-1.5"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" />
                  <div className="text-white font-light ml-3">
                    <p id="name" className="flex gap-1">
                      Hannah DeRios
                      <img id="verrified" width="20" height="20" src="blue_check.svg" />
                    </p>
                    <p id="username" className="text-xs opacity-75">
                      User Experience Designer
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-white opacity-75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 my-5 hidden">
        <img className="rounded-xl object-cover h-40 w-full"
          src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" />
      </div>

      <div className="mx-4 my-5 max-h-24">
        <img className="object-cover w-full border-2 border-white/10 rounded-2xl" src="https://i.ibb.co/TgCdFJV/banner.png" />
      </div>
      <div className="ml-4 my-5 flex gap-4 overflow-x-scroll no-scrollbar">
        <div className="w-20 h-20 min-w-[80px]">
          <img onTouchStart={() => setTimeout(() => { toggleTemp() }, 350)} draggable="false" className="w-full h-full rounded-full object-cover active:scale-95 active:opacity-75 transition-all ease-in-out"
            src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=444&q=80" />
        </div>
        <Link href="/app/start">
          <div className="w-20 h-20 min-w-[80px]">
            <img className="w-full h-full rounded-full object-cover"
              src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=444&q=80" />
          </div>
        </Link>
        <div className="w-20 h-20 min-w-[80px]">
          <img className="w-full h-full rounded-full object-cover"
            src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=444&q=80" />
        </div>
        <div className="w-20 h-20 min-w-[80px]">
          <img className="w-full h-full rounded-full object-cover"
            src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=444&q=80" />
        </div>
        <div className="w-20 h-20 min-w-[80px]">
          <img className="w-full h-full rounded-full object-cover"
            src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=444&q=80" />
        </div>
        <div className="w-20 h-20 min-w-[80px]">
          <img className="w-full h-full rounded-full object-cover"
            src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=444&q=80" />
        </div>
      </div>

      <div className="mx-4 my-5 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-[10px]" style={{ gridAutoRows: '188px' }}>
        <div className="relative bg-gray-500 rounded-[14px] max-w-[188px] row-span-2">
          <div className="absolute inset-0 flex items-center justify-center">
            <img className="object-cover h-full w-full rounded-[14px]" src="https://i.ibb.co/XtmjDMB/image-2-4.png" />
          </div>
          <div className="absolute inset-0 rounded-[14px] shadow-inner"></div>
          <div className="absolute bottom-[12px] left-[12px] h-[46px]">
            <div className="flex justify-start items-center">
              <img className="object-cover h-8 w-8 rounded-full shadow-2xl" src="https://i.ibb.co/XtmjDMB/image-2-4.png" />
              <span className="ml-[6px] text-xs text-white">Ava Reynolds</span>
            </div>
            <p className="text-[10px] opacity-75 text-white">@avareynolds • 2 hours ago</p>
          </div>
        </div>


        <div className="relative bg-gray-500 rounded-[14px] max-w-[188px] row-span-1">
          <div className="absolute inset-0 flex items-center justify-center">
            <img className="object-cover h-full w-full rounded-[14px]" src="https://i.ibb.co/XtmjDMB/image-2-4.png" />
          </div>
          <div className="absolute inset-0 rounded-[14px] shadow-inner"></div>
          <div className="absolute bottom-[12px] left-[12px] h-[46px]">
            <div className="flex justify-start items-center">
              <img className="object-cover h-8 w-8 rounded-full shadow-2xl" src="https://i.ibb.co/XtmjDMB/image-2-4.png" />
              <span className="ml-[6px] text-xs text-white">Ava Reynolds</span>
            </div>
            <p className="text-[10px] opacity-75 text-white">@avareynolds • 2 hours ago</p>
          </div>
        </div>
        <div className="relative bg-gray-500 rounded-[14px] max-w-[188px] row-span-2">
          <div className="absolute inset-0 flex items-center justify-center">
            <img className="object-cover h-full w-full rounded-[14px]" src="https://i.ibb.co/XtmjDMB/image-2-4.png" />
          </div>
          <div className="absolute inset-0 rounded-[14px] shadow-inner"></div>
          <div className="absolute bottom-[12px] left-[12px] h-[46px]">
            <div className="flex justify-start items-center">
              <img className="object-cover h-8 w-8 rounded-full shadow-2xl" src="https://i.ibb.co/XtmjDMB/image-2-4.png" />
              <span className="ml-[6px] text-xs text-white">Ava Reynolds</span>
            </div>
            <p className="text-[10px] opacity-75 text-white">@avareynolds • 2 hours ago</p>
          </div>
        </div>
        <div className="relative bg-gray-500 rounded-[14px] max-w-[188px] row-span-1">
          <div className="absolute inset-0 flex items-center justify-center">
            <img className="object-cover h-full w-full rounded-[14px]" src="https://i.ibb.co/XtmjDMB/image-2-4.png" />
          </div>
          <div className="absolute inset-0 rounded-[14px] shadow-inner"></div>
          <div className="absolute bottom-[12px] left-[12px] h-[46px]">
            <div className="flex justify-start items-center">
              <img className="object-cover h-8 w-8 rounded-full shadow-2xl" src="https://i.ibb.co/XtmjDMB/image-2-4.png" />
              <span className="ml-[6px] text-xs text-white">Ava Reynolds</span>
            </div>
            <p className="text-[10px] opacity-75 text-white">@avareynolds • 2 hours ago</p>
          </div>
        </div>
      </div>

      <Temp visible={tempVisible} onClose={toggleTemp} />

    </main>



  )
}



