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
const refdb = ref(db,"Архив");
const ull = document.querySelector("#tr")

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
<td><i data-led="${shown.name}" data-sur="${shown.surname}" data-num="${shown.number}" data-snum="${shown.snumber}" data-tel="${shown.telnumber}" data-tels="${shown.telnumbers}" data-del="${showvalue}" data-ads="${shown.address}" class="fa-solid plus fa-user-plus"/></td>
<td><i data-led="${shown.name}" data-sur="${shown.surname}" data-num="${shown.number}" data-snum="${shown.snumber}" data-tel="${shown.telnumber}" data-tels="${shown.telnumbers}" data-del="${showvalue}" data-ads="${shown.address}" class="fa-solid slash fa-user-slash"></i></td>
</tr>`;}

document.addEventListener("click",(e)=>{
  if(e.target.classList.contains("fa-user-plus")){
    let delt =e.target.getAttribute("data-del");
    remove(ref(db,`Архив/${delt}`)) 
      let nm =e.target.getAttribute("data-led");
      let sur =e.target.getAttribute("data-sur");
      let num =e.target.getAttribute("data-num");
      let snum =e.target.getAttribute("data-snum");
      let tel =e.target.getAttribute("data-tel");
      let tels =e.target.getAttribute("data-tels");
      let ads =e.target.getAttribute("data-ads")

    push(ref(db,`Ученики`),{
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
    console.log(0)
  }   
})


document.addEventListener("click",(e)=>{

  if(e.target.classList.contains("fa-user-slash")){
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Уверены что хотите удалить?",
  icon: "info",
  showCancelButton: true,
  confirmButtonText: "Удалить",
  cancelButtonText: "Отмена",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    
    let delt =e.target.getAttribute("data-del");
    remove(ref(db,`Архив/${delt}`)) 
  }
  else{
    console.log(0)
  }   
  
});
} 
})