function Training(title, sex, weight, body, frequency, level, paragraph) {
    this.title = title,
    this.sex = sex,
    this.weight = weight,
    this.body = body,
    this.frequency = frequency,
    this.level = level,
    this.paragraph = paragraph
  }
  
  let trainings = [
    new Training("Разминка", "Male", "light", "ectomorph", "often", "easy", "Подкачаться 10 раз"),
    new Training("Подтягивания", "Female", "average", "ectomorph", "often", "easy", "Подкачаться 110 раз"),
    new Training("Try to work", "Male", "heavy", "ectomorph", "often", "easy", "ok dude")
  ];
  
  document.getElementById('test').addEventListener("submit", function (event) {
    event.preventDefault();
    let q1Inputs = document.getElementsByName('q1');
    let q2Inputs = document.getElementsByName('q2');
    let q3Inputs = document.getElementsByName('q3');
    let q4Inputs = document.getElementsByName('q4');
    let q5Inputs = document.getElementsByName('q5');
    let checkedValue = '';
    q1Inputs.forEach(function (input) {
      if (input.checked) checkedValue = input.value;
    });
    localStorage.setItem('q1', checkedValue);
    
    q2Inputs.forEach(function (input) {
        if (input.checked) checkedValue = input.value;
    });
    localStorage.setItem('q2', checkedValue);

    q3Inputs.forEach(function (input) {
      if (input.checked) checkedValue = input.value;
    });
    localStorage.setItem('q3', checkedValue);

    q4Inputs.forEach(function (input) {
      if (input.checked) checkedValue = input.value;
    });
    localStorage.setItem('q4', checkedValue);

    q5Inputs.forEach(function (input) {
      if (input.checked) checkedValue = input.value;
    });
    localStorage.setItem('q5', checkedValue);
  
    getTrainings();
  });
  
  let getTrainings = function () {
    let result = [];
    
    if ((localStorage.getItem('q2') == 'heavy') && (localStorage.getItem('q1') == 'Male')) {
      result = trainings.filter(t => t.weight == 'heavy').filter(t => t.sex == 'Male');
    } else {
      result = trainings.filter(t => t.weight != 'heavy').filter(t => t.sex != 'Male');
    }
  
    let container = document.getElementById('list');
    container.innerHTML = '';
    result.forEach(function (training) {
      let title = document.createElement('h2');
      title.innerText = training.title;
      let paragraph = document.createElement('p');
      paragraph.innerText = training.paragraph;
      let card = document.createElement('div');
      card.appendChild(title);
      card.appendChild(paragraph);
      card.classList.add('card');
      container.appendChild(card);
    });
  }
  
  getTrainings();