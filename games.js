function show_more_less() {
    var dots= document.getElementById('dots');
    var moretext= document.getElementById('more');
    var mybtn= document.getElementById('mybtn');

    if (dots.style.display === 'none') {
        dots.style.display='inline';
        moretext.style.display='none';
        mybtn.innerHTML = 'Show more';
    }
    else{
        dots.style.display='none';
        moretext.style.display='inline';
        mybtn.innerHTML = 'Show less';
    }
}

function show_more_less_1() {
    var dot= document.getElementById('dot');
    var moretext1= document.getElementById('more1');
    var mybtn1= document.getElementById('mybtn1');

    if (dot.style.display === 'none') {
        dot.style.display='inline';
        moretext1.style.display='none';
        mybtn1.innerHTML = 'Show more';
    }
    else{
        dot.style.display='none';
        moretext1.style.display='inline';
        mybtn1.innerHTML = 'Show less';
    }
}

function show_more_less_2() {
    var dot2= document.getElementById('dot2');
    var moretext2= document.getElementById('more2');
    var mybtn2= document.getElementById('mybtn2');

    if (dot2.style.display === 'none') {
        dot2.style.display='inline';
        moretext2.style.display='none';
        mybtn2.innerHTML = 'Show more';
    }
    else{
        dot2.style.display='none';
        moretext2.style.display='inline';
        mybtn2.innerHTML = 'Show less';
    }
}