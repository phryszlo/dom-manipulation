

window.addEventListener('DOMContentLoaded', () => {
  root = document.querySelector(':root')
  btn = document.querySelector('.change-color')
  btn.addEventListener('click', changeColor)
})

const animateThing = () => {
  console.log("click");
  screen.classList.toggle('fadey')
}


const colorClasses = [
  '#66f', '#f44', '#373', 'fuschia'
]
let index = 0
let prevColor = colorClasses[0]

const changeColor = () => {
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
  var rs = getComputedStyle(root);
  console.log(`current-color: ${rs.getPropertyValue('--current-color')}`);

  container.classList.remove('colorish');

  const el = container;
  let replacement = null
  if (typeof el === 'object' && el !== null && 'cloneNode' in el ) {
     replacement = el.cloneNode(true)
    el.replaceWith(replacement)
  }

  // // clone the container
  // container = el.parentNode.replaceChild(replacement, el)

  

  el.classList.add('colorish');
  prevColor = colorClasses[index]
  root.style.setProperty('--current-color', colorClasses[index])
  index = index === colorClasses.length - 1 ?
    0 : index + 1
  root.style.setProperty('--new-color', colorClasses[index])
}

let screen = document.querySelector('.img-container');
let container = document.querySelector('.outer-container')
let root
let btn