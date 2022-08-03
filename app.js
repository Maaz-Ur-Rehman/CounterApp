let saveBtn=document.getElementById("save-btn")
var countEl=document.getElementById("count-el");
let saveEl=document.getElementById("save-el")
let count=0;
saveBtn.disabled=true

function increment(){
    count+=1;
    countEl.textContent=count
    saveBtn.disabled=false

}
function save(){ 
    
    let countStr= " " + count + " - "
    saveEl.textContent+=countStr
    countEl.textContent=0;
    count=0
    saveBtn.disabled=true
    
    
       


}