// function otpGenrator(){
//     let otp = math.random();
//     console.log(math.round(otp*10000));
// }

// otpGenrator();
// otpGenrator();
// otpGenrator();
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }
  
  console.log(generateOTP());