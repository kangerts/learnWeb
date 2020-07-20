/**
 * 获取最大值
 */
function getMax() {
    let max = arguments[0]
    for (let i = 0; i <= arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max
}

getMax(1,2,5,1,2,6,7,9,3,10)