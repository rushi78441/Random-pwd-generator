
const slider=document.querySelector("input");
const value=document.querySelector(".value");
value.textContent=slider.value;
slider.oninput=function(){
  value.textContent=this.value;
}

function generatePassword() {
  const length = document.getElementById('myRange').value;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  let password = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
  }

  // Insert line breaks every 8 characters
  let formattedPassword = '';
  for (let i = 0; i < password.length; i += 8) {
      formattedPassword += password.slice(i, i + 8) + '\n';
  }

  if(length>5){
  document.getElementById('passwordBox').textContent = formattedPassword.trim(); 
}
else{
  alert('Enter password length at least 6')
}
}

  


