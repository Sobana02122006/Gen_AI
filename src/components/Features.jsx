import { useState, useEffect } from "react";
import featureData from "../js/featureData";
import "../css/features.css";

function Features() {

  const [mobile, setMobile] = useState(window.innerWidth < 768);
  const [active, setActive] = useState(0);

  useEffect(() => {

    const resize = () => {
      setMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);

  }, []);

  return (

<section id="features" className="features">

<div className="container">

<h2 className="text-center mb-5">
Powerful AI Features
</h2>

{
mobile ?

<div className="accordion">

{
featureData.map((item,index)=>(

<div
className="accordion-item"
key={item.id}
>

<button

className="accordion-btn"

onClick={()=>setActive(index)}

>

{item.icon} {item.title}

</button>

{

active===index &&

<div className="accordion-content">

<p>{item.description}</p>

</div>

}

</div>

))

}

</div>

:

<div className="row">

{

featureData.map(item=>(

<div
className="col-lg-4 mb-4"
key={item.id}
>

<div className="bento-card">

<h1>{item.icon}</h1>

<h4>{item.title}</h4>

<p>{item.description}</p>

</div>

</div>

))

}

</div>

}

</div>

</section>

  );

}

export default Features;