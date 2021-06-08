import React from "react";
import "../css/WidgetContent.css";

function WidgetContent() {
  return (
    <div className="widget__contents">

      <div className="widget__content">
        <img
          src="https://i.pinimg.com/originals/12/4f/55/124f55209dacad4cffd468e2997e1dec.jpg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>VIT officail Page</h5>
          <p>vit.ac.in</p>
        </div>
      </div>
      
      <div className="widget__content">
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Instagram</h5>
          <p>@vellore_vit</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Linkedin</h5>
          <p>Vellore Institute of Technology</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://media-exp1.licdn.com/dms/image/C510BAQF8bFyJIy3Y8Q/company-logo_200_200/0/1577858110500?e=2159024400&v=beta&t=bh1LzMYC5yB9GJQWETmpRGEzr5Qc6z9idARvPK9E3hg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>VIT Blogs</h5>
          <p>vitspot.com/posts</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="http://www.msmbainusa.com/wp-content/uploads/2014/05/credit_en.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Fully Flexible Credit System</h5>
          <p>vit.ac.in/academics/ffcs</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Vitrivieradp.png/220px-Vitrivieradp.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Rivera Culturals</h5>
          <p>vit.ac.in/general/riviera</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
