// defining variables

var today = new Date();
console.log(today);
document.getElementById('today').append(today)

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
        var confirmed = document.getElementById('confirmed')
        var recovered = document.getElementById('recovered')
        var deaths = document.getElementById('deaths')

        confirmed.innerHTML = ''
        recovered.innerHTML = ''
        deaths.innerHTML = ''

        confirmed.append("Total Confirmed: " + res[index].Confirmed)
        recovered.append("Total Recovered: " + res[index].Recovered)
        deaths.append("Total Deaths: " + res[index].Deaths)
    })
});
