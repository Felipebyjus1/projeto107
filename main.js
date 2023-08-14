// https://teachablemachine.withgoogle.com/models/b9A8W9umc/

var classificação;

function iniciar() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classificação = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/b9A8W9umc/model.json", carregarModelo)

}

function carregarModelo() {
    console.log("modeloCarregado")
    classificação.classify(pegarResultados)
}

function pegarResultados(error, resultado) {
    if (error) {
        console.log(error)
    }
    else {
        //console.log(resultado)
        var som = resultado[0].label
        var precissão = resultado[0].confidence

        r = Math.floor(Math.random() * 255 + 1)
        g = Math.floor(Math.random() * 255 + 1)
        b = Math.floor(Math.random() * 255 + 1)

        var cor = `rgb(${r}, ${g}, ${b})`
        document.getElementById("som").innerHTML = som
        document.getElementById("precisão").innerHTML = (precissão * 100).toFixed(2) + "%"

        document.getElementById("som").style.color = cor
        document.getElementById("precisão").style.color = cor

        var img1 = document.getElementById("img")

        if (som == "latido") {
            img1.src = "dog-gif.gif"


        }
        else if (som == "miado") {
            img1.src = "cat.gif"

        }

        else if (som == "rugido") {
            img1.src = "leão.gif"

        }

        else {
            img1.src = "som.png"
        }
    }
}