import axios from 'axios'

async function sendData(canvas) {
    const file = canvas.toDataURL("image/png");
    let data = new FormData();
    data.append('img', file)
    axios.post(`http://localhost:14022/classify`, data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}

export default sendData;