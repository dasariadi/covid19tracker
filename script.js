// defining variables

var myForm = document.getElementById('myForm');
// adding event listener
myForm.addEventListener('submit', function(e){

    e.preventDefault()

    var country = document.getElementById('country').value;
    
    // input fetch request to get COVID-19 data

    var url = `https://api.covid19api.com/total/dayone/country/${country}`

    fetch(url)
    .then((res) =>res.json())
    .then((res) => {
        var length = res.length
        var index = length - 1
    })
});
