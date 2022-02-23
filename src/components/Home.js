import React from 'react';
import Common from './Common';
import web from "../img/img2.svg";

function Home() {
  return(
    <>
      <Common title="Hello, My Name Is" brand="Rakesh Saha" subtitle="And I'm a Wev Developer / Web Designer" src={web} />
    </>
  )
}
export default Home;