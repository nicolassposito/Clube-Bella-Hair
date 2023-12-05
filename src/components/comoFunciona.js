import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import $ from "jquery"
import { useEffect } from "react";


function ComoFunciona() {
useEffect(() => {
   $('.accord1 li p').click(function(){
    $(this).next(".accord-content").slideToggle();
});
  })
  return(
    <div className='p-6 bg-neutral-800'>
        <div className='container mx-auto'>
        <div className="accord1">
    <ul>
      <li>
        <p>Accord 1</p>
        <div className="accord-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </div>
      </li>
      <li>
        <p>Accord 2</p>
        <div className="accord-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </div>
      </li>
      <li>
        <p>Accord 3</p>
        <div className="accord-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </div>
      </li>
      
    </ul>
  </div>
        </div>
    </div>
  );
}

export default ComoFunciona;