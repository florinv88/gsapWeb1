import { useEffect } from "react";
import gsap from 'gsap';

import Banner from "./components/Banner";
import Cases from "./components/Cases";
import Header from "./components/Header";
import IntroOverlay from "./components/IntroOverlay";

function App() {



  useEffect(() => {

    // UseEffect : to don't have any errors on mobile devices 
    // the vh on mobile devices includes the menu bar / the link from the top etcc
    // see more here about it : https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    //prevents the flashing
    gsap.to("body", { css: { visibility: "visible" }, duration: 0 })

    //timeline
    const tl = gsap.timeline();

    tl.fromTo('.line span', {
      y: 100,
      skewY: 7,
      ease: "power4.out",
    }, {
      y: 0,
      duration: 2,
      delay: 1,
      skewY: 0,
      stagger: {
        amount: 0.3   //the delay for the second item who is a span in .line class
      }

    })

    tl.to('.overlay-top', {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4,
      duration: 1.6
    })

    tl.to('.overlay-bottom', {
      width: 0,
      ease: 'expo.inOut',
      duration: 1.6,
      delay: -0.8,
      stagger: 0.4
    })

    tl.to('.intro-overlay', {
      css: { display: "none" }
    })



  }, [])

  return (
    <div>

      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
