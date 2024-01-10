'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import Nav from './components/nav'
import Link from 'next/link'
import Temp from './temp'
import SearchBar from './components/searchBar';
import FollowingBar from './components/followingBar';
import StoriesGrid from './components/storiesGrid';

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

    function search() {

      var searchTerm = searchInput.value;


      loading.classList.remove('hidden');
      document.getElementById('holdOnMessage').innerHTML = getRandomHoldOnMessage();


      // Create a new AbortController instance

      fetch(`/app/fetchUsers?user=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
          searchResultsContent = data.results;
          console.log(searchResultsContent);
          const userList = document.getElementById("userList");
          loading.classList.add('hidden');

        })
        .catch(error => {
          console.error("An error occurred:", error);
        });

    }
    /*
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
*/

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
    /*
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
    */
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
    /*
        const toggleButton2 = document.getElementById('cancelSearch');
        toggleButton2.addEventListener('click', toggleSearch);
        toggleButton2.addEventListener('click', function () {
          abortController.abort();
          loading.classList.add('hidden');
          userList.innerHTML = "";
        });
        const toggleButton = document.getElementById('searchBarLarge');
        toggleButton.addEventListener('mousedown', toggleSearch);
        */
  }, []);

  return (
    <main className="rounded-top">
      <SearchBar />

      <div className="mx-3 my-5 max-h-24">
        <img className="object-cover w-full ring-2 ring-white/10 rounded-2xl" src="https://i.ibb.co/hyN5SP0/Deltasoft-ai-2.png" />
      </div>

      <FollowingBar />

      <StoriesGrid />

      <Temp visible={tempVisible} onClose={toggleTemp} />

    </main>



  )
}



