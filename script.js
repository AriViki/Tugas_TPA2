function checkNumber(num) {
    return num <= 0 ? false : true;
}

function checkBmi() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    if(checkNumber(weight) && checkNumber(height)){
        const bodyHeight = (height/100);
        const bmi = (weight/(bodyHeight * bodyHeight));
        let status;
        if(bmi>=30){
            status = "Obesity"
        }else if(bmi >= 25 && bmi < 30){
            status = "Overweight"
        }else if(bmi >= 18.5 && bmi < 25){
            status = "Normal Weight"
        }else if(bmi < 18.5){
            status = "underweight"
        }else{
            status = "INPUT WRONG !"
        }
        document.getElementById("hasil").innerHTML = "Your BMI is <b>"+bmi.toFixed(1)+"</b> which means You are <b>"+status+"</b>";
    }
}
