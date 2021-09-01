import React from "react";
import './Carousel.css';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';
import img7 from './7.png';
import img8 from './8.png';
import img9 from './9.png';
const slides = [
    {
      title: "Speaker-1",
      subtitle: "Sub",
      description: "descr",
      image: img1
    },
    {
        title: "Speaker-2",
        subtitle: "Sub",
        description: "descr",
        image: img2
    },
    {
        title: "Speaker-3",
        subtitle: "Sub",
        description: "descr",
        
        image: img3
    },
    {
        title: "Speaker-4",
        subtitle: "Sub",
        description: "descr",
        image: img4
    },
    {
        title: "Speaker-5",
        subtitle: "Sub",
        description: "descr",
        image: img5
    },
    {
        title: "Speaker-6",
        subtitle: "Sub",
        description: "descr",
        image: img6
    },
    {
        title: "Speaker-7",
        subtitle: "Sub",
        description: "descr",
        image: img7
    },
    {
        title: "Speaker-8",
        subtitle: "Sub",
        description: "descr",
        image: img8
    },
    {
        title: "Speaker-9",
        subtitle: "Sub",
        description: "descr",
        image: img9
    }
  ];
  
  function useTilt(active) {
    const ref = React.useRef(null);
  
    React.useEffect(() => {
      if (!ref.current || !active) {
        return;
      }
  
      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined
      };
  
      let el = ref.current;
  
      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;
  
        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };
  
      el.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);
  
    return ref;
  }
  
  const initialState = {
    slideIndex: 0
  };
  
  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
      };
    }
  };
  
  function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
  
    return (
      <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
        }}
      >
        <div
          className="slideBackground"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        />
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        >
          <div className="slideContentInner">
            <h2 className="slideTitle">{slide.title}</h2>
            <h3 className="slideSubtitle">{slide.subtitle}</h3>
            <p className="slideDescription">{slide.description}</p>
          </div>
        </div>
      </div>
    );
  }
  
  function Prevspk() {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  
    return (
      <div className="slides">
        <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>
  
        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "PREV" })}>›</button>
      </div>
    );
  }
  
  export default Prevspk;