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
    new Training("Weight training plan for beginners from 2 lessons per week", "Male", "light", "ectomorph", "rarely", "easy", "This program is written for complete beginners who have time for only 2 workouts per week. However, even if you are a beginner, I advise you to start with 3 workouts. But not everyone has such an opportunity. Training will be a separate method (that is, rest after each approach), and at each training session you will gradually train all the muscles. This approach is called fullbadi. You will have 7 exercises for each workout. Someone may say that this is a lot for a beginner. Well, if you think so and / or unsure of your abilities, then do all the exercises so far with only 2 working approaches. Then training will be simpler, and you completely meet the hour. But in the future, I still advise you to return to the 3 working approaches in all exercises."),
    new Training("Training program for men on weight and terrain", "Male", "average", "endomorph", "often", "hard", "The first 4 approaches you do for 5 repetitions. The first of the four four approaches is a warm-up approach with a low weight, and the remaining 3 need to work with the highest possible weight, which you can do for 5 repetitions. The last 5th approach is done with low weight. But to the maximum of repetitions, so to speak - to the stop."),
    new Training("Female 2-time slimming workout plan for beginners", "Female", "heavy", "ectomorph", "often", "easy", "This plan is quite simple and designed specifically for beginners who are going to train 2 times a week. I must say right away that for weight loss it is advisable to exercise more often, but not everyone can afford it. At each training session you will have 6 exercises for all muscle groups. This approach is called “fullbadi” (whole body). This will be the power unit. A cardio will consist of 4 segments of 5 minutes. Thus, together with a warm-up and a hitch, training should be at least 60 minutes, and a maximum of 90.")
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
    
    if (localStorage.getItem('q1') == 'Male') {
      result = trainings.filter(t => t.sex == 'Male');

      if(localStorage.getItem('q2') == 'light'){
        result = result.filter(t => t.weight == 'light');

        if(localStorage.getItem('q3') == 'ectomorph'){
          result = result.filter(t => t.body == 'ectomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        } else if(localStorage.getItem('q3') == 'endomorph'){
          result = result.filter(t => t.body == 'endomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        } else if(localStorage.getItem('q3') == 'mesomorph'){
          result = result.filter(t => t.body == 'mesomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        }

      } else if(localStorage.getItem('q2') == 'average'){
        result = result.filter(t => t.weight == 'average');

        if(localStorage.getItem('q3') == 'ectomorph'){
          result = result.filter(t => t.body == 'ectomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        } else if(localStorage.getItem('q3') == 'endomorph'){
          result = result.filter(t => t.body == 'endomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        } else if(localStorage.getItem('q3') == 'mesomorph'){
          result = result.filter(t => t.body == 'mesomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        }

      } else if(localStorage.getItem('q2') == 'heavy'){
        result = result.filter(t => t.weight == 'heavy');

        if(localStorage.getItem('q3') == 'ectomorph'){
          result = result.filter(t => t.body == 'ectomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        } else if(localStorage.getItem('q3') == 'endomorph'){
          result = result.filter(t => t.body == 'endomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        } else if(localStorage.getItem('q3') == 'mesomorph'){
          result = result.filter(t => t.body == 'mesomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        }

      }

    } else {
      result = trainings.filter(t => t.sex != 'Male');

      if(localStorage.getItem('q2') == 'light'){
        result = result.filter(t => t.weight == 'light');

        if(localStorage.getItem('q3') == 'ectomorph'){
          result = result.filter(t => t.body == 'ectomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        } else if(localStorage.getItem('q3') == 'endomorph'){
          result = result.filter(t => t.body == 'endomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        } else if(localStorage.getItem('q3') == 'mesomorph'){
          result = result.filter(t => t.body == 'mesomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        }

      } else if(localStorage.getItem('q2') == 'average'){
        result = result.filter(t => t.weight == 'average');

        if(localStorage.getItem('q3') == 'ectomorph'){
          result = result.filter(t => t.body == 'ectomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        } else if(localStorage.getItem('q3') == 'endomorph'){
          result = result.filter(t => t.body == 'endomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        } else if(localStorage.getItem('q3') == 'mesomorph'){
          result = result.filter(t => t.body == 'mesomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        }

      } else if(localStorage.getItem('q2') == 'heavy'){
        result = result.filter(t => t.weight == 'heavy');

        if(localStorage.getItem('q3') == 'ectomorph'){
          result = result.filter(t => t.body == 'ectomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        } else if(localStorage.getItem('q3') == 'endomorph'){
          result = result.filter(t => t.body == 'endomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        } else if(localStorage.getItem('q3') == 'mesomorph'){
          result = result.filter(t => t.body == 'mesomorph');

          if(localStorage.getItem('q4') == 'often'){
            result = result.filter(t => t.frequency == 'often');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          } else if(localStorage.getItem('q4') == 'rarely'){
            result = result.filter(t => t.frequency == 'rarely');

            if(localStorage.getItem('q5') == 'easy'){
              result = result.filter(t => t.level == 'easy');
            } else if(localStorage.getItem('q5') == 'middle'){
              result = result.filter(t => t.level == 'middle');
            } else if(localStorage.getItem('q5') == 'hard'){
              result = result.filter(t => t.level == 'hard');
            }

          }

        }
        
      }

    }

    if(result.length == 0){
      result = trainings;
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