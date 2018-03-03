/*

    TODO: 

    Definiere die anzahl der Bilder in der
    anzahlBilder Variable. 

    Gib den Bildern eine überschrifft mit der createHeadline
    Funktion.
*/

var anzahlBilder = 8;

/*
    Macht die Bilder sichtbar.
*/
 function createPictures(i) {
    var getPictureArea = document.getElementById('picture');
    var newPicture = document.createElement('img');
    var source =  "Bilder/"+ i + ".jpg";
    newPicture.src = source;
    getPictureArea.appendChild(newPicture);
    newPicture.onclick = function NewWindow() {
        window.open(source);
        
    };
   
 }

/*
 * For schleife führt die Funktion createPictures i mal aus.
 */

for (var i = 1; i < anzahlBilder + 1; i++){
    createPictures(i);
}

/*
 * Gibt  deinen Bildern eine Überschrift.
 */

function createHeadline(headline) {
    var getHeadlineArea = document.getElementById('headline');
    var writeHeadline = document.createElement('h1');
    writeHeadline.innerHTML = headline;
    getHeadlineArea.appendChild(writeHeadline);
}

/*
 * Überschrift in " " eintragen.
 */
createHeadline("Beispiel Headline");

/*
 * Wenn der Button gedrückt ist Drucke die Seite aus.
 */
function printWindow() {
    window.print();
}



   


    
    
    
    
























 
    

