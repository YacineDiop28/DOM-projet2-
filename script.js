document.addEventListener('DOMContentLoaded',function(){
    // *****selecting ColorBox******
    const colorBox = document.getElementById('color-box')
    // *****Get The Change Color Button*****
    const changeColorBtn = document.getElementById('change-color-btn')
    // *****GetRondom Color Function*****
    function getRandomColor(){
        const letters = '0123456789ABCDEF';
        let color = '#';
        // create colors by selecting random letters
        for (let i = 0 ;i < 6 ; i++){
            color += letters[Math.floor(Math.random() *  16)];
        }
        return color;
    }
    changeColorBtn.addEventListener('click', function(){
        colorBox.style.backgroundColor = getRandomColor();
    })
})
