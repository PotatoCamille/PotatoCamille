// 优先执行
window.onload=function() {
    let lunboimg = document.querySelectorAll('.lunboimg>a')
    let leftBtn = document.querySelector('.leftBtn')
    let rightBtn = document.querySelector('.rightBtn')
    let btnlist = document.querySelectorAll('.btnlist>span')
    let index = 0;
    let time ;
    autoPlay();
    btnClick();
    function autoPlay(){
        time = setInterval(() => {
            index==lunboimg.length-1?index=0:index++;
            public();
        }, 3000);
    }
    leftBtn.onclick=function() {
        clearInterval(time);
        index==0?index=lunboimg.length-1:index--;
        public();
        autoPlay();
    }
    rightBtn.onclick=function() {
        clearInterval(time);
        index==lunboimg.length-1?index=0:index++;
        public();
        autoPlay();
    }
    function public(){
        for (let i = 0; i < lunboimg.length; i++) {
            lunboimg[i].classList.remove("show");          // 移除css里的.show
            btnlist[i].classList.remove("check");          // 移除css里的.check
        }
        lunboimg[index].classList.add('show')
        btnlist[index].classList.add('check')
    }
    function btnClick(){
        for (let i = 0; i < btnlist.length; i++) {
            btnlist[i].onclick=function(){
                clearInterval(time);
                index=i;
                public();
                autoPlay();
            }
        }
    }
}
