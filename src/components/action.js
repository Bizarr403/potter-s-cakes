import React from "react";
import "../App.css";

function Action(props) {
  return (
    <a href="/homes" className={props.class}>
      <i class="fa fa-shopping-bag" aria-hidden="true"></i> {props.Text}
    </a>
  );
}
function CTA() {
  return (
    <a href="/homes" class="cta-button">
      <i class="fa fa-shopping-bag" aria-hidden="true"></i> Shop Now
    </a>
  );
}
export default Action;
export { CTA };
