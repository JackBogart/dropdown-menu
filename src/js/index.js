import '../css/style.css';

export function isToggled(element) {
  return element.classList.contains('visible');
}

export function toggleDropdown(element) {
  element.classList.toggle('visible');
}
