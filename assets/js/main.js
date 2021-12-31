const btn = document.querySelector('.sub-btn')
const modal = document.querySelector('.sub-modal')
const overlay = document.querySelector('.overlay')
const exit = document.querySelector('.exit')
const bannerBtn = document.querySelector('.banner-btn')

function open()
{
    modal.style.display='block';
    overlay.style.display='block'
}
function close()
{
    modal.style.display='none';
    overlay.style.display='none'
}
btn.addEventListener('click', ()=>
{
    open();
})

bannerBtn.addEventListener('click', ()=>
{
    open()
})

exit.addEventListener('click', ()=>
{
    close();
})

overlay.addEventListener('click', ()=>
{
    close();
})