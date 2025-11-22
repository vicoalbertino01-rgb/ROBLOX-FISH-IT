async function load(){
  try{
    const res = await fetch('/public/accounts.json');
    const data = await res.json();
    const c = document.getElementById('container');
    c.innerHTML='';
    data.accounts.forEach(acc=>{
      const div=document.createElement('div');
      div.className='card';
      div.innerText=acc.username + ' (ID: ' + acc.userid + ')';
      c.appendChild(div);
    });
  }catch(e){
    document.getElementById('container').innerText='Gagal memuat akun.';
  }
}
load();
setInterval(load,5000);
