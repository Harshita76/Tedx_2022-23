import React, { useState, useEffect } from "react";
import "./Rules.css"
export default function Rules() {
    const [current, setCurrent]=useState({activeNav:{heading:"About TED", id:1, desc:"TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; the Open Translation Project, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established the annual TED Prize, where exceptional individuals with a wish to change the world get help translating their wishes into action; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities."},
        options:[
            {heading:"About TED", id:1, desc:"TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; the Open Translation Project, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established the annual TED Prize, where exceptional individuals with a wish to change the world get help translating their wishes into action; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities."},
            {heading:"About TEDx", id:2, desc:"In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)"},
            {heading:"About TEDxBITSHyderabad", id:3, desc:'TEDx BITS Hyderabad presents its 6th edition of a TEDx conference on 9th February, 2020. The theme of this year’s event is "Unaltered Through Time" and we will have 8 speakers from all facets of life would share their experiences within the span of 18minutes. The event would be set with the purpose of building a community with other attendees and networking with the speakers.'}
        ]});
    useEffect(()=>{
        setCurrent({...current,activeNav:current.options[0]});
    },[]);
    const setActiveNav=(i)=>{
        setCurrent({...current,activeNav:current.options[i]})
    }
    return (
        <>
            <div className="rules-outer">
            <div className="rules-container">
                <div className="rules-headings">
                    {current.options.map((heading,index)=>{
                        return(
                            <div key={heading.id} className={
                                heading.id===current.activeNav.id?"rules-heading rules-active":"rules-heading" }
                            onClick={()=>setActiveNav(index)}>{heading.heading}</div>
                        )
                    })}
                </div>
                <div className="rules-descriptions">
                    {current.options.map(desc=>{
                       {if (desc.id===current.activeNav.id)
                        return(
                            <div className="rules-description">{desc.desc}</div>
                       ) 
                    }})}
                </div>
            </div>
            </div>
        </>
    )
}