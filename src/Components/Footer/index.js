import React from "react";

import FooterLogo from "../FooterLogo";
import './Footer.style.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="TheMainFooter">
      <div className="theFWidth">

<div className="FGridCont">

      <div className="FSecCon">
      <div className="fLogo">
        <div className="theFProp"><FooterLogo /></div>
      </div>
      <div className="FmiddleCon">
        <div className="FmiddleSubCon">
          <div className="FDescription">
            Know Your World
          </div>
          <div className="FCopywrite">
            <span>©</span>2023. The Siren. All Rights reserved
          </div>
        </div>
      </div>
      </div>
     
      <div className="Fcontact">
        <h3>Contact</h3>
        <div>
          <span className="LocEmoji">📍</span>   #46, Miller's Road, Vasanthnagar, Bangalore.
        </div>
        <div>
          <span className="PhoneEmoji">📞</span> +91 98765 43211
        </div>
        <div className="lastFText">
          <pre><span className="MailEmoji">✉ </span> customersupport@thesiren.com</pre>
        </div>
      </div>

      <div className="FRefernce">
        <h3 className="TheFReferences">References</h3>
        <div className="TheFBollywood"><Link className="links" to={'/bollywood'}>Bollywood</Link></div>
        <div className="TheFHollywood"><Link className="links" to={'/hollywood'}>Hollywood</Link></div>
        <div className="TheFTechnology"><Link className="links" to={'/technology'}>Technology</Link></div>
        <di className="TheFFitness"><Link className="links" to={'/fitness'}>Fitness</Link></di>
        <div className="TheFFood"><Link className="links" to={'/food'}>Food</Link></div>
      </div>
      </div>
</div>
    </div>
  );
};

export default Footer;
