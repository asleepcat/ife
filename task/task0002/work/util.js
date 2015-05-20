/**
 * Created by ZhangHao on 2015/5/20.
 */
a=[1,"s","s"];
//�ж�һ�������Ƿ�������
function isArray(arr){
    return Object.prototype.toString.call(arr) === '[object Array]';
}
//�ж�һ�������Ƿ��Ǻ���
function isFunction(fun){
    return Object.prototype.toString.call(fun) === "[object Function]"
}
function testIs(){
    console.log(isArray(a));
}
//��ȿ�¡���󣬲���Json���л�����ķ�ʽ
function cloneObject(obj) {
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj), //ϵ�л�����
            newobj = JSON.parse(str); //��ԭ
    }
    else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ?
                cloneObj(obj[i]) : obj[i];
        }
    }
    return newobj;
}

// ����������
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