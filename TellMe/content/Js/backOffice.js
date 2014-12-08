// JavaScript source code
var imgDefault = "productos/default_product.png"
//Set FireBase
var ref = new Firebase("https://electro927.firebaseio.com/");
var Productosref = new Firebase("https://electro927.firebaseio.com/Productos");

var product1 = Productosref.child("product1");
var product2 = Productosref.child("product2");
var product3 = Productosref.child("product3");
var product4 = Productosref.child("product4");
var product5 = Productosref.child("product5");
var product6 = Productosref.child("product6");
var product7 = Productosref.child("product7");
var product8 = Productosref.child("product8");
var product9 = Productosref.child("product9");

//names

product1.child("Nombre").on("value", function(snapshot) {
  //alert(snapshot.val());  
     var product1Name = snapshot.val();
     $("#producto1 h1").html(product1Name);
    
});
product2.child("Nombre").on("value", function(snapshot) {
  //alert(snapshot.val());  
       product2Name = snapshot.val();
    $("#producto2 h1").html(product2Name);
});
product3.child("Nombre").on("value", function(snapshot) {
  //alert(snapshot.val());  
     product3Name = snapshot.val();
     $("#producto3 h1").html(product3Name);
});
product4.child("Nombre").on("value", function(snapshot) {
  //alert(snapshot.val());  
     product4Name = snapshot.val();
     $("#producto4 h1").html(product4Name);
});
product5.child("Nombre").on("value", function(snapshot) {
  //alert(snapshot.val());  
     product5Name = snapshot.val();
     $("#producto5 h1").html(product5Name);
});
product6.child("Nombre").on("value", function(snapshot) {
  //alert(snapshot.val());  
     product6Name = snapshot.val();
     $("#producto6 h1").html(product6Name);
});
product7.child("Nombre").on("value", function(snapshot) {
  //alert(snapshot.val());  
     product7Name = snapshot.val();
     $("#producto7 h1").html(product7Name);
});
product8.child("Nombre").on("value", function(snapshot) {
  //alert(snapshot.val());  
     product8Name = snapshot.val();
     $("#producto8 h1").html(product8Name);
});
product9.child("Nombre").on("value", function(snapshot) {
  //alert(snapshot.val());  
     product9Name = snapshot.val();
     $("#producto9 h1").html(product9Name);
});

//precios

product1.child("precio").on("value", function(snapshot) {
  //alert(snapshot.val());  
     var product1price = snapshot.val();
     $("#producto1 h2").html("$" + product1price);
    
});
product2.child("precio").on("value", function(snapshot) {
  //alert(snapshot.val());  
       product2price = snapshot.val();
    $("#producto2 h2").html("$" + product2price);
});
product3.child("precio").on("value", function(snapshot) {
  //alert(snapshot.val());  
     product3price = snapshot.val();
     $("#producto3 h2").html("$" + product3price);
});
product4.child("precio").on("value", function(snapshot) {
  //alert(snapshot.val());  
     product4price = snapshot.val();
     $("#producto4 h2").html("$" + product4price);
});
product5.child("precio").on("value", function(snapshot) {
  //alert(snapshot.val());  
     product5price = snapshot.val();
     $("#producto5 h2").html("$" + product5price);
});
product6.child("precio").on("value", function(snapshot) {
  //alert(snapshot.val());  
     product6price = snapshot.val();
     $("#producto6 h2").html("$" + product6price);
});
product7.child("precio").on("value", function(snapshot) {
  //alert(snapshot.val());  
     product7price = snapshot.val();
     $("#producto7 h2").html("$" + product7price);
});
product8.child("precio").on("value", function(snapshot) {
  //alert(snapshot.val());  
     product8price = snapshot.val();
     $("#producto8 h2").html("$" + product8price);
});
product9.child("precio").on("value", function(snapshot) {
  //alert(snapshot.val());  
     product9price = snapshot.val();
     $("#producto9 h2").html("$" + product9price);
});

//img

product1.child("imgUrl").on("value", function(snapshot) {
  //alert(snapshot.val());  
     var img1Url = snapshot.val();
    if(img1Url === 0){
        $("#img1").attr("src", imgDefault);
    }else{
        $("#img1").attr("src", img1Url); 
    }
     
    });

product2.child("imgUrl").on("value", function(snapshot) {
  //alert(snapshot.val());  
     var img2Url = snapshot.val();
    if(img2Url === 0){
        $("#img2").attr("src", imgDefault);
    }else{
        $("#img2").attr("src", img2Url); 
    }
     
    });

product3.child("imgUrl").on("value", function(snapshot) {
  //alert(snapshot.val());  
     var img3Url = snapshot.val();
    if(img3Url === 0){
        $("#img3").attr("src", imgDefault);
    }else{
        $("#img3").attr("src", img3Url); 
    }
     
    });

product4.child("imgUrl").on("value", function(snapshot) {
  //alert(snapshot.val());  
    var img4Url = snapshot.val();
    if(img4Url === 0){
        $("#img4").attr("src", imgDefault);
    }else{
        $("#img4").attr("src", img4Url); 
    }
     
    });

product5.child("imgUrl").on("value", function(snapshot) {
  //alert(snapshot.val());  
     var img5Url = snapshot.val();
    if(img5Url === 0){
        $("#img5").attr("src", imgDefault);
    }else{
        $("#img5").attr("src", img5Url); 
    }
     
    });
product6.child("imgUrl").on("value", function(snapshot) {
  //alert(snapshot.val());  
     var img6Url = snapshot.val();
    if(img6Url === 0){
        $("#img6").attr("src", imgDefault);
    }else{
        $("#img6").attr("src", img6Url); 
    }
     
    });
product7.child("imgUrl").on("value", function(snapshot) {
  //alert(snapshot.val());  
     var img7Url = snapshot.val();
    if(img7Url === 0){
        $("#img7").attr("src", imgDefault);
    }else{
        $("#img7").attr("src", img7Url); 
    }
     
    });
product8.child("imgUrl").on("value", function(snapshot) {
  //alert(snapshot.val());  
     var img8Url = snapshot.val();
    if(img8Url === 0){
        $("#img8").attr("src", imgDefault);
    }else{
        $("#img8").attr("src", img8Url); 
    }
     
    });
product9.child("imgUrl").on("value", function(snapshot) {
  //alert(snapshot.val());  
     var img9Url = snapshot.val();
    if(img9Url === 0){
        $("#img9").attr("src", imgDefault);
    }else{
        $("#img9").attr("src", img9Url); 
    }
     
    });




//UPDATE INFO
    

/*
    

















//Jquery

    $("#producto1 h1").html(name2);
    $("#producto1 h2").html("$ " + product1.precio);
    $("#producto1 p").html();
    $("#img1").attr("src", product1.imgUrl);
    */