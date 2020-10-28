function generateJoke() {
    // API
    const request = new XMLHttpRequest();

    request.open('GET', 'https://api.icndb.com/jokes', true)
    request.onload = function () {
        const data = JSON.parse(this.response);
        console.log(data.value);
        const length= Object.keys(data.value).length;
        console.log(length);

        const item = data.value[Math.floor(Math.random() * length)];
        console.log(item);
        document.getElementById('joke').innerHTML = `${item.joke}`;
    }
    request.send();
};

