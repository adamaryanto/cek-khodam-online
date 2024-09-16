const inputName = document.getElementById('inputName')
const btn = document.getElementById('btn')
const btnReset = document.getElementById('btnReset')
const hasil = document.getElementById('hasil')
const wrapper = document.getElementById('wrapper')
const loader = document.getElementById('loader')
function check(){
    let kodam = ['Tuyul Mati', 'Kecubung Jumbo', 'Tikus Tanah', 'Jawa Irenk', 'Sunda Irenk', 'Kuda mulet']
    let generate = kodam[~~( kodam.length * Math.random())]
    if(inputName.value){
        loader.style.display = 'block'
        btn.style.display = 'none'
        wrapper.style.filter = 'blur (10px)'
        setTimeout(() => {
            hasil.innerHTML =  `${inputName.value} Kodam Kamu Adalah ${generate}`
            loader.style.display = 'none'
            btnReset.style.display = 'block'
            wrapper.style.filter = 'none'
        }, 2000);

    }else{
        alert('Masukan Nama')
    }
    
}
function reset(){
    location.reload()
}