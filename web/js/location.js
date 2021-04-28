<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="edge">
    <script>
    window.onload = function(){
      var btn = new Btn();
      btn.init({width:300});
      bindEvent(btn,'show',function(){
        alert(1);
      })
      bindEvent(btn,'click',function(){
        alert(2);
      })
      var oBtn = document.getElementById('btn');
      oBtn.onclick = function (){
        fireEvent(btn,'show');
      }
    }
      function Btn(){
        this.btn= null;
        this.settings = {
          width:200,
          height:40,
          borderRadius:6,
          text :'按钮'
        };
      }
      Btn.prototype.init = function (opt){

        extend(this.settings,opt);
        this.creat();
      }
      Btn.prototype.creat = function (){
        this.btn =document.createElement('div');

        document.body.appendChild(this.btn);
        this.btn.innerHTML = this.settings.text;
        this.setData();
      }
      Btn.prototype.destory = function (){
        document.body.removeChild(this.btn);
      }
      Btn.prototype.setData = function (){
        this.btn.style.width = this.settings.width +'px';
        this.btn.style.height = this.settings.height +'px';
        this.btn.style.border ='solid #f00 '+ this.settings.borderRadius +'px';

      }
    function extend(obj1,obj2){
      for(var attr in obj2){
        obj1[attr] = obj2[attr];
      }
    }
    function bindEvent(obj,events,fn){
      obj.listeners = obj.listeners || {};
      obj.listeners[events] = obj.listeners[events] || [];
      obj.listeners[events].push( fn );
      if(obj.nodeType){
        if(obj.addEventListener){
          obj.addEventListener(events,fn,false);
        }else{
          obj.attachEvent('on'+events,fn);
        }
      }
    }
    function fireEvent (obj,events){
      if(obj.listeners[events]){
        for(var i in obj.listeners[events]){
          obj.listeners[events][i]();
        }
      }
    }
    </script>
  </head>
  <body>
  <a id="btn" style="margin-top: 40px;" >12</a>
  </body>
</html>