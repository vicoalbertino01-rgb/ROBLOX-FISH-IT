async function load() {
  try {
    const res = await fetch('/accounts.json'); // HARUS root, bukan /public/
    const data = await res.json();

    const container = document.getElementById('container');
    container.innerHTML = '';

    data.accounts.forEach(acc => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <strong>${acc.username}</strong><br>
        UserID: ${acc.userid}
      `;
      container.appendChild(div);
    });

  } catch (err) {
    document.getElementById('container').innerText = 'Gagal memuat data akun!';
  }
}

load();
setInterval(load, 5000);
