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

//HIDE


    $("#section-campaigns").hide();
    $("#activities").hide();
    $("#incorrectPass").hide();
    $("#incorrectUser").hide();
    var correctUser = "gonzalo.rodriguez";

    var correctPass = "admin123";
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

 

//show button facebook
    $(".social-btn").mouseenter(function () {
        $(this).css("left" , "0")
    });   
    $(".social-btn").mouseleave(function () {
        $(this).delay(300).css("left" , "-85px")
    });


    $('.ancla').click(function(){
        var link = $(this);
        var anchor  = link.attr('href');
        $('html, body').stop().animate({
            scrollTop: jQuery(anchor).offset().top
        }, 1000);
        return false;
    });
    

//UPDATE PRODUCTS
product1.child("imgUrl").on("value", function(snapshot) {
  //alert(snapshot.val());  
     var img1Url = snapshot.val();
    if(img1Url === 0){
        $("#img1").attr("src", imgDefault);
    }else{
        $("#img1").attr("src", img1Url); 
    }
     
    });
    
    var cero = "";
    
    
    $('#modificar1').click(function(){
        var product1 = Productosref.child("product1");
        var nombreproducto1 = $("#nombre1").val();
        var precioproducto1 = $("#precio1").val();
        var imgproducto1 = $("#url1").val();
         product1.update({ "Nombre" : nombreproducto1,
                            "precio" : precioproducto1,
                            "imgUrl" : imgproducto1,
                         })
     $("#backoffice1").modal('toggle');
});
    
    $('#modificar2').click(function(){
        var product2 = Productosref.child("product2");
        var nombreproducto2 = $("#nombre2").val();
        var precioproducto2 = $("#precio2").val();
        var imgproducto2 = $("#url2").val();
         product2.update({ "Nombre" : nombreproducto2,
                            "precio" : precioproducto2,
                            "imgUrl" : imgproducto2,
                         });
     $("#backoffice2").modal('toggle');        
});
                           
        $('#modificar3').click(function(){
        var product3 = Productosref.child("product3");
        var nombreproducto3 = $("#nombre3").val();
        var precioproducto3 = $("#precio3").val();
        var imgproducto3 = $("#url3").val();
         product3.update({ "Nombre" : nombreproducto3,
                            "precio" : precioproducto3,
                            "imgUrl" : imgproducto3,
                         });
     $("#backoffice3").modal('toggle');
});
                               
            $('#modificar4').click(function(){
        var product4 = Productosref.child("product4");
        var nombreproducto4 = $("#nombre4").val();
        var precioproducto4 = $("#precio4").val();
        var imgproducto4 = $("#url4").val();
         product4.update({ "Nombre" : nombreproducto4,
                            "precio" : precioproducto4,
                            "imgUrl" : imgproducto4,
                         });
     $("#backoffice4").modal('toggle');
});
    
    $('#modificar5').click(function(){
        var product5 = Productosref.child("product5");
        var nombreproducto5 = $("#nombre5").val();
        var precioproducto5 = $("#precio5").val();
        var imgproducto5 = $("#url5").val();
         product5.update({ "Nombre" : nombreproducto5,
                            "precio" : precioproducto5,
                            "imgUrl" : imgproducto5,
                         });
     $("#backoffice5").modal('toggle');
});
               
    $('#modificar6').click(function(){
        var product6 = Productosref.child("product6");
        var nombreproducto6 = $("#nombre6").val();
        var precioproducto6 = $("#precio6").val();
        var imgproducto6 = $("#url6").val();
         product6.update({ "Nombre" : nombreproducto6,
                            "precio" : precioproducto6,
                            "imgUrl" : imgproducto6,
                         });
     $("#backoffice6").modal('toggle');
});
               
    $('#modificar7').click(function(){
        var product7 = Productosref.child("product7");
        var nombreproducto7 = $("#nombre7").val();
        var precioproducto7 = $("#precio7").val();
        var imgproducto7 = $("#url7").val();
         product7.update({ "Nombre" : nombreproducto7,
                            "precio" : precioproducto7,
                            "imgUrl" : imgproducto7,
                         });
     $("#backoffice7").modal('toggle');
});
               
    $('#modificar8').click(function(){
        var product8 = Productosref.child("product8");
        var nombreproducto8 = $("#nombre8").val();
        var precioproducto8 = $("#precio8").val();
        var imgproducto8 = $("#url8").val();
         product8.update({ "Nombre" : nombreproducto8,
                            "precio" : precioproducto8,
                            "imgUrl" : imgproducto8,
                         });
     $("#backoffice8").modal('toggle');
});
               
    $('#modificar9').click(function(){
        var product9 = Productosref.child("product9");
        var nombreproducto9 = $("#nombre9").val();
        var precioproducto9 = $("#precio9").val();
        var imgproducto9 = $("#url9").val();
         product9.update({ "Nombre" : nombreproducto9,
                            "precio" : precioproducto9,
                            "imgUrl" : imgproducto9,
                         });
     $("#backoffice9").modal('toggle');
});
               
    

$("#logIn").click(function(){
    var username = $("#usuario").val();
    var userpass = $("#contra").val();
if(username == correctUser && userpass == correctPass){
        $("#ingresar-btn").hide();$("#ingresar").modal('toggle');$("#activities").show();$("#section-campaigns").fadeIn();
        $(".center").hide();
        //window.location = "http://www.djm-m.freeiz.com/backoffice/backOffice.html";
        console.log("Usuario correcto");
    
    
}else if(username == correctUser){
    console.log("Password incorrecta!!");
    $("#contra").css("border", "2px solid rgba(255, 54, 54, 0.8)");
    $("#contra").val("");
    $("#incorrectPass").fadeIn();
}else{
    $("#usuario").css("border", "2px solid rgba(255, 54, 54, 0.8)");
    $("#contra").val("");
    $("#incorrectUser").fadeIn();
    console.log("Username incorrecto!!");
}
    
  
 });
    
    $("#contra").click(function(){
        $(this).css("border","1px solid #ccc");
        $("#incorrectPass").fadeOut();
    });
    
    $("#usuario").click(function(){
        $(this).css("border","1px solid #ccc");
        $("#incorrectUser").fadeOut();
        
    });


//UPDATE INFO
    

/*
    

















//Jquery

    $("#producto1 h1").html(name2);
    $("#producto1 h2").html("$ " + product1.precio);
    $("#producto1 p").html();
    $("#img1").attr("src", product1.imgUrl);
    */