const n = 6
const w = 2100
const N = 1024

const getSignal = () => { 
    const x = []
    while(x.length != N) {
        x.push({y: 0})
    }

    for(let i = 0; i < n; i++) {
        const omega = w/n * (i + 1);
        const A = Math.random();
        const Fi = Math.random();

        for(let t = 0; t < N; t++) {
            x[t].y += A * Math.sin(omega * t + Fi)
        }
    }
    
    return x
} 

const getMean = (arrOfValues) => {
    let sum = 0;
    for(let i = 0; i < arrOfValues.length; i++) {
        sum += arrOfValues[i].y;
    } 
    return sum/arrOfValues.length
}

const getVariance = (arrOfValues, mean) => {
    let sum = 0;
    for(let i = 0; i < arrOfValues.length; i++) {
        sum += Math.pow(arrOfValues[i].y - mean, 2);
    }
    return sum/(arrOfValues.length - 1)
}
