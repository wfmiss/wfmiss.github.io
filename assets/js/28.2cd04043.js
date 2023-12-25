(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{494:function(v,_,t){"use strict";t.r(_);var r=t(29),i=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"变量的存储类别及作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量的存储类别及作用域"}},[v._v("#")]),v._v(" 变量的存储类别及作用域")]),v._v(" "),t("h2",{attrs:{id:"一、变量的作用域-存在空间性指变量在程序中的有效范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、变量的作用域-存在空间性指变量在程序中的有效范围"}},[v._v("#")]),v._v(" 一、变量的作用域：存在空间性指变量在程序中的有效范围")]),v._v(" "),t("p",[t("strong",[v._v("局部变量、全局变量")])]),v._v(" "),t("p",[v._v("1、局（内）部变量：在函数内（复合语句内）定义的变量、它只在本函数内（复合语句内）有效。")]),v._v(" "),t("p",[t("strong",[v._v("知识点：")])]),v._v(" "),t("ul",[t("li",[v._v("生存期是该语块、进入语块时获得内存，仅能由语块语句访问，退出语句块时释放内存，不再有效；【随用随分配，用完就释放】")]),v._v(" "),t("li",[v._v("定义时不会自动初始化，除非程序员指定初值；")]),v._v(" "),t("li",[v._v("并列语句块各自定义的同名变量互不干扰，不同函数可以有相同变量名；")]),v._v(" "),t("li",[v._v("形参和实参可以同名；")]),v._v(" "),t("li",[v._v("形参也是局部变量；")]),v._v(" "),t("li",[v._v("主函数里的变量也是局部变量；")]),v._v(" "),t("li",[t("strong",[v._v("复合语句里定义的变量也是局部变量；复合语句的局部变量和本函数的局部变量同名时，本函数的局部变量不起作用。【内部的优先】")])])]),v._v(" "),t("p",[v._v("2、全（外）局变量：在所有函数之外定义的变量")]),v._v(" "),t("ul",[t("li",[v._v("生存期是整个程序，从程序运行起占内存，程序退出时释放内存；")]),v._v(" "),t("li",[v._v("有效范围是从定义变量的位置开始到本程序结束；")]),v._v(" "),t("li",[v._v("全局变量必须在所有函数之外定义，且只能定义一次，默认初值为0；")]),v._v(" "),t("li",[v._v("可以通过声明一个"),t("strong",[v._v("extern的全局变量扩张全局变量的作用域")]),v._v("，也可以通过定义一个"),t("strong",[v._v("static的全局变量限制这种扩展")]),v._v("；")]),v._v(" "),t("li",[t("strong",[v._v("全局变量增加函数间数据联系、函数只能返回一个值，可用影响全局变量的方式带回给主函数多个值")]),v._v("；")]),v._v(" "),t("li",[v._v("全局变量会降低程序的清晰性；因为所有函数都能影响变量的值；")])]),v._v(" "),t("h2",{attrs:{id:"二、变量的生存期-存在的时间性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、变量的生存期-存在的时间性"}},[v._v("#")]),v._v(" 二、变量的生存期：存在的时间性")]),v._v(" "),t("p",[t("strong",[v._v("静态存储和动态存储")])]),v._v(" "),t("p",[v._v("静态存储区：全局变量、局部静态变量；编译时分配内存，初值为0；初始化只有一次，执行完不释放，程序结束释放。")]),v._v(" "),t("p",[v._v("动态存储区：局部变量；随用随分配，用完就释放；初值为随机数，初始化可以多次")]),v._v(" "),t("p",[v._v("1、动态存储变量：数据类型 变量名表；")]),v._v(" "),t("ul",[t("li",[v._v("进入语句块时自动申请内存，退出时自动释放内存；")]),v._v(" "),t("li",[v._v("未赋初值时，其值不确定，每次调用重新赋值；")]),v._v(" "),t("li",[v._v("局部变量（不含静态局部变量）、形参")])]),v._v(" "),t("p",[v._v("2、静态存储变量（static）：static 数据类型 变量名表；")]),v._v(" "),t("ul",[t("li",[v._v("局部静态变量编译时赋初值一次，以后每次调用不再重新赋初值，而是保留上一次函数调用结束时的值；")]),v._v(" "),t("li",[v._v("局部静态变量定义时不赋初值则自动赋初值0；")]),v._v(" "),t("li",[v._v("全局变量、静态局部变量")])]),v._v(" "),t("h2",{attrs:{id:"三、c语言的存储类别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、c语言的存储类别"}},[v._v("#")]),v._v(" 三、C语言的存储类别")]),v._v(" "),t("p",[v._v("1、auto型（自动变量）【缺省】")]),v._v(" "),t("p",[v._v("2、static型（静态变量）\n3、register型（寄存器变量）：为了提高某些变量和函数形参的存取速度，c允许将局部变量的值存在CPU寄存器中，不用去内存取数据")]),v._v(" "),t("p",[v._v("4、extern型（外部变量）：如果需要用它文件中的全局变量，则需在文本中使用"),t("code",[v._v("extern int x;")]),v._v("说明一下。【扩展作用域】")]),v._v(" "),t("p",[t("strong",[v._v("注意：")])]),v._v(" "),t("ul",[t("li",[v._v("只有局部自动变量和形参能作为寄存器变量，静态变量不可以；")]),v._v(" "),t("li",[v._v("寄存器数目有限，不能定义任意多个寄存器变量；")]),v._v(" "),t("li",[v._v("只有int、char和指针类型变量可以定义为寄存器型；")]),v._v(" "),t("li",[v._v("一个变量只能声明一个存储类别；")]),v._v(" "),t("li",[v._v("extern只能用来说明变量，不能用来定义变量。"),t("code",[v._v("extern int a=1;×错误")])])]),v._v(" "),t("p",[t("strong",[v._v("此节未完，将于2022年6月后继续更新……")])])])}),[],!1,null,null,null);_.default=i.exports}}]);