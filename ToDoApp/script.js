//Butona tıkladığında işlem yapabilmesi için id alınıp öyle devam edeceğizz butona erişeceğiz.

//örnek kod
// let title = document.getElementById('title');  //  ----> burada amaç title başlığını alarak alttaki ile ulaşmak
// title.style.color = "red";
//chrome html consola gidip title.innerText vs de yazılabiir.
 
let addToDoButton =  document.getElementById('addToDo');                                    //buttona 1 kere tıklandığında ne olsun*
let toDoContainer =  document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');

addToDoButton.addEventListener('click',function(){
    let paragraph = document.createElement('p');                                 //pargraf oluştur.
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);                                      //burada div içerisine at ---->> todocontainer tarafına alt "p" elneiyor ama yazı görünmüyor.
    paragraph.innerHTML =  inputText.value;                                 //pargraf içerisindeki yazı daha sonra altta yazdığımız text kutucuk id alıp aşağıya devam ediyoruz.
    inputText.value = "";                                                 // text kutucuğunu  kursıfırla
    
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through';    
    });

    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    });

    clearToDo.addEventListener('click',function(){
       // paragraph.style.display = "none";                                                 //silmiyor sadece göstermiyor
        paragraph.remove();
    })


}) 
  