const n = 6
const w = 2100
const N = 131072

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

const getCorrelation = (x, y = null) => {
    if(y === null) {
        y = x
        console.log("AutocorrelationTime:")
    } else {
        console.log("CorrelationTime:")
    }

    let startTime = Date.now()
    let meanX = getMean(x)
    let meanY = getMean(y)

    const result = []
    for(let i = 0; i < N; i++) { 
        let sum = 0
        for(let j = 0;j < N-i; j++) {
            sum += (x[j].y - meanX)*(y[j+i].y - meanY)
        }
        //console.log(sum)
        result.push({y: sum/(N - 1)})
    }
    let endTime = Date.now()
    console.log(endTime - startTime)
    return result

}

