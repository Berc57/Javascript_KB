function derekszoge(){
    var a = parseInt(document.getElementById("aoldal").value)
    var b = parseInt(document.getElementById("boldal").value)
    var c = parseInt(document.getElementById("coldal").value)
    if (a*a + b*b == c*c){
        document.write("Derékszögű")
        }
    else{
        document.write("Nem derékszögű")
        }
    document.write("<br>")
    document.write("<br>")
    if (a < b + c && b < a + c && c < a + b){
        document.write("Háromszög")
        }
    else{
        document.write("Nem háromszög")
        }
    }

function meteratvalt(){
    var m = parseInt(document.getElementById("meter").value)

    document.write("Km: " + m * 1000)
    document.write("<br>")
    document.write("Láb (feet): " + m * 3.28)
    document.write("<br>")
    document.write("Mérföld (mile): " + m / 1609.3)
    document.write("<br>")
    document.write("Yard: " + m * 0.9144)
    document.write("<br>")
    document.write("Inch: " + m * 0.0254)
}