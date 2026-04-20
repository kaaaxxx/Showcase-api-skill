// import { useState, useEffect } from "react";

// function InfoList() {
//   const [info, setInfo] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => {
//         setInfo(data);
//       });
//   }, []);

//   return (
//     <>
//       <div className="card">
//         {info.map((item) => (
//           <div key={item.id} className="post-container">
//             {/* <h1 className="heading-1">{item.userId}</h1> */}
//             <h1 className="heading-2">{item.title}</h1>
//             <p className="para-1">{item.body}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
// export default InfoList;




import { useState, useEffect } from "react";

function InfoList() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=12") // Limited for better grid look
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <div className="bento-container">
      <h1 className="title">Activity Feed</h1>
      <div className="bento-grid">
        {info.map((item, index) => {
          // Logic to make every 4th item wide and every 7th item tall
          const sizeClass = index % 4 === 0 ? "wide" : index % 7 === 0 ? "tall" : "small";
          
          return (
            <div key={item.id} className={`bento-card ${sizeClass}`}>
              <span className="badge">ID: {item.id}</span>
              <h3>{item.title.substring(0, 25)}...</h3>
              <p>{item.body.substring(0, 60)}...</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InfoList;