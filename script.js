var input = document.getElementById('input');
input.addEventListener('change',function(){
    readXlsxFile(input.file[0]).then(function(){
        console.log(data);
    })

});