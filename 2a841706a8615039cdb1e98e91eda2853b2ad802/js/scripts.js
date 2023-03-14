
window.onload = function() {

          
      
      $(".lv_but").click(function(e) {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
      })


      $(".lv_item img").click(function(e) {
        let itemImg = $(".lv_item img")
        $(itemImg).removeClass('active');
        $(this).addClass('active');
        showResult();

    
      })

      
function showResult(){

    $('.result_cont').append('<p class="result1"> Eres un lector <span id="readerLevel"></span> </p>')
    $('#readerLevel').text('medio')
    $('.result_cont').show();

    let newEl = document.querySelector('.result_cont');

    newEl.scrollIntoView();
    newEl.scrollIntoView({ behavior: "smooth" });


}


};

