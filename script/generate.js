
/*  dynamic generation  */

function generateBookItems(holderID,jsonDataItem){

          //alert(products[i].fname);

          let it = document.createElement('div')
          it.className = "items";
		  
		  it.addEventListener("click", function(){showDetail(jsonDataItem.id)}); 
		  
          let pic = document.createElement('img');
          pic.src = "images/books/" + jsonDataItem.pic[0];

          it.appendChild(pic);

          let info = document.createElement('div')
          info.className = "info";

          let title = document.createElement('h2');
          title.innerHTML = jsonDataItem.title;
		  
          let wr = document.createElement('span');
          wr.className = "writer";	
		  var bookWriter = writers.find(el=> el.id == jsonDataItem.writer);
          wr.innerHTML = bookWriter.fname;		  

          let star = document.createElement('span');
          star.className = "star";
          star.style.width =  jsonDataItem.star * 18 + "px";

          let par = document.createElement('p');
          par.innerHTML = jsonDataItem.describe;

		  let price = document.createElement('span');
          price.className = "price";
          price.innerHTML = jsonDataItem.price + " ریال";
        

          info.appendChild(title);
          info.appendChild(wr);
          info.appendChild(star);
          info.appendChild(par);	
          info.appendChild(price);	
		  
		  it.appendChild(pic);
		  it.appendChild(info);		  
		  
		  
		  if(jsonDataItem.off > 0){
		  
		    let offLab = document.createElement('span');
			offLab.className = "offLable";
			offLab.innerHTML = jsonDataItem.off + "%";
			it.appendChild(offLab);	
			
		    let priceOff = document.createElement('i');
			priceOff.innerHTML = jsonDataItem.price*(100-jsonDataItem.off) + " ریال";
			price.appendChild(priceOff);
		  }
		  
		  document.getElementById(holderID).appendChild(it);	
}

function fillWithBooks(holderID,jsonData){
    document.getElementById(holderID).innerHTML = "";

	for(let i=0; i<jsonData.length;i++){
	  generateBookItems(holderID,jsonData[i]);
	}
}