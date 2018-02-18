/*
    Definiere die anzahl der Bilder in der
    anzahlBilder Variable. 

*/

var anzahlBilder = 8;

 function createPictures(i){
    var getPictureArea = document.getElementById('picture');
    var newPicture = document.createElement('img');
    var source =  "/Bilder/"+ i + ".jpg";
    newPicture.src = source; 
    getPictureArea.appendChild(newPicture);
    
 }



for (var i = 1; i < anzahlBilder + 1; i++){
    createPictures(i);
}



   


    
    
    
    
























 
    

