$(function () {
    var $body = '<div class="notepad-menubar">'
        + '<ul class="menu-title">'
        + '<li class="title" data-id="0">文件(F)</li>'
        + '<li class="title" data-id="1">编辑(E)</li>'
        + '<li class="title" data-id="2">格式(O)</li>'
        + '<li class="title" data-id="3">查看(V)</li>'
        + '<li class="title" data-id="4">帮助(H)</li>'
        + '</ul>'
        + '<ul class="menus" style="widows: 202px;left:0px;display:none">'
        + '<li class="menu-item" data-x="0" data-y="0">新建(N) <span class="shortcut">Ctrl+N</span></li>'
        + '<li class="menu-item" data-x="0" data-y="1">打开(O)... <span class="shortcut">Ctrl+O</span></li>'
        + '<li class="menu-item" data-x="0" data-y="2">保存(S) <span class="shortcut">Ctrl+S</span></li>'
        + '<li class="menu-item" data-x="0" data-y="3">另存为(A)... </li>'
        + '<li class="menu-hr"></li>'
        + '<li class="menu-item" data-x="0" data-y="5">页面设置(U)... </li>'
        + '<li class="menu-item" data-x="0" data-y="6">打印(P)... <span class="shortcut">Ctrl+P</span></li>'
        + '<li class="menu-hr"></li>'
        + '<li class="menu-item" data-x="0" data-y="8">退出(X)</li>'
        + '</ul>'
        + '<ul class="menus" style="widows: 218px;left:52px;display:none;">'
        + '<li class="menu-item disabled" data-x="1" data-y="0">撤销(N) <span class="shortcut">Ctrl+Z</span></li>'
        + '<li class="menu-hr"></li>'
        + '<li class="menu-item" data-x="1" data-y="2">剪切(T) <span class="shortcut">Ctrl+X</span></li>'
        + '<li class="menu-item disabled" data-x="1" data-y="3">复制(C) <span class="shortcut">Ctrl+C</span></li>'
        + '<li class="menu-item disabled" data-x="1" data-y="4">粘贴(P) <span class="shortcut">Ctrl+V</span></li>'
        + '<li class="menu-item disabled" data-x="1" data-y="5">删除(L)<span class="shortcut">Del</span> </li>'
        + '<li class="menu-hr"></li>'
        + '<li class="menu-item" data-x="1" data-y="7">使用Bing搜索... <span class="shortcut">Ctrl+E</span></li>'
        + '<li class="menu-item disabled" data-x="1" data-y="8">查找(F)... <span class="shortcut">Ctrl+F</span></li>'
        + '<li class="menu-item disabled" data-x="1" data-y="9">查找下一个(N) <span class="shortcut">F3</span></li>'
        + '<li class="menu-item " data-x="1" data-y="10">替换(R)... <span class="shortcut">Ctrl+H</span></li>'
        + '<li class="menu-item" data-x="1" data-y="11">转到(G)... <span class="shortcut">Ctrl+G</span></li>'
        + '<li class="menu-hr"></li>'
        + '<li class="menu-item" data-x="1" data-y="13">全选(A) <span class="shortcut">Ctrl+A</span></li>'
        + '<li class="menu-item" data-x="1" data-y="14">时间/日期(D) <span class="shortcut">F5</span></li>'
        + '</ul>'
        + '<ul class="menus" style="width: 156px;left:106px;display: none;">'
        + '<li class="menu-item" data-x="2" data-y="0">自动换行</li>'
        + '<li class="menu-item" id="font" data-x="2" data-y="1">字体(F)...</li>'
        + '</ul>'
        + '<ul class="menus" style="width: 138px;left: 162px;display: none;">'
        + '<li class="menu-item" data-x="3" data-y="0">状态栏(S)</li>'
        + '</ul>'
        + '<ul class="menus" style="width: 166px;left: 216px;display:none;">'
        + '<li class="menu-item" data-x="4" data-y="0">查看帮助(H)</li>'
        + '<li class="menu-item" data-x="4" data-y="1">关于记事本(A)</li>'
        + '</ul>'
        + '</div>'
        + '<div class="notepad-editor">'
        + '<textarea spellcheck="false" auto-size="none" wrap="off" style="overflow-x: scroll;font-family: Arial;font-size: 16pt;"></textarea>'
            + '</div>'
            + '<div class="notepad-statusbar" style="display: none;">'
            + '<div class="left-panel"></div>'
            + '<div class="right-panel"><p class="row-col">第&nbsp;1&nbsp;行，第&nbsp;1&nbsp;列</p></div>'
            + '</div>';
 $('body').append($body)
})