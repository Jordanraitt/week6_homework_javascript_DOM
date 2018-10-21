document.addEventListener('DOMContentLoaded', () =>{
  console.log('Hi Jordan!, You\'re the best! By the way Javascript is loaded. Have a good day. P.S. Look out for those errors!!!' );

  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#delete-all');
  button.addEventListener('click', handleButtonClick);
});

const handleFormSubmit = function (event){
  event.preventDefault();

  const name = document.createElement('h3');
  const age = document.createElement('p');
  const house = document.createElement('p');

  name.textContent = `${this.first_name.value} ${this.last_name.value}`;
  age.textContent = `${this.age.value}`;
  house.textContent = `${this.house.value}`;

  const result = document.querySelector('#notStudents');
  result.appendChild(name);
  result.appendChild(age);
  result.appendChild(house);
  document.getElementById('form').reset();
};

const handleButtonClick = function (){
  const result = document.getElementById('notStudents').textContent = ''
};
