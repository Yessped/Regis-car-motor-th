javascript:(function(){
  const DATA={
    bodynumber:"ME4JK0140R1234567",
    tel:"0901112222",
    brand:"HONDA",
    plate_number:"1234"
  };    

  function setValue(s,v){
    let el=document.querySelector(s);
    if(el){
      el.value=v;
      el.dispatchEvent(new Event("input",{bubbles:true}));
      el.dispatchEvent(new Event("change",{bubbles:true}));
    }
  }
  
  function setSelect(s,v){
    let el=document.querySelector(s);
    if(el){
      el.value=v;
      el.dispatchEvent(new Event("change",{bubbles:true}));
    }
  }

  setValue("#r_bodynumber",DATA.bodynumber);
  setValue("#r_tel",DATA.tel);
  setSelect("#r_brand",DATA.brand);
  setValue("#number",DATA.plate_number);

})();
