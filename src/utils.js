export const getError = (error) => {
    if (error.response && error.response.data && error.response.data.message) {
      return error.response.data.message;
    } else if (error.message) {
      return error.message;
    } else {
      return "An error occurred.";
    }
  };
  

export function validation(values) {
    const errors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;


    // if(values.name === "") {
    //     errors.name = "Name is Required";
    // }

    if(values.email === "") {
        errors.email = "Email is required";
    } else if(!emailPattern.test(values.email)) {
        errors.email = "Email is not valid";
    } 

    if(values.password === "") {
        errors.password = "Password required"
    } else if(!passwordPattern.test(values.password)) {
        errors.password = "Password is not valid";
    } 

    return errors;
}