## 基于Zepto的弹出框组件 

标签（空格分隔）： Zepto Popup Toast

---
主要是用在移动端的弹出框组件，使用Zepto，也兼容jQuery。主要有两个功能：

 1. Popup
    HTML中弹出框需要设置display: none;

    ```
    <div id="my-popup" style="display: none;">
        <input type="text" name="name">
        <input type="text" name="address">
        <button id="ok">Ok</button>
        <button id="close">Close</button>
    </div>
    ```
    
    在javascript中初始化弹出框，有两个参数需要注意下，第一个direction表示弹出框从window的哪个边界弹出，目前只支持bottom，可以暂时不用管它。height为弹出框的最大高度，默认为屏幕高度的80%，当弹出框高度大于80%时将会出现滚动条。
    ```
    var zPopipDialog;
    window.onload = function() {
        //初始化弹出框
        var option = {
            direction: 'bottom',
            height: '80%'
        };
        zPopipDialog = $('#my-popup').ZPopup();
    }
    ```
    
    需要使用时，只需要
    ```
    zPopipDialog.show();
    ```
    
    关闭弹出框时：
    ```
    zPopipDialog.close();
    ```
 2. Toast
    HTML中可以使用你喜欢的任何标签，顺便加上class: zepto-popup-toast。

    ```
    <p id="toast-info" class="zepto-popup-toast"></p>
    ```
    
    同样也需要在javascript中初始化Toast，需要注意的是，初始化时要加上toast参数。
    ```
    var zPopipToast;
    window.onload = function() {
        //初始化弹出框
        zPopipToast = $('#toast-info').ZPopup('toast');
    }
    ```
    
    使用方法如下，两个参数分别为要显示的信息和Timeout。Timeout默认为4500ms。
    ```
    toast.showToast('toast info', 5000);
    ```

