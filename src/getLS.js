import { refs } from './refs';
function getDataLS() {
  const getLocalStorage = localStorage.getItem('KEY');
  if (getLocalStorage) {
    const getDate = JSON.parse(getLocalStorage);
    function createMarkup(value) {
      return value
        .map(el => {
          return `
         <li id=${el.id}>
         ${el.name}
         <button class="btn-card btn">Delete</button>
         </li>
      `;
        })
        .join('');
    }

    refs.list.insertAdjacentHTML('beforeend', createMarkup(getDate));
  }
  const btnDelete = document.querySelectorAll('.btn-card');
  btnDelete.forEach(el => {
    el.addEventListener('click', function (e) {
      const idEl = e.target.closest('li').id;

      const getLocalStorage = localStorage.getItem('KEY');
      if (getLocalStorage) {
        const getDate = JSON.parse(getLocalStorage);
        const array = Array.from(getDate);
        const newArr = array.filter(el => el.id !== idEl);
        localStorage.setItem('KEY', JSON.stringify(newArr));
        refs.list.innerHTML = '';
        getDataLS();
      }
      // refs.list.removeChild(e.target.closest('li'));
      // localStorage.removeItem('KEY');
    });
  });
}
export { getDataLS };
