document.addEventListener('DOMContentLoaded', typeWriter);

function typeWriter() {
  const text = 'Marlon Franca Rosa';
  let index = 0;
  const nameElement = document.getElementById('name');

  const typingEffect = setInterval(() => {
    nameElement.textContent = text.slice(0, ++index) + '|';
    if (index === text.length) clearInterval(typingEffect);
  }, 100);
  const theme = localStorage.getItem('theme');
      if (theme === 'dark') document.body.classList.add('dark');
}

function toggleTheme() {
      document.body.classList.toggle('dark');
      const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    }


function shareLink() {

  const link ='https://meu-curriculo-rouge.vercel.app/';
  const phoneNumber = '+559499202-5613';
  const message = `👋 Olá! Sou Marlon Rosa, Engenheiro de Software e Designer Gráfico. 
Tenho experiência com desenvolvimento em React, NextJS, JavaScript e design gráfico (Photoshop e Illustrator).
💡 Atualmente estou + trabalhando em projetos com Phoenix e Elixir. 
📌 Vamos conversar? 
Você pode me contatar diretamente aqui: ${phoneNumber}.
Confira meu currículo completo aqui: ${link}`;


window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
}


function downloadPDF() {
  const element = document.getElementById("curriculo");

  if (element) {
    html2pdf().from(element).save('Curriculo_Marlon_Rosa.pdf');
  } else {
    console.error("Currículo não encontrado!");
    alert("Erro: Currículo não encontrado!");
  }
}
