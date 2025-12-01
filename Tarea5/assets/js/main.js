// Seleccionamos el botón por su ID y añadimos un evento de clic
document.getElementById('btnTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});