import React from "react";
import './Carousel.css';
const slides = [
    {
      title: "Speaker-1",
      subtitle: "Sub",
      description: "descr",
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5B99Tz6R9j_kf5ksbeBsIYd9ERzzryESBh0V5TEM3KPxA1crrXVdvdABHf97LHsa81M&usqp=CAU`
    },
    {
        title: "Speaker-2",
        subtitle: "Sub",
        description: "descr",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44gb6gMDAsedQOqJylnHUYnOk25gEBN0crA&usqp=CAU"
    },
    {
        title: "Speaker-3",
        subtitle: "Sub",
        description: "descr",
        
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44gb6gMDAsedQOqJylnHUYnOk25gEBN0crA&usqp=CAU"
    },
    {
        title: "Speaker-4",
        subtitle: "Sub",
        description: "descr",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44gb6gMDAsedQOqJylnHUYnOk25gEBN0crA&usqp=CAU"
    },
    {
        title: "Speaker-5",
        subtitle: "Sub",
        description: "descr",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44gb6gMDAsedQOqJylnHUYnOk25gEBN0crA&usqp=CAU"
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
        <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
  
        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
      </div>
    );
  }
  
  export default Prevspk;