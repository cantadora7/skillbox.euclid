$(function () {
  $("#accordion").accordion({
    collapsible: true,
    active: false,
    //header: ".ui-accordion-header"
    //create: function (event, ui) {
    //  $('#accordion').attr('tabIndex', '0');
    //}
  });

  $("#accordion .ui-accordion-header")
    //.each(function () { console.log(this) })
    .attr("tabindex", 0);

  // let collapsible = $("#accordion").accordion("option", "collapsible");

  // Setter
  // $("#accordion").accordion("option", "collapsible", true);
});


document.addEventListener('DOMContentLoaded', function () {
  var border = document.querySelector('#ui-id-9')

   border.addEventListener('click', function (event) {


     document.querySelector('#ui-id-9').classList.toggle('faq__faq_5-active')
     document.querySelector('#ui-id-9').classList.toggle('faq__faq_5:hover')



    })

})

