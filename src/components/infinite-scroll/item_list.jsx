import React, {useEffect} from "react";
import ElementItem from "./item";

const getElement = (count) => {
  let arr = [];

  for (var i=0; i<count; i++) {
    arr.push({
      id: i
    })
  }

  return arr;
}

const callback = function (entries) {
  console.log("callback called");
  entries.forEach(entry => {
    console.log("entry", entry)
  })
}
const ItemList = () => {

  useEffect(function () {
    let options = {
      // root: null,
      rootMargin: "-50% 0% 0% 0%",
      threshold: 0
    }
    
    let observer = new IntersectionObserver(callback, options);
    let target =document.querySelector('#scrollArea');
    observer.observe(target);
  }, [])
  let array_list = getElement(10);

  

  return (
    <div id="scrollArea">
      {
        array_list.map((item, index)=> <ElementItem item_value={item.id} key={index}/>)
      }
    </div>
  );
}
export default ItemList;
