document.getElementById('card').addEventListener('submit', function(e){
    e.preventDefault();
    var height = document.getElementById('height');
    var weight = document.getElementById('weight');
    var h = height.value;
    var w = weight.value;
    var hasil = w / (h / 100) ** 2;

    var categories;

    if (hasil < 18.5) {
        categories = 'Underweight';
    } else if (hasil >= 18.5 && hasil <= 24.9) {
        categories = 'Normal Weight';
    } else if (hasil >= 25 && hasil <= 29.9) {
        categories = 'Overweight';
    } else {
        categories = 'Obesity';
    }

    document.getElementById('hasil').innerText = 'Your BMI is ' + hasil.toFixed(2) + ' which means you are ' + categories;
});
