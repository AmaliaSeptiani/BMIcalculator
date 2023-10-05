document.getElementById('card').addEventListener('submit', function(e){
    e.preventDefault()
    var height = document.getElementById('height')
    var weight = document.getElementById('weight')
    var h = height.value
    var w = weight.value
    var hasil = w/(h/100)^2
    if(hasil<18.5){
        var categories = 'Underweight'
    }else if(hasil = 18.5 && 24.9){
        var categories = 'Normal Weight'
    }else if(hasil = 25 && 29.9){
        var categories = 'Overweight'
    }else{
        var categories = 'Obesity'
    }
    document.getElementById('hasil').innerText='Your BMI is '+hasil+' which mean You are '+categories
})