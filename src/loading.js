export function beginLoadingAnimation() {
  $('html').css({
    overflow: 'hidden',
    height: '100%',
  });
  document.getElementById('loading-screen').style.display = 'flex';
  //document.getElementsByTagName('html')[0].style.visibility = 'visible';
}

export function endLoadingAnimation() {
  $('html').css({
    overflow: 'visible',
    height: 'auto',
  });
  document.getElementById('loading-screen').style.display = 'none';
  //document.getElementsByTagName('html')[0].style.visibility = 'visible';
}
