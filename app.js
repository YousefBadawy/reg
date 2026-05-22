document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const studentId = document.getElementById('id').value;
    const email = document.getElementById('email').value;

    const registration = { name, studentId, email };
    localStorage.setItem('auc_registration', JSON.stringify(registration));

    alert('Course registration submitted successfully!');
    form.reset();
  });
});