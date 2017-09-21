function newPuppy () {
  $.ajax({
    type: "GET",
    url: "https://dog.ceo/api/breeds/image/random",
    success: function (data) {
      console.log(data);
      $('#response').css({'width': '400px', 'height': '250px', 'display': 'block'});
      $('#image').attr('src', data.message);
      $('#share').text('Want to SHARE this with friends?');
      $('#url').attr({readonly:true, type:'text', value:data.message});
      $('#copy').on('click', function (event) {
          event.preventDefault();
          $('#url').select();
          document.execCommand("copy");
      });
    }
  });
};

newPuppy();

$('#refresh').on('click', newPuppy);