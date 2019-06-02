import React, { Component } from "react";

// class ContactCard extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="card">
//         <div className="card-body">
//           <h3>{this.props.name}</h3>
//           <p>{this.props.phone}</p>
//           <p>Email: {this.props.email}</p>
//         </div>
//       </div>
//     );
//   }
// }

// stateless function component (sfc) with destructuring of props
const ContactCard = ({ name, phone, email }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default ContactCard;
