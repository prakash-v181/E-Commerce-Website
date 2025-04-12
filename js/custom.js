
var sum = 0,flag1 = 1,flag2 = 1,flag3 = 1,sumTotal=0;
var arraySum=[0,624,435,386], arraySumPrevious=[0,0,0,0], arrayFlag=[0,0,0,0];
for(i=1;i<arraySum.length;i++){
    sumTotal+=arraySum[i];
}
$(document).ready(function(){
    $("#totla-cash").html("$"+sumTotal);

//=================== favorite list ====================//    
    var h1=0,h2=0,h3=0,h4=0,h5=0,h6=0,h7=0,h8=0,h9=0,h10=0,h11=0,h12=0,h13=0,h14=0,h15=0,h16=0,h17=0,h18=0,h19=0,h20=0,h21=0,h22=0,h23=0,h24=0,h25=0,h26=0,h27=0,h28=0,h29=0,h30=0,h31=0,h32=0; 
    $(".product-btns").click(function() {
            var x = this.id;
            if(x.length == 9){var y = x[x.length-1];}else if(x.length == 10){y = x.slice(8,10);}
            if(y==1 && h1==0 || y==2 && h2==0 || y==3 && h3==0 || y==4 && h4==0 || y==5 && h5==0 || y==6 && h6==0 || y==7 && h7==0 || y==8 && h8==0 || y==9 && h9==0 || y==10 && h10==0 || y==11 && h11==0 || y==12 && h12==0 || y==13 && h13==0 || y==14 && h14==0 || y==15 && h15==0 || y==16 && h16==0 || y==17 && h17==0 || y==18 && h18==0 || y==19 && h19==0 || y==20 && h20==0 || y==21 && h21==0 || y==22 && h22==0 || y==23 && h23==0 || y==24 && h24==0 || y==25 && h25==0 || y==26 && h26==0 || y==27 && h27==0 || y==28 && h28==0 || y==29 && h29==0 || y==30 && h30==0 || y==31 && h31==0 || y==32 && h32==0){
                $("#heart0"+y).css("color","red");
                $("#prodbtn0"+y).css("opacity","1");
                $("#prodbtn0"+y).css("background-color","transparent");
                if(y==1){h1=1;}else if(y==2){h2=1;}else if(y==3){h3=1;}else if(y==4){h4=1;}else if(y==5){h5=1;}else if(y==6){h6=1;}else if(y==7){h7=1;}else if(y==8){h8=1;}else if(y==9){h9=1;}else if(y==10){h10=1;}else if(y==11){h11=1;}else if(y==12){h12=1;}else if(y==13){h13=1;}else if(y==14){h14=1;}else if(y==15){h15=1;}else if(y==16){h16=1;}else if(y==17){h17=1;}else if(y==18){h18=1;}else if(y==19){h19=1;}else if(y==20){h20=1;}else if(y==21){h21=1;}else if(y==22){h22=1;}else if(y==23){h23=1;}else if(y==24){h24=1;}else if(y==25){h25=1;}else if(y==26){h26=1;}else if(y==27){h27=1;}else if(y==28){h28=1;}else if(y==29){h29=1;}else if(y==30){h30=1;}else if(y==31){h31=1;}else if(y==32){h32=1;}
            }else if(y==1 && h1==1 || y==2 && h2==1 || y==3 && h3==1 || y==4 && h4==1 || y==5 && h5==1 || y==6 && h6==1 || y==7 && h7==1 || y==8 && h8==1 || y==9 && h9==1 || y==10 && h10==1 || y==11 && h11==1 || y==12 && h12==1 || y==13 && h13==1 || y==14 && h14==1 || y==15 && h15==1 || y==16 && h16==1 || y==17 && h17==1 || y==18 && h18==1 || y==19 && h19==1 || y==20 && h20==1 || y==21 && h21==1 || y==22 && h22==1 || y==23 && h23==1 || y==24 && h24==1 || y==25 && h25==1 || y==26 && h26==1 || y==27 && h27==1 || y==28 && h28==1 || y==29 && h29==1 || y==30 && h30==1 || y==31 && h31==1 || y==32 && h32==1){
                $("#heart0"+y).css("color","#fff");                              
                $("#prodbtn0"+y).css("background-color","#000");
                if(y==1){h1=0;}else if(y==2){h2=0;}else if(y==3){h3=0;}else if(y==4){h4=0;}else if(y==5){h5=0;}else if(y==6){h6=0;}else if(y==7){h7=0;}else if(y==8){h8=0;}else if(y==9){h9=0;}else if(y==10){h10=0;}else if(y==11){h11=0;}else if(y==12){h12=0;}else if(y==13){h13=0;}else if(y==14){h14=0;}else if(y==15){h15=0;}else if(y==16){h16=0;}else if(y==17){h17=0;}else if(y==18){h18=0;}else if(y==19){h19=0;}else if(y==20){h20=0;}else if(y==21){h21=0;}else if(y==22){h22=0;}else if(y==23){h23=0;}else if(y==24){h24=0;}else if(y==25){h25=0;}else if(y==26){h26=0;}else if(y==27){h27=0;}else if(y==28){h28=0;}else if(y==29){h29=0;}else if(y==30){h30=0;}else if(y==31){h31=0;}else if(y==32){h32=0;}
            }
    });

//=================== Quantity counter ====================// 
    
    $(".qty-up").click(function () {
        var w = this.id;
        var q = w[w.length-1];
        var currentVal = parseInt($(".number"+q).val());
        if (!isNaN(currentVal)) {
            $(".number"+q).val(currentVal + 1);
        }
        var x = $(".number"+q).val() * $(".product-price"+q).html().slice(1,5);
        $("#cartprodprice"+q).html("$"+x);
        $("#subtotal-cash"+q).html("$"+x);
        // arraySum[q]=Number(x);
        // console.log(arraySum);
    });

    $(".qty-down").click(function () {
        var w = this.id;
        var q = w[w.length-1];
        var currentVal = parseInt($(".number"+q).val());
        if (!isNaN(currentVal) && currentVal >= 2) {
            $(".number"+q).val(currentVal - 1);
        }
        var x = $(".number"+q).val() * $(".product-price"+q).html().slice(1,5);
        $("#cartprodprice"+q).html("$"+x);
        $("#subtotal-cash"+q).html("$"+x);
        // arraySum[q]=Number(x);
        // console.log(arraySum);
    });

    var deletArray=[];
    $(".delete").click(function () {
        var w = this.id;
        var q = w[w.length-1];

        

        $("#cartprod"+q).hide();
        $("#total-prod"+q).hide();
        // $("#total-prod"+q).html("0");
        
        
        deletArray.push(q);
        if(deletArray.length == 3){
            $(".empty-cart").css("display","block");
            
        }
        var delePrice = Number($("#subtotal-cash"+q).html().slice(1,5));
        sumTotal-= delePrice;
        $("#totla-cash").html("$"+sumTotal);

        $("#subtotal-cash"+q).html("0");
        // console.log("subtotal-cash"+q+" = "+$("#subtotal-cash"+q).html());

    });

//=================== How you will pay ====================// 

    $(".waytopay").click(function() {
            var x = this.id; //payment1
            var y = x[x.length-1];
            if(y==1){
                $("#payment1").css("color","red");
                $("#payment2").css("color","#8d99ae");
                $("#payment3").css("color","#8d99ae");
            }else if(y==2){
                $("#payment1").css("color","#8d99ae");
                $("#payment2").css("color","red");                
                $("#payment3").css("color","#8d99ae");                
            }else if(y==3){
                $("#payment1").css("color","#8d99ae");                                
                $("#payment2").css("color","#8d99ae");
                $("#payment3").css("color","red");                
            }
    });

//=================== Timer countdown ====================// 
    var days=document.getElementById("days");
    var hours=document.getElementById("hours");
    var min=document.getElementById("min");
    var sec=document.getElementById("sec");    

    if(days!=null){

        $("#expired").hide();
        $("#counter").show();

        var countDownDate = new Date("Sep 26, 2019 15:50:00").getTime();

        var x = setInterval(function() {

            var now = new Date().getTime();

            var distance = countDownDate - now;

            var d = Math.floor(distance / (1000 * 60 * 60 * 24));
            var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var s = Math.floor((distance % (1000 * 60)) / 1000);

            days.innerHTML = d;
            hours.innerHTML = h;
            min.innerHTML = m;
            sec.innerHTML = s;

            if (distance < 0) {
                clearInterval(x);
                $("#counter").hide();
                $("#expired").show();    
            }

        }, 1000);
    }

});


