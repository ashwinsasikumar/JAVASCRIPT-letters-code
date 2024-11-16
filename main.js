const c=document.getElementById("tbox");
c.addEventListener("input",function(){
    let v=c.value;
    const count=v.length
    document.getElementById("ans").textContent=count;
    document.getElementById("rem").textContent=50-count;
});
