$(document).ready(function(){
    $(window).scroll(function(){
        sc=$(window).scrollTop();
        
        if(sc>=100 && sc<900){
            $('#main2_title').css({'right':(sc-100)})
        }
        if(sc>=500 && sc<1000){
            $('#box1_right>img').css({'bottom':-(sc-500)*0.15})
        }
        if(sc>=1400 && sc<1900){
            $('#box3_left>img').css({'left':-(sc-1400)})
        }
        
    })

    $('#main_img').animate({'opacity':'0.5'},500,function(){
        $('#main_img').animate({'opacity':'1'},500,function(){
            $('#main_img').animate({'opacity':'0.5'},500,function(){
                $('#main_img').animate({'opacity':'1'},500)
            })
        })
    })
    

})