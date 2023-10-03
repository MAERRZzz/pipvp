// 1)
// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/lICfvbD.jpg"
//       alt="Aklilu Lemma"
//     />
//   );
// }

// 2)
// export default function Profile() {
//   return (
//     <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
//   )
// }


// 3)
// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/QIrZWGIs.jpg"
//       alt="Alan L. Hart"
//     />
//   );
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }

// 4)
// const Congratulations = () => {
//   return <h1>Good job!</h1>;
// }

// export default Congratulations;

// 5)
// import React from 'react';

// const person = {
//   name: 'Брендан Эйх',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name} – создатель языка программирования JS</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fueled engine</li>
//       </ul>
//     </div>
//   );
// }

// 6)
// import React from 'react';

// const person = {
//   name: 'Gregorio Y. Zara',
//   img: "https://i.imgur.com/7vQD0fPs.jpg",
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src={person.img}
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

// 7)
// import { getImageUrl } from './utils.js';

// function Avatar({ person, size }) {
//   const imgSize = size < 90 ? 's' : 'b';

//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person, imgSize)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <Avatar
//       size={40}
//       person={{ 
//         name: 'Gregorio Y. Zara', 
//         imageId: '7vQD0fP'
//       }}
//     />
//   );
// }

// 8)
// function Item({ name, isPacked }) {
//   let mark = isPacked === true ? '✔':'❌'

//   return (
//     <li className="item">
//       {name} {mark}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item 
//           isPacked={true} 
//           name="Space suit" 
//         />
//         <Item 
//           isPacked={true} 
//           name="Helmet with a golden leaf" 
//         />
//         <Item 
//           isPacked={false} 
//           name="Photo of Tam" 
//         />
//       </ul>
//     </section>
//   );
// }


// 9)
// export default function LightSwitch() {
//   function handleClick() {
//     let bodyStyle = document.body.style;
//     if (bodyStyle.backgroundColor === 'black') {
//       bodyStyle.backgroundColor = 'white';
//     } else {
//       bodyStyle.backgroundColor = 'black';
//     }
//   }

//   return (
//     <button onClick={handleClick}>
//       Toggle the lights
//     </button>
//   );
// }

// 10)
// export default function Signup() {
//   function submit(event) {
//     event.preventDefault();
//     alert('Submitting!');
//   }

//   return (
//     <form>
//       <input/>
//       <button onClick={submit}>Send</button>
//     </form>
//   );
// }

// 11)
// export default function Toolbar() {
//   function play(event) {
//     event.stopPropagation();
//     alert('Playing!');
//   }

//   function upload(event) {
//     event.stopPropagation(); 
//     alert('Uploading!');
//   }

//   function toolbar() {
//     alert('You clicked on the toolbar!');
//   }

//   return (
//     <div className="Toolbar" onClick={toolbar}>
//       <button onClick={play}>
//         Play Movie
//       </button>
//       <button onClick={upload}>
//         Upload Image
//       </button>
//     </div>
//   );
// }

// 12)
// import React, { useState } from 'react';

// export default function Form() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   function firstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }

//   function handleReset() {
//     setFirstName('');
//     setLastName('');
//   }

//   return (
//     <form onSubmit={e => e.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={firstNameChange}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <h1>Hi, {firstName} {lastName}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }

// 13)
// import { useState } from 'react';

// export default function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('');

//   if (isSent) {
//     return <h1>Thank you!</h1>;
//   } else {
//     return (
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           alert(`Sending: "${message}"`);
//           setIsSent(true);
//         }}
//       >
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <br />
//         <button type="submit">Send</button>
//       </form>
//     );
//   }
// }
