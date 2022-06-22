const menuItems = document.querySelectorAll('a');
const scrollSpySections = document.querySelectorAll('.section');
const menuNav = document.querySelector('nav');
const lastSection = document.querySelector('a:last-of-type');
let menuHeight = menuNav.clientHeight;
let sectionThirdHeight = 200;

const handleScrollSpy = () => {
  if(document.body.classList.contains('main-page')){
    const sections = [];
    scrollSpySections.forEach(section => {
      // console.log(window.scrollY);
      // console.log(section.offsetTop);
      // console.log(section.offsetHeight);

      if(window.scrollY <= section.offsetTop + section.offsetHeight - menuHeight){
        sections.push(section);
        
        const activeSection = document.querySelector(`[href*="${sections[0].id}"]`);

        menuItems.forEach(item => {
          item.classList.remove('active');
        })
        activeSection.classList.add('active');
      }

      if(window.innerHeight + window.scrollY >= document.body.offsetHeight - sectionThirdHeight){
        menuItems.forEach(item => {
          item.classList.remove('active');
        })
        lastSection.classList.add('active');
      }
    })

  }
}

window.addEventListener('scroll', handleScrollSpy);