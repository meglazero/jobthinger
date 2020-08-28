function showMtn1() {
    document.querySelector('.mtn1').style.display = ''
    document.querySelector('.btn1').id = 'selected'
    document.querySelector('.mtn2').style.display = 'none'
    document.querySelector('.btn2').id = 'none'
}

function showMtn2() {
    document.querySelector('.mtn2').style.display = ''
    document.querySelector('.btn2').id = 'selected'
    document.querySelector('.mtn1').style.display = 'none'
    document.querySelector('.btn1').id = 'none'
}