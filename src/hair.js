// Displays the hair styles for the selected colour
export function displaySelectedColour() {
  hairColour = $('input[name=hair-colour]:checked', '#character-creation-form').val().toLowerCase();
  $('input[name=hair-style]').each(function (index) {
    const elementColour = $(this).val().substring(6).toLowerCase();
    $(this)
      .closest('div')
      .addClass('hairstyle-' + index);
    if (elementColour !== hairColour) {
      $('.hairstyle-' + index).hide();
    }
    if (elementColour === hairColour) {
      $('.hairstyle-' + index).show();
    }
  });
}

// Updates the global variable for hair style and colour
export function updateStyleColourId() {
  styleColourId = hairstyleId + '-' + hairColour.toLowerCase();
}

// Checks the selected hairstyle
export function checkSelectedHairstyle() {
  updateStyleColourId();
  $('input[value="' + styleColourId + '"]').prop('checked', true);
}