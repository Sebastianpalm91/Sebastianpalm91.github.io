//Mobile script animation
window.addEventListener('scroll', function() {
var portfolioOneLeft = document.querySelector('.portfolio_one_left');
var portfolioOneRight = document.querySelector('.portfolio_one_right');
var portfolioTwoLeft = document.querySelector('.portfolio_two_left');
var portfolioTwoRight = document.querySelector('.portfolio_two_right');
var portfolioThreeLeft = document.querySelector('.portfolio_three_left');
var portfolioThreeRight = document.querySelector('.portfolio_three_right');
let scrollWatch = window.scrollY;
let scrollEvent = 0;
if (scrollWatch > scrollEvent) {

  console.log(scrollWatch);
portfolioOneLeft.addEventListener('click', function(){
  portfolioOneLeft.classList.toggle('portfolio_one_left_triggeredMobile');
  portfolioOneRight.classList.toggle('portfolio_one_right_triggeredMobile');
});
portfolioTwoLeft.addEventListener('click', function(){
  portfolioTwoLeft.classList.toggle('portfolio_two_left_triggeredMobile');
  portfolioTwoRight.classList.toggle('portfolio_two_right_triggeredMobile');
});
portfolioThreeLeft.addEventListener('click', function(){
  portfolioThreeLeft.classList.toggle('portfolio_three_left_triggeredMobile');
  portfolioThreeRight.classList.toggle('portfolio_three_right_triggeredMobile');
});

}
else if (scrollWatch > scrollEvent) {
}
scrollEvent = scrollWatch;
});
