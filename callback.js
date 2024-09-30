//send function as an argument to other function
const func1 = (cb) => {
    cb()

}

const func2 = () => {
    console.log("I am in function 2")
}
func1(func2);

//eg. of callback function
