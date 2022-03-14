import React from "react";
import "./termandcond.css";

function RefundPolicy() {
	return (
		<div className="outer">
			<h2 className="heading" style={{color:"red"}}>Refund Policy</h2>
      <div style={{display:"flex", flexDirection:"column", alignItems:"start", fontSize:"20px"}}>
			<div>1. There is no refund or cancellation of the tickets allowed.</div>
			<div>2. Tickets once sold cant be refunded.</div>
			<div>3. The tickets are not transferable. </div>
      </div>
		</div>
	);
}

export default RefundPolicy;
