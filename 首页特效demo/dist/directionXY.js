
/**
 * 
 * @param  ele 要确定方向的标签
 * @param  e   事件对象
 * @return text 返回4个方向分别为“top”，“right”，“bottom”，“left”
 */

function directionXY(ele, e) {
    var height = ele.offsetHeight
    var width = ele.offsetWidth;
    var x = (e.pageX - ele.offsetLeft - width / 2) * (width > height ? height / width : 1);
    var y = (e.pageY - ele.offsetTop - height / 2) * (height > width ? width / height : 1);
    var atan2 = Math.atan2(y, x);
    var deg = (Math.atan2(y, x) * 180 / Math.PI + 45);
    var direction = Math.ceil(deg / 90);
    var text = null;
    switch (direction) {
        case 0:
            text = "top";
            break;
        case 1:
            text = "right";
            break;
        case 2:
            text = "bottom";
            break;
        case -1:
            text = "left";
            break;
        case 3:
            text = "left";
            break;
    }
    return text;
}