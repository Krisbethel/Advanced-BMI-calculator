function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const muscleMass = parseFloat(document.getElementById("muscleMass").value) || 0;
    const bodyFat = parseFloat(document.getElementById("bodyFat").value) || 0;
    const waistToHip = parseFloat(document.getElementById("waistToHip").value) || 0;

    if (isNaN(weight) || isNaN(height)) {
      document.getElementById("result").textContent = "Please enter valid weight and height.";
      return;
    }

    const bmi = (weight / (height * height)) * 703;
    const adjustedBMI = bmi + muscleMass - bodyFat - waistToHip;
    let resultText = "Your Advanced BMI: " + adjustedBMI.toFixed(2) + "<br>";

    if (adjustedBMI < 18.5) {
      resultText += "Underweight";
    } else if (adjustedBMI >= 18.5 && adjustedBMI < 24.9) {
      resultText += "Normal Weight";
    } else if (adjustedBMI >= 25 && adjustedBMI < 29.9) {
      resultText += "Overweight";
    } else {
      resultText += "Obese";
    }

    document.getElementById("result").innerHTML = resultText;
  }