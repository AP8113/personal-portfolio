document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  try {
    const res = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    document.getElementById('alert').textContent = result.message;
    e.target.reset();
  } catch {
    document.getElementById('alert').textContent = 'Error sending message.';
  }
});
