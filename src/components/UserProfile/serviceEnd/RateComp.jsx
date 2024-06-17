import React, {  useRef, useEffect } from "react";


const RateComp = ({ stars, setStars, sentence }) => {
    const avisRef = useRef();


    useEffect(() => { 
      switch (stars) { 
        case 1:
          avisRef.current.innerText = "bad";
          break;
        case 2:
          avisRef.current.innerText = "not bad";
          break;
        case 3:
          avisRef.current.innerText = "good";
          break;
        case 4:
          avisRef.current.innerText = "very good";
          break;
        case 5:
          avisRef.current.innerText = "exelent";
          break;
        default:
          avisRef.current.innerText = "your feedback is annoomous";
          break;
      }
    }, [stars]);
    
    const rate = (rate) => { 
        setStars(rate);
    }


  return (
    <div className="flex flex-col items-center">
      <p className="text-darkGreen4 font-[600] flex flex-col items-center font-poppins">
        {sentence}
      </p>
      <div className="rating">
        <input value="5" name="rate" id="star5" type="radio" onClick={()=> rate(5)}/>
        <label title="text" htmlFor="star5"></label>
        <input value="4" name="rate" id="star4" type="radio" onClick={()=> rate(4)}/>
        <label title="text" htmlFor="star4"></label>
        <input value="3" name="rate" id="star3" type="radio" onClick={()=> rate(3)}/>
        <label title="text" htmlFor="star3"></label>
        <input value="2" name="rate" id="star2" type="radio" onClick={()=> rate(2)}/>
        <label title="text" htmlFor="star2"></label>
        <input value="1" name="rate" id="star1" type="radio" onClick={()=> rate(1)}/>
        <label title="text" htmlFor="star1"></label>
      </div>
          
      <div className="avis font-poppins text-sm text-writingGrey" ref={avisRef}>
        your feedback is annoomous
      </div>

    </div>
  );
};

export default RateComp;
