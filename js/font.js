var $font=function(){var d=$('<div class="notepad-dlg-mask notepad-dlg-font"><div class="dialogbox notepad-dlgbox"><div class="notepad-dlg-titlebar"><p class="title">字体</p><span class="close-btn" title="关闭">✖</span></div><div class="main notepad-dlg-main"><div class="font-family"><p>字体(F):</p></div><div class="font-style"><p>字形(Y):</p></div><div class="font-size"><p>大小(S):</p></div><fieldset class="sample"><legend>示例</legend><p class="sample-txt" style="font-size:16pt;font-family:Arial">AaBbYyZz</p></fieldset><div class="script"><label>脚本(R):<br><select><option value="西欧语言">西欧语言</option><option value="中文 GB2312">中文 GB2312</option></select></label></div><input class="btn-ok btn" type="button" value="确定"><input class="btn-cancel btn" type="button" value="取消"></div></div></div>');return{font:function(){var n,s,e;$("body").append(d),n=["Agency FB","Algerian","Arial","Arial Rounded MT","Axure Handwriting","Bahnschrift","Baskerville Old Face","Bauhaus 93","Bell MT","Berlin Sans FB","Bernard MT","BlackAdder ITC"],s=["8","9","10","11","12","14","16","18","20","22","24","26","28","36","48","72"],e=$(".sample").find("p"),(new comList).show({container:".notepad-dlg-font .font-family",width:"176px",list:n,select:2,isFont:!0,selectHandler:function(t){e.css({"font-family":n[t]})}}),(new comList).show({container:".notepad-dlg-font .font-style",select:0,width:"132px",list:["常规","斜体","粗体","粗偏斜体"],isFontStyle:!0,selectHandler:function(t){1==t?e.css({"font-style":"italic","font-weight":""}):2==t?e.css({"font-weight":"bold","font-style":""}):3==t?e.css({"font-weight":"bold","font-style":"italic"}):e.css({"font-style":"","font-weight":""})}}),(new comList).show({container:".notepad-dlg-font .font-size",width:"64px",select:6,list:s,selectHandler:function(t){e.css({"font-size":parseInt(s[t])})}});var l=$(".notepad-dlg-mask"),t=$(".close-btn"),i=$(".btn-cancel"),o=$(".btn-ok"),a=$(".sample-txt"),c=$(".notepad-editor");return t.click(function(){l.css({display:"none"})}),l.css({display:"block"}),t.mouseenter(function(){t.css({background:"red"}),t.css({color:"white"})}),t.mouseleave(function(){t.css({background:""}),t.css({color:""})}),i.click(function(){l.css({display:"none"})}),o.click(function(){var t=a.css("font-family"),n=a.css("font-style"),s=a.css("font-size"),e=a.css("font-weight");c.find("textarea").css({"font-family":t,"font-style":n,"font-size":s,"font-weight":e}),l.css({display:"none"})}),!0}}}();