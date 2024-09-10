
// mobile menu

$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".canva_expander" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".canva_expander" ).hide();
    $( ".cross" ).show();
    });
    });
    
    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".canva_expander" ).show();
    });
    });
    
    });
  
   // Close out sub menu
   $('.sub__close').click(function(e) {
    e.preventDefault();
    
    $(this).parent().parent().removeClass('is-active');
  });
  
  // Trigger sub menu
  $('.menu ul .nav__submenu').click(function(e) {
    e.preventDefault();
    
    $(this).siblings().addClass('is-active');
  });
  


  // tab change

  function activeTab(evt, id) {
           
    // Get all elements with class="tablinks" and remove the class "active"
     let tabactive = document.getElementsByClassName("TabButtonSelected");
     tabactive[0].className = tabactive[0].className.replace(" TabButtonSelected", "");

     document.getElementById(id).style.display = "block";
     evt.currentTarget.className += " TabButtonSelected";

     displaySection(evt,id)
 }
 
function displaySection(evt, id) {

     let tabactive = document.getElementsByClassName("tab-section");
     tabactive[0].className = tabactive[0].className.replace(" d-chart-show", "d-chart-n");
     // add below line of codes
     [...document.querySelectorAll('div.tab-section')].forEach(item => item.style.display='none')
     document.getElementById("Section" + id).style.display = "block";
     evt.currentTarget.className += " d-chart-show";

}


