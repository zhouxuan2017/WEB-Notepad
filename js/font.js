var $font=(function(){
    var $dlg=$(''
    + '<div class="notepad-dlg-mask notepad-dlg-font">'
      + '<div class="dialogbox notepad-dlgbox">'
        + '<div class="notepad-dlg-titlebar">'
          + '<p class="title">字体</p>'
          + '<span class="close-btn" title="关闭">✖</span>'
        + '</div>'
        + '<div class="main notepad-dlg-main">'
          + '<div class="font-family"><p>字体(F):</p></div>'
          + '<div class="font-style"><p>字形(Y):</p></div>'
          + '<div class="font-size"><p>大小(S):</p></div>'
          + '<fieldset class="sample">'
            + '<legend>示例</legend>'
            + '<p class="sample-txt" style="font-size:16pt;font-family:Arial">AaBbYyZz</p>'
          + '</fieldset>'
          + '<div class="script">'
            + '<label>'
              + '脚本(R):<br>'
              + '<select>'
                + '<option value="西欧语言">西欧语言</option>'
                + '<option value="中文 GB2312">中文 GB2312</option>'
              + '</select>'
            + '</label>'
          + '</div>'
          + '<input class="btn-ok btn" type="button" value="确定">'
          + '<input class="btn-cancel btn" type="button" value="取消">'
        + '</div>'
      + '</div>'
    + '</div>');
   
     //添加各种样式初始化
     function init(){
        var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
        styles = ['常规', '斜体', '粗体', '粗偏斜体'],
        sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
        var $p=$('.sample').find('p')
        var l1 = new comList();
        var i=0;
        l1.show({
          container: '.notepad-dlg-font .font-family',
          width: '176px',
          list: fonts,
          select: 2,
          isFont: true,
          //根据返回选中的标量在例子中显示对应的字体样式
          selectHandler: function(e) {
              $p.css({'font-family':fonts[e]})}
        });
        var l2 = new comList();
        l2.show({
          container: '.notepad-dlg-font .font-style',
          select: 0,
          width: '132px',
          list: styles,
          isFontStyle: true,
           //根据返回选中的标量在例子中显示对应的字形
          selectHandler: function(e) {
            //$p.css({'font-style': '','font-weight':''});
              if(e==1)
              {$p.css({'font-style': 'italic','font-weight':''});}
              else if(e==2)
              {$p.css({'font-weight': 'bold','font-style': ''});}
              else if(e==3)
              {$p.css({'font-weight': 'bold', 'font-style': 'italic'});}
              else
              {$p.css({'font-style': '','font-weight':''});}
          }
        });
    
        var l3 = new comList();
        l3.show({
          container: '.notepad-dlg-font .font-size',
          width: '64px',
          select: 6,
          list: sizes,
           //根据返回选中的标量在例子中显示对应的字体大小
           selectHandler: function(e) {
           {$p.css({'font-size':parseInt(sizes[e])})}
          }
        });
    }
     


    //进行设置函数
    function font(){
        $('body').append($dlg);
        init();
        var $fontdiv=$('.notepad-dlg-mask');
        var $close=$('.close-btn');
        var $btnCancel=$('.btn-cancel')
        var $btnOk=$('.btn-ok')
        var $sampleP=$('.sample-txt');
        //获取编辑区域
        var $editor=$('.notepad-editor');
        //获取右上角关闭按钮并且点击时关闭文字设置框
      
        $close.click(function(){
         $fontdiv.css({'display':'none'})
        })
        $fontdiv.css({'display':'block'})

        //右上角关闭按钮移入移出样式变化
        $close.mouseenter(function(){
            $close.css({'background':'red'})
            $close.css({'color':'white'})
        })
        $close.mouseleave(function(){
            $close.css({'background':''})
            $close.css({'color':''})
        })

        //右下角取消按钮点击后页面变化
        $btnCancel.click(function(){
            $fontdiv.css({'display':'none'})
        })

        //点击确定按钮编辑区域文字可以变化
         $btnOk.click(function(){
             //获取示例框中的值
             var Ofont=$sampleP.css("font-family");
             var Ostyle=$sampleP.css("font-style");
             var Osize=$sampleP.css("font-size");
             var Oweight=$sampleP.css("font-weight");
             //console.log(Ofont,Ostyle,Osize,Oweight)
           $editor.find('textarea').css({"font-family":Ofont,"font-style":Ostyle,"font-size":Osize,"font-weight":Oweight})
           $fontdiv.css({'display':'none'})
         })
        return true;
    }
    return{font:font}
}());