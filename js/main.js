function consultaCep(){
    $.ajax({
        url: "https://viacep.com.br/ws/06931740/json/",
        type: "GET",
        success: function(response){
            console.log(response);
        }
    })
}