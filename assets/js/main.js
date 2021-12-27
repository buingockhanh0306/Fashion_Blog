var cmt = document.querySelector('.comment');
var btn = document.querySelector('.btn')
console.log(btn)
function showComment()
{
    cmt.classList.add('comment-block')
}
function hiddenComment()
{
    cmt.classList.remove('comment-block')
}
console.log(cmt.classList.contains('comment-block'))
if(cmt.classList.contains('comment-block'))
{
    btn.addEventListener('click', showComment)
}
