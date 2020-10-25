let element;
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();

        });
        $(this).toggleClass('active').next('ul.select-options').toggle();

    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $styledSelect.css('background', '#fff');
        $styledSelect.css('color', '#000000');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

$('.create input[type=text], #textarea-form').keydown(function(){
  if($(this).val().length == 1)
  {
    $(this).css('background', '#fff');
  }
});
$('.create input[type=text], #textarea-form').change(function(){
  if($(this).val().length == 0)
  {
    $(this).css('background', '#EFEFEF');
  }
})
