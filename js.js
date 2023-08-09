
    
  document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    let emailInput = document.getElementById('email');
    let email = emailInput.value;
    let emailError = document.getElementById('emailError');
    

    if (isValidEmail(email)) {
      emailError.textContent = '';
      var data = {
        email: email
      };

      var dataString = JSON.stringify(data);

      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'save_form_data.php', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('Data saved successfully.');
          // Здесь вы можете выполнить дополнительные действия после сохранения данных
          emailInput.value = 'Ваша заявка успішно відправлена';
          emailInput.style.border = '1px solid #000'
        
        }
      };
      xhr.send(dataString);
    } else {
      emailError.textContent = 'Некоректна адреса електронної пошти';
      emailError.style.color = 'red';
      emailInput.style.border = '1px solid red'
    }
  });

  function isValidEmail(email) {
    // Простая проверка адреса электронной почты с использованием регулярного выражения
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }