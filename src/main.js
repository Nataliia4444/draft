import { refs } from './refs';
import { getDataLS } from './getLS';
import { v4 as uuidv4 } from 'uuid';

const data = [];

let getLocalStorage = localStorage.getItem('KEY');
if (getLocalStorage) {
  const getDate = JSON.parse(getLocalStorage);
  getDate.map(el => data.push(el));
}

refs.btnAdd.addEventListener('click', onClickBtnAdd);
document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') onClickBtnAdd();
});
function onClickBtnAdd(e) {
  if (refs.input.value.trim().length > 0) {
    const li = document.createElement('li');
    li.id = uuidv4();

    li.textContent = refs.input.value;
    refs.list.appendChild(li);

    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn-card btn';
    btnDelete.textContent = 'Delete';
    li.appendChild(btnDelete);

    const btnWrite = document.createElement('button');
    btnWrite.textContent = 'Write';
    li.appendChild(btnWrite);

    btnDelete.addEventListener('click', function (e) {
      refs.list.removeChild(li);

      const getLocalStorage = localStorage.getItem('KEY');
      if (getLocalStorage) {
        const getDate = JSON.parse(getLocalStorage);
        const array = Array.from(getDate);
        const newArr = array.filter(el => el.id !== idEl);
        localStorage.setItem('KEY', JSON.stringify(newArr));
        refs.list.innerHTML = '';
        getDataLS();
      }
    });
    refs.input.value = '';

    btnWrite.addEventListener('click', function () {
      const el = btnWrite.parentNode.firstChild;
      const taskName = {
        name: el.textContent,
        id: el.parentElement.id,
      };

      data.push(taskName);
      btnWrite.disabled = true;
      btnWrite.classList.add('btn-disabled');

      console.log(data, 'newArr');

      localStorage.setItem('KEY', JSON.stringify(data));
    });
  }
}
refs.btnWriteName.addEventListener('click', e => {
  refs.inputName.placeholder = `${refs.inputName.value}`;
  refs.inputName.value = '';
});
getDataLS();
