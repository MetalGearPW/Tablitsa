  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getDatabase, onValue, push, ref, remove } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD9GxUMwEVcdMxG3kIAvNTlAYp_pptoZ0Y",
    authDomain: "tablitsas.firebaseapp.com",
    databaseURL: "https://tablitsas-default-rtdb.firebaseio.com",
    projectId: "tablitsas",
    storageBucket: "tablitsas.appspot.com",
    messagingSenderId: "964386277909",
    appId: "1:964386277909:web:2a28f6afe23c8f8cda5c1c"
  };
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  const refdb = ref(db,"Ученики");
  const inputlnm = document.querySelectorAll("input")[0];
  const inputlsn = document.querySelectorAll("input")[1];
  const inputlmn = document.querySelectorAll("input")[2];
  const inputlsf = document.querySelectorAll("input")[3];
  const inputltn = document.querySelectorAll("input")[4];
  const inputltns = document.querySelectorAll("input")[5];
  const inputddss = document.querySelectorAll("input")[6];
  const ull = document.querySelector("#tr")

  document.querySelectorAll("button")[1].addEventListener("click", ()=> {

    if(inputlnm.value=="" || inputlsf.value=="" || inputlsn.value==""  || inputlmn.value==""  || inputltn.value=="" || inputltns.value==""){
      inputlnm.style.border="2px solid red"
      inputlsf.style.border="2px solid red"
      inputlsn.style.border="2px solid red"
      inputlmn.style.border="2px solid red"
      inputltn.style.border="2px solid red"
      inputltns.style.border="2px solid red"
      inputddss.style.border="2px solid red"
      console.log(1)
    }
    else{
      inputlnm.style.border="2px solid transparent"
      inputlsf.style.border="2px solid transparent"
      inputlsn.style.border="2px solid transparent"
      inputlmn.style.border="2px solid transparent"
      inputltn.style.border="2px solid transparent"
      inputltns.style.border="2px solid transparent"
      inputddss.style.border="2px solid transparent"

      
      push(refdb,{
        name: inputlnm.value,
        surname: inputlsn.value,
        number: inputlmn.value,
        snumber: inputlsf.value,
        telnumber: inputltn.value,
        telnumbers: inputltns.value,
        address: inputddss.value,
       
      });console.log(0)
      inputlnm.value=""
      inputlsn.value=""
      inputlmn.value=""
      inputlsf.value=""
      inputltn.value=""
      inputltns.value=""
      inputddss.value=""
    } 
})
  onValue(refdb,(a)=> {
  document.querySelector("#tr").innerHTML = '';
  let show = Object.entries(a.val())
  for(let i=0;i <show.length;i++){
    let showid = show[i]
    qwe (showid)

  }})
  
  function qwe (q){
  let showvalue = q[0] 
  let shown = q[1];
  ull.innerHTML += `
  <tr>
  <td data-led="${shown.name}" class="tds">${shown.name}</td>
  <td class="tds">${shown.surname}</td>
  <td class="tds">${shown.number}</td>
  <td class="tds">${shown.snumber}</td>
  <td class="tds">${shown.telnumber}</td>
  <td class="tds">${shown.telnumbers}</td>
  <td class="tds">${shown.address}</td>
  <td><i data-led="${shown.name}" data-sur="${shown.surname}" data-num="${shown.number}" data-snum="${shown.snumber}" data-tel="${shown.telnumber}" data-tels="${shown.telnumbers}" data-del="${showvalue}" data-ads="${shown.address}" class="fa-solid minus fa-user-minus"/></td>
  </tr>`;}

  document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-user-minus")){
      let delt =e.target.getAttribute("data-del");
      // console.log(delt)
      remove(ref(db,`Ученики/${delt}`)) 
      // get(refdb,(r)=> {
        let nm =e.target.getAttribute("data-led");
        let sur =e.target.getAttribute("data-sur");
        let num =e.target.getAttribute("data-num");
        let snum =e.target.getAttribute("data-snum");
        let tel =e.target.getAttribute("data-tel");
        let tels =e.target.getAttribute("data-tels");
        let ads =e.target.getAttribute("data-ads")
      // console.log(nm)
      // console.log(sur)
      // console.log(num)
      // console.log(snum)
      // console.log(tel)
      // console.log(tels)
      push(ref(db,`Архив`),{
        name: nm,
        surname: sur,
        number: num,
        snumber: snum,
        telnumber: tel,
        telnumbers: tels,
        address: ads,
      })
    }
    else{
      // console.log(0)
    }
     
  })
  
  // document.addEventListener("click",(e)=>{
  //   if(e.target.classList.contains("fa-user-plus")){
  //     let delt =e.target.getAttribute("data-del");
  //     console.log(delt)
  //     push(ref(db,`Архив/`),)
  //   }
  //   else{
  //     console.log(0)
  //   }
  // })
  
    
  // document.querySelector("input").addEventListener(()=> {
  //   set(refdb,{

  //   })
  // })
  // document.querySelectorAll("button")[1].addEventListener("click", ()=> {
  //   remove(refdb)
  // })
  // document.querySelectorAll("button")[2].addEventListener("click", ()=> {
  //   update(refdb,{
  //       name: 2222
  //   })
  // })
  // document.querySelectorAll("button")[3].addEventListener("dblclick", ()=> {
  //   document.querySelector("ul").innerHTML = "";
  //   push(refdb,"islam")
  // })