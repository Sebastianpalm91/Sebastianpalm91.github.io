//Desktop script animation
window.addEventListener('scroll', function() {
  let object=document.querySelector('.portfolio_one_left_text')
  let object1=document.querySelector('.portfolio_one_left_header')
  let object2=document.querySelector('.portfolio_one_right')
  let object3=document.querySelector('.portfolio_two_left_text')
  let object4=document.querySelector('.portfolio_two_left_header')
  let object5=document.querySelector('.portfolio_two_right')
  let object6=document.querySelector('.portfolio_three_left_text')
  let object7=document.querySelector('.portfolio_three_left_header')
  let object8=document.querySelector('.portfolio_three_right')
  let object9=document.querySelector('.mob_thrive')
  let object10=document.querySelector('.mob_history')
  let object11=document.querySelector('.mob_goodnews')
  let scrollWatch = window.scrollY;

  if (scrollWatch < scrollEvent) {
    // First remove portfolio
  if (scrollWatch <= 140) {
    object.classList.remove('portfolio_one_left_text_triggered');
    object1.classList.remove('portfolio_one_left_header_triggered');
    object2.classList.remove('portfolio_one_right_triggered');
    object9.classList.remove('mob_thrive_triggered');
  }
  // Second remove portfolio
  if (scrollWatch <= 350) {
    object3.classList.remove('portfolio_two_left_text_triggered');
    object4.classList.remove('portfolio_two_left_header_triggered');
    object5.classList.remove('portfolio_two_right_triggered');
    object10.classList.remove('mob_history_triggered');

  }
  // Third remove portfolio
  if (scrollWatch <= 550) {
    object6.classList.remove('portfolio_three_left_text_triggered');
    object7.classList.remove('portfolio_three_left_header_triggered');
    object8.classList.remove('portfolio_three_right_triggered');
    object11.classList.remove('mob_goodnews_triggered');

  }
}
  else if (scrollWatch > scrollEvent) {

    console.log(scrollWatch);
    if (scrollWatch >= 150) {
      // First portfolio
      object.classList.add('portfolio_one_left_text_triggered');
      object1.classList.add('portfolio_one_left_header_triggered');
      object2.classList.add('portfolio_one_right_triggered');
      object9.classList.add('mob_thrive_triggered');

    }
      //Second portfolio
    if (scrollWatch >= 300) {
      object3.classList.add('portfolio_two_left_text_triggered');
      object4.classList.add('portfolio_two_left_header_triggered');
      object5.classList.add('portfolio_two_right_triggered');
      object10.classList.add('mob_history_triggered');

      }
      // Third portfolio
    if (scrollWatch >= 500) {
      object6.classList.add('portfolio_three_left_text_triggered');
      object7.classList.add('portfolio_three_left_header_triggered');
      object8.classList.add('portfolio_three_right_triggered');
      object11.classList.add('mob_goodnews_triggered');

        }
  }
  scrollEvent = scrollWatch;
});
