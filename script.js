const black = document.getElementById("black");
const indigo = document.getElementById("indigo");
const green = document.getElementById("green");
const red = document.getElementById("red");
const buy = document.getElementById("buy");
const sizeAndQuantity = document.getElementById("sendSizeAndQuantity");
const privateInformation = document.getElementById("privateInformation")

var callback = function(){
  
    black.addEventListener("click", function() {
  document.getElementById("bg").classList.remove("bg-indigo-500");
    document.getElementById("bg").classList.remove("bg-green-500");
         document.getElementById("bg").classList.remove("bg-red-500");
        
        document.getElementById("box").classList.remove("bg-green-300");
       document.getElementById("box").classList.remove("bg-red-200");
        document.getElementById("box").classList.remove("bg-indigo-300");
        
        
        document.getElementById("buy").classList.remove("bg-green-500");
        document.getElementById("buy").classList.remove("bg-red-500");
        document.getElementById("buy").classList.remove("bg-indigo-500");
        
        document.getElementById("send").classList.remove("bg-green-500");
        document.getElementById("send").classList.remove("bg-red-500");
        document.getElementById("send").classList.remove("bg-indigo-500");
        
        document.getElementById("buy").classList.add("bg-gray-800");
        document.getElementById("send").classList.add("bg-gray-800");
        
        
        
         document.getElementById("titel").classList.add("text-gray-500");
        document.getElementById("titel").classList.remove("text-indigo-500");
        document.getElementById("titel").classList.remove("text-green-500");
        document.getElementById("titel").classList.remove("text-red-500");
        
        
        document.getElementById("shoes").src ="sneakers-black.png"
        document.getElementById("bg").classList.add("bg-gray-500");
        document.getElementById("box").classList.add("bg-gray-300");
});
    
    indigo.addEventListener("click", function() {
 
        document.getElementById("bg").classList.remove("bg-gray-500");
        document.getElementById("bg").classList.remove("bg-red-500");
        document.getElementById("bg").classList.remove("bg-green-500");
        
        document.getElementById("box").classList.remove("bg-red-200");
        document.getElementById("box").classList.remove("bg-green-300");
        document.getElementById("box").classList.remove("bg-gray-300");
        
        document.getElementById("buy").classList.remove("bg-gray-800");
        document.getElementById("buy").classList.remove("bg-red-500")
        document.getElementById("buy").classList.remove("bg-green-500")
        
        
        document.getElementById("send").classList.remove("bg-gray-800");
        document.getElementById("send").classList.remove("bg-red-500");
        document.getElementById("send").classList.remove("bg-green-500");
        
        document.getElementById("send").classList.add("bg-indigo-500");
        document.getElementById("buy").classList.add("bg-indigo-500");
        
         document.getElementById("titel").classList.remove("text-gray-500");
        document.getElementById("titel").classList.add("text-indigo-500");
        document.getElementById("titel").classList.remove("text-green-500");
        document.getElementById("titel").classList.remove("text-red-500");
        
         document.getElementById("box").classList.add("bg-indigo-300");
        document.getElementById("shoes").src ="sneakers-mockup.png"; 
        document.getElementById("bg").classList.add("bg-indigo-500");
});
    
    green.addEventListener("click", function() {
 
        document.getElementById("bg").classList.remove("bg-indigo-500");
        document.getElementById("bg").classList.remove("bg-red-500");
        document.getElementById("bg").classList.add("bg-green-500");
        
        
        document.getElementById("box").classList.remove("bg-indigo-300");
        document.getElementById("box").classList.remove("bg-red-200");
        document.getElementById("box").classList.remove("bg-gray-300");
        
        document.getElementById("buy").classList.remove("bg-gray-800");
        document.getElementById("buy").classList.remove("bg-red-500")
        document.getElementById("buy").classList.remove("bg-indigo-500")
        
        document.getElementById("send").classList.remove("bg-gray-800");
        document.getElementById("send").classList.remove("bg-red-500");
        document.getElementById("send").classList.remove("bg-indigo-500");
        
        document.getElementById("buy").classList.add("bg-green-500");
        document.getElementById("send").classList.add("bg-green-500");
        
         document.getElementById("titel").classList.remove("text-gray-500");
        document.getElementById("titel").classList.remove("text-indigo-500");
        document.getElementById("titel").classList.add("text-green-500");
        document.getElementById("titel").classList.remove("text-red-500");
        
        document.getElementById("box").classList.add("bg-green-300");
        document.getElementById("shoes").src ="sneakers-green.png"; 
        
        
});
    
    red.addEventListener("click", function() {
 
        document.getElementById("bg").classList.remove("bg-indigo-500");
        document.getElementById("bg").classList.remove("bg-green-500");
        document.getElementById("bg").classList.remove("bg-gray-500");
       
        
        
        document.getElementById("box").classList.remove("bg-indigo-300");
        document.getElementById("box").classList.remove("bg-green-300");
        document.getElementById("box").classList.remove("bg-gray-300");
        
        document.getElementById("buy").classList.remove("bg-gray-800");
        document.getElementById("buy").classList.remove("bg-green-500")
        document.getElementById("buy").classList.remove("bg-indigo-500")
        
        document.getElementById("send").classList.remove("bg-gray-800");
        document.getElementById("send").classList.remove("bg-green-500");
        document.getElementById("send").classList.remove("bg-indigo-500");
        
        document.getElementById("buy").classList.add("bg-red-500");
        document.getElementById("send").classList.add("bg-red-500");
        
        document.getElementById("box").classList.add("bg-red-200");
        
        
         document.getElementById("titel").classList.remove("text-gray-500");
        document.getElementById("titel").classList.remove("text-indigo-500");
        document.getElementById("titel").classList.remove("text-green-500");
        document.getElementById("titel").classList.add("text-red-500");
        
        
        document.getElementById("bg").classList.add("bg-red-500");
        
        document.getElementById("shoes").src ="sneakers-red.png"; 
});
    
    buy.addEventListener("click", function() {
        
        document.getElementById("buy").classList.add("hidden");
        document.getElementById("Front").classList.add("hidden");
        document.getElementById("ReadyToBuy").classList.remove("hidden");
        
        
    });
    
    
    sizeAndQuantity.addEventListener("click", function(){
        
        document.getElementById("client").classList.remove("hidden");
        document.getElementById("sendSizeAndQuantity").classList.add("hidden");
        document.getElementById("sizeAndQantity").classList.add("hidden");
        document.getElementById("privateInformation").classList.remove("hidden");

        
    });
    
    
    privateInformation.addEventListener("click", function(){
         document.getElementById("privateInformation").classList.add("hidden");
        
        document.getElementById("client").classList.add("hidden");
        document.getElementById("cc").classList.remove("hidden");
        document.getElementById("ccard").classList.remove("hidden")
       

        
    });
    
    
    
    
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}