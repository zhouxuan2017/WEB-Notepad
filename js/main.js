var $notepad={show:function(){var e=-1,n=$(".title"),l=$(".menus");n.click(function(){var n=Number(this.dataset.id);e=-1===e?(l[n].style.display="inline-block",n):e!==n?(l[e].style.display="none",l[n].style.display="inline-block",n):(l[n].style.display="none",-1)});var i=$(".notepad-editor"),s=$(".menus");i.find("textarea").click(function(){s[0].style.display="none",s[1].style.display="none",s[2].style.display="none",s[3].style.display="none",s[4].style.display="none"})}};