window.onload = function () {
  var el = document.getElementById("editor");
  var initValue = "print('This line will be printed.')";
  var myCodeMirror = CodeMirror.fromTextArea(el, {
    mode: "python",// 语言模式
    // theme: "leecode",// 主题
    keyMap: "sublime",// 快键键风格
    lineNumbers: true,// 显示行号
    smartIndent: true, //智能缩进
    indentUnit: 4, // 智能缩进单位为4个空格长度
    indentWithTabs: true,  // 使用制表符进行智能缩进
    lineWrapping: true,
    // 在行槽中添加行号显示器、折叠器、语法检测器
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
    foldGutter: true, // 启用行槽中的代码折叠
    autofocus: true,  //自动聚焦
    matchBrackets: true,// 匹配结束符号，比如"]、}"
    autoCloseBrackets: true, // 自动闭合符号
    styleActiveLine: true, // 显示选中行的样式
  });
  // 设置初始文本
  myCodeMirror.setOption("value", initValue);
  // 编译
  var test = document.getElementById("run");
  test.onclick = function () {
    var value = myCodeMirror.getValue();
    var qs = Qs;
    if (value !== '') {
      axios({
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'post',
        url: 'http://127.0.0.1:5000/run',
        data: qs.stringify({ code: value })
      }).then(function (res) {
        var output = new Function("return " + res.data)()
        var content = '';
        if (output.code == 'Error') {
          content = '<div class="error">' + output.output + '</div>'
        } else {
          content = '<div class="success">' + output.output + '</div>'
        }
        document.getElementById('outputContainer').innerHTML += content;
      }).catch(function(err) {
        alert('再试一次，编译错误！')
      });;
    }
  };

  var el2 = document.getElementById("indentation");
  var initValue2 = "x = 1\n" + "if x == 1:\n" + "\t# indented four spaces\n" + "\tprint('x is 1.')";
  var myCodeMirror2 = CodeMirror.fromTextArea(el2, {
    mode: "python",// 语言模式
    // theme: "leecode",// 主题
    keyMap: "sublime",// 快键键风格
    lineNumbers: true,// 显示行号
    smartIndent: true, //智能缩进
    indentUnit: 4, // 智能缩进单位为4个空格长度
    indentWithTabs: true,  // 使用制表符进行智能缩进
    lineWrapping: true,
    // 在行槽中添加行号显示器、折叠器、语法检测器
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
    foldGutter: true, // 启用行槽中的代码折叠
    autofocus: true,  //自动聚焦
    matchBrackets: true,// 匹配结束符号，比如"]、}"
    autoCloseBrackets: true, // 自动闭合符号
    styleActiveLine: true, // 显示选中行的样式
  });
  myCodeMirror2.setOption("value", initValue2);
  var test = document.getElementById("indentationRun");
  test.onclick = function () {
    var value = myCodeMirror2.getValue();
    var qs = Qs;
    if (value !== '') {
      axios({
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'post',
        url: 'http://127.0.0.1:5000/run',
        data: qs.stringify({ code: value })
      }).then(function (res) {
        var output = new Function("return " + res.data)()
        var content = '';
        if (output.code == 'Error') {
          content = '<div class="error">' + output.output + '</div>'
        } else {
          content = '<div class="success">' + output.output + '</div>'
        }
        document.getElementById('indentationContainer').innerHTML += content;
      }).catch(function(err) {
        alert('再试一次，编译错误！')
      });;
    }
  };

  var initValueExercise = "print('Goodbye,World!')";
  var el3 = document.getElementById("exercise");
  var myCodeMirror3 = CodeMirror.fromTextArea(el3, {
    mode: "python",// 语言模式
    // theme: "leecode",// 主题
    keyMap: "sublime",// 快键键风格
    lineNumbers: true,// 显示行号
    smartIndent: true, //智能缩进
    indentUnit: 4, // 智能缩进单位为4个空格长度
    indentWithTabs: true,  // 使用制表符进行智能缩进
    lineWrapping: true,
    // 在行槽中添加行号显示器、折叠器、语法检测器
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
    foldGutter: true, // 启用行槽中的代码折叠
    autofocus: true,  //自动聚焦
    matchBrackets: true,// 匹配结束符号，比如"]、}"
    autoCloseBrackets: true, // 自动闭合符号
    styleActiveLine: true, // 显示选中行的样式
  });
  myCodeMirror3.setOption("value", initValueExercise);
  var test = document.getElementById("exerciseRun");
  test.onclick = function () {
    var value = myCodeMirror3.getValue();
    var qs = Qs;
    if (value !== '') {
      axios({
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'post',
        url: 'http://127.0.0.1:5000/run',
        data: qs.stringify({ code: value })
      }).then(function (res) {
        var output = new Function("return " + res.data)()
        var content = '';
        if (output.code == 'Error') {
          content = '<div class="error">' + output.output + '</div>'
        } else {
          content = '<div class="success">' + output.output + '</div>'
          document.getElementById('tip').style.display = 'block';
          document.getElementById('exerciselt').style.paddingBottom = '40px';
          if (output.output.replace(/[\r\n]/g, "") == 'Hello,World!') {
            document.getElementById('tip').innerHTML = 'Great job!<span class="close" id="close">×</span>';
            document.getElementById('tip').style.background = '#83c967';
          } else {
            document.getElementById('tip').innerHTML = 'You did not output the correct things.<span class="close" id="close">×</span>';
            document.getElementById('tip').style.background = '#c96768';
          }
        }
        document.getElementById('exerciseContainer').innerHTML += content;
        document.getElementById('close').onclick = function () {
          document.getElementById('tip').style.display = 'none';
        }
      }).catch(function(err) {
        alert('再试一次，编译错误！')
      });;
    }
  };
  var lis1 = document.getElementById("li1")
  var lis2 = document.getElementById("li2")
  lis1.onclick = function () {
    lis1.className = "active"
    lis2.className = ""
    initValueExercise = "print('Goodbye,World!')";
    myCodeMirror3.setOption("value", initValueExercise);
  }
  lis2.onclick = function () {
    lis2.className = "active"
    lis1.className = ""
    initValueExercise = "print('Hello,World!')";
    myCodeMirror3.setOption("value", initValueExercise);
  }

  document.getElementById("solution").onclick = function () {
    lis2.className = "active"
    lis1.className = ""
    this.style.display = 'none';
    document.getElementById('li2').style.visibility = 'visible';
    initValueExercise = "print('Hello,World!')";
    myCodeMirror3.setOption("value", initValueExercise);
    var test = document.getElementById("exerciseRun");
    test.onclick = function () {
      var value = myCodeMirror3.getValue();
      var qs = Qs;
      if (value != '') {
        axios({
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          method: 'post',
          url: 'http://127.0.0.1:5000/run',
          data: qs.stringify({ code: value })
        }).then(function (res) {
          var output = new Function("return " + res.data)()
          var content = '<script.py> output:';
          if (output.code == 'Error') {
            content = '<div class="error">' + output.output + '</div>'
          } else {
            content = '<div class="success">' + output.output + '</div>'
            document.getElementById('tip').style.display = 'block';
            document.getElementById('exerciselt').style.paddingBottom = '40px';
            if (output.output.replace(/[\r\n]/g, "") == 'Hello,World!') {
              document.getElementById('tip').innerHTML = 'Great job!<span class="close" id="close">×</span>';
              document.getElementById('tip').style.background = '#83c967';
            } else {
              document.getElementById('tip').innerHTML = 'You did not output the correct things.<span class="close" id="close">×</span>';
              document.getElementById('tip').style.background = '#c96768';
            }
          }
          document.getElementById('exerciseContainer').innerHTML += content;
          document.getElementById('close').onclick = function () {
            document.getElementById('tip').style.display = 'none';
          }
        }).catch(function(err) {
          alert('再试一次，编译错误！')
        });;
      }
    };
  }


  document.getElementById("pageTwo").onclick = function () {
    window.location.href = '/variablesAndTypes';
  }
  function toIndex() {
    window.location.href = '/';
  }
  document.getElementById("logo").onclick = toIndex;
  document.getElementById("project").onclick = toIndex;
  window.scrollTo(0, 0);

};