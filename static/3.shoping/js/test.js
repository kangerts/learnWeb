/* 以下代码控制台运行即可 */

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

getMax(1, 2, 5, 1, 2, 6, 7, 9, 3, 10)

/**
 * 冒泡排序
 */
function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr
}

sort([1, 2, 3, 11, 21, 10, 5, 101])

/**
 * 自定义回调函数
 */
function arrFilter(item) {
    return item > 5
}

[1, 3, 54, 2, 5, 7, 11].filter(arrFilter)