//=================== Proceed to Checkout ====================// 

function totalPrice(){

    for(i=1;i<arraySum.length;i++){
        arraySumPrevious[i] = arraySum[i];
        var qyt = Number($(".number"+i).val());       
        var subPrice = Number($(".product-price"+i).html().slice(1,5));
        // var wu = event.currentTarget.id;
        var x = qyt * subPrice;
        arraySum[i] = x;
        if(arraySumPrevious[i] != arraySum[i]){
            sum+=subPrice;
        }        
    }
}

function total(){
    sumTotal = 0;
    for(i=1;i<arraySum.length;i++){
        var subTotalPrice = Number($("#subtotal-cash"+i).html().slice(1,5));
        sumTotal= sumTotal+subTotalPrice;
    }
    $("#totla-cash").html("$"+sumTotal);
}


//=================== generat Random number for Order Id ====================// 
// var orderId = document.getElementById("Order-id");
// alert("orderId = "+orderId);
// if(orderId == null){
//     alert("orderId = "+orderId);
    window.onload = function() {

        var min = 1;
        var max = 9999999;
      var num = Math.floor(Math.random() * max);
      // console.log(num);
      $('#Order-id').html(num);
      alert(num);
    };
// }

//=================== notification ====================// 
    var number = 0, flag = 0;
    
    window.onload = function(){
        if(number == 0 && flag == 0){
            $(".cart-list").css("display","none");
            $(".cart-summary").css("display","none");
            $(".cart-btns").css("display","none");
            $(".cart-dropdown .empty").css("display","block");
        }
    }
    function notification(){
        // console.log("number= "+number+"\nflag= "+flag);
        if(number == 0 && flag == 0){
            $(".cart-dropdown").css("display","block");
            var cartButton = document.getElementById("dropdownMenuButton");
            var divTag = document.createElement('div');
            cartButton.appendChild(divTag);
            divTag.setAttribute('id', 'notifnum');

            $(".cart-dropdown .empty").css("display","none");
            $(".cart-list").css("display","block");
            $(".cart-summary").css("display","block");
            $(".cart-btns").css("display","block");       
        }
        if(flag >= 1){
            flag=0;
            $("#notifnum").css("display","block");
        }
        number+=1;
        document.getElementById("notifnum").innerHTML = number;
    }
    function deletNotification(){
        if(number!=0){
            flag++;
            number = 0;
            $("#notifnum").css("display","none");
        }
    }   
