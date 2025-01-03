
function searchBooks(){
	results.className = "show";
	overlay.className = "show";
	
	var filteredData = books.filter(function (el) {
										  return el.title.indexOf(search.value)	!= -1 && search.value!=''									 
										});
									
	fill_search(filteredData);	
	
}
	
	
function fill_search(jsonData){
	results.innerHTML = "";

	for(let i=0; i<jsonData.length;i++){
	 
		let sr = document.createElement('div');
	 
		let pic = document.createElement('img');
		pic.src = "images/books/" + jsonData[i].pic[0];

		let title = document.createElement('span');
		title.innerHTML = jsonData[i].title;
		
		sr.appendChild(pic);
		sr.appendChild(title);	

		results.appendChild(sr);
	}
}		
