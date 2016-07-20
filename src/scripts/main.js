$(function() {

  $('#story').hide();
  // ---- event handler ---- //
  $('#btn-click').click(function(e) {
    // grab the values from the input boxes, then append them to the DOM
    $('.person').empty().append($('input.person').val());
    $('.adjective').empty().append($('input.adjective').val());
    $('.noun1').empty().append($('input.noun1').val());
    $('.animal').empty().append($('input.animal').val());
    $('.food').empty().append($('input.food').val());
    $('.noun2').empty().append($('input.noun2').val());
    $('.noun3').empty().append($('input.noun3').val());
    $('.verb').empty().append($('input.verb').val());
    if ($('.animal').val() === 'kitten' && $('.food').val() === 'pickle') {
      window.location.replace('http://picklecat.com/');
    } else if ($('.food').val() !== '' && $('input.verb').val() !== '' && $('input.noun3').val() !== '' && $('input.noun2').val() !== '' && $('input.animal').val() !== '' && $('input.noun1').val() !== '' && $('input.adjective').val() !== '' && $('input.person').val() !== '') {
      $('#story').show();
      $('input').val('');
      $('#questions').hide();
    } else {
      alert('All fields must be filled out!');
    }
  });
  $('#play-btn').click(function(e) {
    $('#questions').show();
    $('#story').hide();
  });
});
