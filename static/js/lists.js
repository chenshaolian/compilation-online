window.onload = function () {
  var el = document.getElementById("editor");
  var initValue = "mylist = []\n" + "mylist.append(1)\n" + "mylist.append(2)\n" + "mylist.append(3)\n" + "print(mylist[0]) # prints 1\n" + "print(mylist[1]) # prints 2\n" + "print(mylist[2]) # prints 3\n\n" + "# prints out 1,2,3\n" + "for x in mylist:\n" + "\tprint(x)";
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
    }).catch(function (err) {
      alert('再试一次，编译错误！')
    });;
  };

  var el2 = document.getElementById("indentation");
  var initValue2 = "mylist = [1,2,3]\n" + "print(mylist[10])";
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
  // 设置初始文本
  myCodeMirror2.setOption("value", initValue2);
  // 编译
  var test = document.getElementById("indentationRun");
  test.onclick = function () {
    var value = myCodeMirror2.getValue();
    var qs = Qs;
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
    }).catch(function (err) {
      alert('再试一次，编译错误！')
    });;
  };

  var el3 = document.getElementById("exercise");
  var initValueExercise = 'numbers = []\n' + 'strings = []\n' + 'names = ["John", "Eric", "Jessica"]\n\n' + '# write your code here\n' + 'second_name = None\n\n\n' + '# this code should write out the filled arrays and thesecond name in the names list (Eric).\n' + 'print(numbers)\n' + 'print(strings)\n' + 'print("The second name on the names list is %s" %\n' + 'second_name)';
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
  // 设置初始文本
  myCodeMirror3.setOption("value", initValueExercise);
  // 编译
  var test = document.getElementById("exerciseRun");
  test.onclick = function () {
    var value = myCodeMirror3.getValue();
    var qs = Qs;
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
        var reg1 = RegExp(/[1, 2, 3]/);
        var reg2 = RegExp(/['hello', 'world']/);
        var reg3 = RegExp(/The second name on the names list is Eric/);
        if (output.output.match(reg1) && output.output.match(reg2) && output.output.match(reg3)) {
          document.getElementById('tip').innerHTML = 'Great job!<span class="close" id="close">×</span>';
          document.getElementById('tip').style.background = '#83c967';
        } else {
          document.getElementById('tip').innerHTML = 'Make sure your anser.<span class="close" id="close">×</span>';
          document.getElementById('tip').style.background = '#c96768';
        }
      }
      document.getElementById('exerciseContainer').innerHTML += content;
      document.getElementById('close').onclick = function () {
        document.getElementById('tip').style.display = 'none';
      }
    }).catch(function (err) {
      alert('再试一次，编译错误！')
    });;
  };
  var lis1 = document.getElementById("li1")
  var lis2 = document.getElementById("li2")
  lis1.onclick = function () {
    lis1.className = "active"
    lis2.className = ""
    initValueExercise = 'numbers = []\n' + 'strings = []\n' + 'names = ["John", "Eric", "Jessica"]\n\n' + '# write your code here\n' + 'second_name = None\n\n\n' + '# this code should write out the filled arrays and thesecond name in the names list (Eric).\n' + 'print(numbers)\n' + 'print(strings)\n' + 'print("The second name on the names list is %s" %\n' + 'second_name)';
    myCodeMirror3.setOption("value", initValueExercise);
  }
  lis2.onclick = function () {
    lis2.className = "active"
    lis1.className = ""
    initValueExercise = 'numbers = []\n' + 'strings = []\n' + 'names = ["John", "Eric", "Jessica"]\n\n' + '# write your code here\n' + 'numbers.append(1)\n' + 'numbers.append(2)\n' + 'numbers.append(3)\n' + 'strings.append("hello")\n' + 'strings.append("world")\n\n' + 'second_name = names[1]\n\n' + '# this code should write out the filled arrays and thesecond name in the names list (Eric).\n' + 'print(numbers)\n' + 'print(strings)\n' + 'print("The second name on the names list is %s" %\n' + 'second_name)';
    myCodeMirror3.setOption("value", initValueExercise);
  }

  document.getElementById("solution").onclick = function () {
    lis2.className = "active"
    lis1.className = ""
    this.style.display = 'none';
    document.getElementById('li2').style.visibility = 'visible';
    initValueExercise = 'numbers = []\n' + 'strings = []\n' + 'names = ["John", "Eric", "Jessica"]\n\n' + '# write your code here\n' + 'numbers.append(1)\n' + 'numbers.append(2)\n' + 'numbers.append(3)\n' + 'strings.append("hello")\n' + 'strings.append("world")\n\n' + 'second_name = names[1]\n\n' + '# this code should write out the filled arrays and thesecond name in the names list (Eric).\n' + 'print(numbers)\n' + 'print(strings)\n' + 'print("The second name on the names list is %s" %\n' + 'second_name)';
    myCodeMirror3.setOption("value", initValueExercise);
    var test = document.getElementById("exerciseRun");
    test.onclick = function () {
      var value = myCodeMirror3.getValue();
      var qs = Qs;
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
          var reg1 = RegExp(/[1, 2, 3]/);
          var reg2 = RegExp(/['hello', 'world']/);
          var reg3 = RegExp(/The second name on the names list is Eric/);
          if (output.output.match(reg1) && output.output.match(reg2) && output.output.match(reg3)) {
            document.getElementById('tip').innerHTML = 'Great job!<span class="close" id="close">×</span>';
            document.getElementById('tip').style.background = '#83c967';
          } else {
            document.getElementById('tip').innerHTML = 'Make sure your anser.<span class="close" id="close">×</span>';
            document.getElementById('tip').style.background = '#c96768';
          }
        }
        document.getElementById('exerciseContainer').innerHTML += content;
        document.getElementById('close').onclick = function () {
          document.getElementById('tip').style.display = 'none';
        }
      }).catch(function (err) {
        alert('再试一次，编译错误！')
      });;
    };
  }

  function pageTwo() {
    window.location.href = '/variablesAndTypes'
  }
  document.getElementById("pageTwo").onclick = pageTwo;
  function toIndex() {
    window.location.href = '/'
  }
  document.getElementById("logo").onclick = toIndex;
  document.getElementById("project").onclick = toIndex;
  window.scrollTo(0, 0);
};