setTimeout(() => {
    document.getElementById("workspace").innerHTML = 10
    setTimeout(() => {
        document.getElementById("workspace").innerHTML = 9
        setTimeout(() => {
            document.getElementById("workspace").innerHTML = 8
            setTimeout(() =>{
                document.getElementById("workspace").innerHTML = 7
                setTimeout(() =>{
                    document.getElementById("workspace").innerHTML = 6
                    setTimeout(() => {
                        document.getElementById("workspace").innerHTML = 5
                        setTimeout(() =>{
                            document.getElementById("workspace").innerHTML = 4
                            setTimeout(()=>{
                                document.getElementById("workspace").innerHTML = 3
                                setTimeout(() =>{
                                    document.getElementById("workspace").innerHTML = 2
                                    setTimeout(()=>{
                                        document.getElementById("workspace").innerHTML = 1
                                        setTimeout(()=>{
                                            document.getElementById("workspace").innerHTML = "Happy Independence day!!!"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    }, 1000)
}, 2000)

// call back using set Interval

// var i = 0;
// var arr = [10,9,8,7,6,5,4,3,2,1,"Happy Independence day!!!"]

// function timer(){

//         document.getElementById("workspace").innerHTML = arr[i]
//         i++
    
// }
// var setInterval = setInterval(timer,1000)

// setTimeout(() => {
//     clearInterval(setInterval)
// },11000);
