const a = document.querySelectorAll(".colorBg");
a.forEach((item,index) => {
    const indexItem=Math.floor(index/6)
  item.addEventListener("click", (e) => {
      renderPicture(e.target.attributes.style.nodeValue,e.target.dataset.name,indexItem);

  });
});

const renderPicture = (color,name,index) => {
    if(document.getElementById(`row${index}`).childElementCount!=0)
    {
        document.getElementById(`row${index}`).innerText=''
    }
    document.getElementById(`row${index}`).innerHTML += `
    <div class="d-flex justify-content-between palette" >
        <div class="picture " style='background-image: url(./assets/img/hinoColor/ddxe01.png);${color}'>
        </div>
        
        <div class="picColor" style='${color}'>
            <h4>${name}</h4>
        </div>
    </div>
    `;
};

const clearPicture =() => {
    console.log(document.querySelectorAll('.palette'))
}

// const setlocal = (color) => {
    
//     localStorage.setItem('color', color);
// }

// const checkLocal = () => {
//     const data = localStorage.getItem('color');
//     if(data)
//     {
//         localStorage.removeItem('color');
//     }
// }