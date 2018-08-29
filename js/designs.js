// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const makeGrid = function() {

  const canvas = $('#pixel_canvas');
  const width = $('#input_width').val();
  const height = $('#input_height').val();

  $('tr').remove();

  for (let i = 0; i < height; i++){
    canvas.append("<tr></tr>");
  };
  for (let j = 0; j < width; j++){
    canvas.children('tr').append("<td></td>");
  };

};

$('body').on("click","td",function(){
  let color = $("#colorPicker").val();
  let colorMirror = $(this).css("background-color");

  $(this).css("background-color",color);

});
