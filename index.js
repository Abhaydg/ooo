document.getElementById('validation-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const certificateId = document.getElementById('certificate-id').value;
  const resultText = document.getElementById('result-text');

  // Dummy logic
  resultText.textContent = certificateId === 'VOC2025CERT'
    ? 'Certificate Verified Successfully!'
    : 'Invalid Certificate ID.';

  document.getElementById('result-modal').style.display = 'flex';
});

function closeModal() {
  document.getElementById('result-modal').style.display = 'none';
}
