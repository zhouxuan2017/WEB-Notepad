function comList() {
    //列表下的滑动li框提前设置
    var $comList = $(''
        + '<div class="notepad-com-list">'
          + '<input class="editor" type="text"><br>'
          + '<ul class="list">'
          + '</ul>'
        + '</div>');
  //一个文本框
  //一个列表框
    var $editor = $comList.find('.editor'),
        $list = $comList.find('.list'),
        $items;
  //设置初始值等有传过来的数据再进行替换
    var cfg = {
      container: '',
      list: [],
      select: 0,
      width: '200px',
      isFont: false,
      isFontStyle: false,
      selectHandler: null
    };
  
    //字体设置栏进行设置选择项
    function setFontStyle(item, style) {
      if(style === '斜体') {
        item.css({'font-style': 'italic'});
        return;
      }
  
      if(style === '粗体') {
        item.css({'font-weight': 'bold'});
        return;
      }
  
      if(style === '粗偏斜体') {
        item.css({'font-weight': 'bold', 'font-style': 'italic'});
        return;
      }
    }
  
    //在列表下填充元素
    function fillData() {
      var i = 0, $item;
  
      //如果是设置字体的框在列表下首先根据传入列表的个数产生对应个li
      //然后在给每个li设置相对应的列表值的字体
      //给li加入文字是传过来的列表里面的值
      if(cfg.isFont) {
        for(i=0; i<cfg.list.length; i++) {
          $item = $('<li class="item"></li>');
          $item.css({'font-family': cfg.list[i]});
          $list.append($item.html(cfg.list[i]));
        }
       //如果是设置字体样式的框在列表下首先根据传入列表的个数产生对应个li
      //然后在给每个li调用setFontStyle函数设置相对应的列表值的字体
      //给li加入文字是传过来的列表里面的值
      } else if(cfg.isFontStyle) {
        for(i=0; i<cfg.list.length; i++) {
          $item = $('<li class="item"></li>');
          setFontStyle($item, cfg.list[i]);
          $list.append($item.html(cfg.list[i]));
        }
        //如果是其他的比如字体大小
      //给li加入文字是传过来的列表里面的值
      } else {
        for(i=0; i<cfg.list.length; i++) {
          $item = $('<li class="item"></li>');
          $list.append($item.html(cfg.list[i]));
        }
      }
  
      //在此找到每一个列表项
      $items = $list.find('.item');
    }
  
    //选择函数  点击对应的列表项里面的li都会回认为是选中状态 并且在上方相对应的文本框内加入点击过的文字  下次进入保持的状态
    function setSelect(n) {
      $($items[n]).addClass('selected');
      $editor.val(cfg.list[n]);
      $editor.select();
    }
  
    function init() {
        //找到要设置容器的底层div
      var $oldList = $(cfg.container).find('.notepad-com-list');
     //在对应文字下加入引入的div   但是只加一个就够   再多的即可移除
      if($oldList.length == 1) $oldList.remove();
       //给传过来的容器添加此div
      $(cfg.container).append($comList);
      //设置添加的div的宽度是传过来的宽度
      $comList.css({ width: cfg.width });

      //给div添加内容函数
      fillData();
      //设置内容选中函数
      setSelect(cfg.select);
    }
    //导出对象
    this.show = function(conf) {
        //首先将cfg里面的内容改为传过来的内容
      $.extend(cfg, conf);

      //执行Init函数在对应的里面添加内容
      init();
  
      //当对应的ul点击的时候执行
      $list.click(function(e) {
          //上次点击过的样式先进行移除被选择的class
        $($items[cfg.select]).removeClass('selected');
        //设置选中的select为列表中点击的东西的index
        cfg.select = cfg.list.indexOf($(e.target).html());
        //给点击过的li添加被选中的class
        $($items[cfg.select]).addClass('selected');
        $editor.val(cfg.list[cfg.select]);
        $editor.select();
        //传过去选中的select值
        cfg.selectHandler(cfg.select);

      });
  
    //   //按下按键时比如输入首字母 进行自动匹配
      $editor.keyup(function() {
        var i = 0;
         //遍历整个li裂变  匹配文本编辑区的内容在li里面是否有 碰到则跳出循环
        for(i=0; i<cfg.list.length; i++) {
          if(cfg.list[i].indexOf($editor.val()) === 0) break;
        }
        //如果i到最大还没有找到则返回退出函数
        if(i === cfg.list.length) return;
        //如果找到进行选中样式设置
        $items[i].scrollIntoView({behavior: 'smooth', block: 'start'});
        $($items[cfg.select]).removeClass('selected');
        $($items[i]).addClass('selected');
        cfg.select = i;
      });
    };
  }