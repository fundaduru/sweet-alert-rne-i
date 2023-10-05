




var meslek = document.getElementById("meslek");
meslek.onchange= function (){ 

   let meslek= document.getElementById("meslek").value;

 
    
    if(meslek=="0"){
       
       
       
        Swal.fire({
            
            text: 'Aradığınızı bulamadıysanız yöneticiye mesaj atınız.',
        
            confirmButtonText: 'Tamam'
          });

       

 
}


}
