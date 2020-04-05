var $notepad = (function () {
    function show() {
        var active = -1;//下拉菜单是否展开0 是文件菜单，1 是编辑菜单，2 是格式菜单3 是查看菜单，4 是帮助菜单
        //获取菜单栏
        var $title = $('.title')
        
        //获取对应菜单栏对应的ul
        var $ul = $('.menus')
        // console.log($ul[0].style.display)
        //点击菜单栏对应显示相应的二级菜单
        $title.click(function () {
            //i表示点击菜单的index
            var i = Number(this.dataset.id)
            if (active === -1) {
                $ul[i].style.display = 'inline-block';
                active = i;
            } else if (active !== i) {
                $ul[active].style.display = 'none';
                $ul[i].style.display = 'inline-block';
                active = i;
            }
            else {
                $ul[i].style.display = 'none';
                active = -1;
            }
        })

        //编辑区域点击的话二级菜单也会消失
        var $editor=$('.notepad-editor');
        var $li = $('.menus')
        $editor.find('textarea').click(function(){
            $li[0].style.display = 'none';
            $li[1].style.display = 'none';
            $li[2].style.display = 'none';
            $li[3].style.display = 'none';
            $li[4].style.display = 'none';
        })
    }

    return { show: show };
}())