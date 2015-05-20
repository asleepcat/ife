/**
 * Created by ZhangHao on 2015/5/20.
 */
a=[1,"s","s"];
//判断一个对象是否是数组
function isArray(arr){
    return Object.prototype.toString.call(arr) === '[object Array]';
}
//判断一个类型是否是函数
function isFunction(fun){
    return Object.prototype.toString.call(fun) === "[object Function]"
}
function testIs(){
    console.log(isArray(a));
}
//深度克隆对象，采用Json序列化对象的方式
function cloneObject(obj) {
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj), //系列化对象
            newobj = JSON.parse(str); //还原
    }
    else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ?
                cloneObj(obj[i]) : obj[i];
        }
    }
    return newobj;
}

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"