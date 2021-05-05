document.getElementById('card3').style.opacity=0.5;
$('.card-option.one .left').on('click',()=>{
    disableElseStyle();
    $('.card-option.one').css('border','2px solid hsl(176, 50%, 47%)');
})
$('.card-option.two .left').on('click',()=>{
    disableElseStyle();
    $('.card-option.two').css('border','2px solid hsl(176, 50%, 47%)');    
})
$('.card-option.three .left').on('click',()=>{
    disableElseStyle();
    $('.card-option.three').css('border','2px solid hsl(176, 50%, 47%)');
})
$('.card-option.four .left').on('click',()=>{
    disableElseStyle();
    $('.card-option.four').css('border','2px solid hsl(176, 50%, 47%)');
})
$('.card-option.one .left input').on('click',()=>{
    disableElseSelect();
    $('.card-option.one .card-option-footer').css('display','flex');
})
$('.card-option.two .left input').on('click',()=>{
    disableElseSelect();
    $('.card-option.two .card-option-footer').css('display','flex');    
})
$('.card-option.three .left input').on('click',()=>{
    disableElseSelect();
    $('.card-option.three .card-option-footer').css('display','flex');
})
$('.card-option.four .left input').on('click',()=>{
    disableElseSelect();
    $('.card-option.four .card-option-footer').css('display','flex');
})
function disableElseStyle(){
    $('.card-option').css('border','1px solid hsl(0, 0%, 83%)');
}
function disableElseSelect(){
    $('.card-option .card-option-footer').css('display','none');
}
function modal1(){
    $('.modal').css('display','block');
    $('.modal1').css('display','block');
}
$('.modal-title img').click(()=>{
    $('.modal1').css('display','none');
    $('.modal').css('display','none');
})