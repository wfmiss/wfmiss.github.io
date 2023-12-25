(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{480:function(_,v,t){"use strict";t.r(v);var s=t(29),a=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"一、寻址方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、寻址方式"}},[_._v("#")]),_._v(" 一、寻址方式")]),_._v(" "),t("h2",{attrs:{id:"立即数-imm-寻址方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#立即数-imm-寻址方式"}},[_._v("#")]),_._v(" "),t("strong",[_._v("立即数（imm）寻址方式：")])]),_._v(" "),t("ul",[t("li",[_._v("8位数值（00H-FFH）")]),_._v(" "),t("li",[_._v("16位数值（0000H-FFFFH）")]),_._v(" "),t("li",[_._v("字符常量")]),_._v(" "),t("li",[_._v("只能在源（src）的位置")])]),_._v(" "),t("h2",{attrs:{id:"寄存器寻址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#寄存器寻址"}},[_._v("#")]),_._v(" "),t("strong",[_._v("寄存器寻址：")])]),_._v(" "),t("ul",[t("li",[_._v("操作数存放在cup的内部寄存器reg中：\n"),t("ul",[t("li",[_._v("8位寄存器r8：AH、AL、BH、BL、CH、CL、DH、DL")]),_._v(" "),t("li",[_._v("16位寄存器r16：AX、BX、CX、DX、SI、DI、SP、BP")]),_._v(" "),t("li",[_._v("4个段寄存器：CS、DS、ES、SS")])])]),_._v(" "),t("li",[_._v("寄存器名表示其内容（操作数）")]),_._v(" "),t("li",[_._v("CS不能在目（dst）位置，只能在源（src）位置")])]),_._v(" "),t("h2",{attrs:{id:"存储器寻址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存储器寻址"}},[_._v("#")]),_._v(" "),t("strong",[_._v("存储器寻址：")])]),_._v(" "),t("ul",[t("li",[_._v("操作数在主存储器中，用主存有效地址（EA）表示")]),_._v(" "),t("li",[_._v("8086设计了5种存储器寻址方式\n"),t("ul",[t("li",[_._v("1、直接寻址方式")]),_._v(" "),t("li",[_._v("2、寄存器间接寻址方式")]),_._v(" "),t("li",[_._v("3、寄存器相对寻址方式")]),_._v(" "),t("li",[_._v("4、基址变址寻址方式")]),_._v(" "),t("li",[_._v("5、相对基址变址寻址方式")])])])]),_._v(" "),t("p",[_._v("1、直接寻址方式")]),_._v(" "),t("ul",[t("li",[_._v("有效地址（EA）在指令种直接给出；"),t("code",[_._v("MOV AX,[2000H]")])]),_._v(" "),t("li",[_._v("在中括号内表示有效地址（EA）")]),_._v(" "),t("li",[_._v("默认的段地址DS，可用段超越前缀改变；"),t("code",[_._v("MOV AX,ES:[2000H]")])])]),_._v(" "),t("p",[_._v("2、寄存器间接寻址方式")]),_._v(" "),t("ul",[t("li",[_._v("EA存放在BX、SI、DI或BP中；")]),_._v(" "),t("li",[_._v("EA为BX/SI/DI时，默认是DS；")]),_._v(" "),t("li",[_._v("BP默认是SS；")]),_._v(" "),t("li",[_._v("可以使用段超越前缀改变")])]),_._v(" "),t("p",[_._v("3、寄存器相对寻址方式")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("EA=BX/BP/DI/SI+8/16位位移量；")]),_._v("、"),t("code",[_._v("MOV AX,06H[SI]=MOV AX,[SI+06H]")])]),_._v(" "),t("li",[_._v("EA为BX/SI/DI时，默认是DS；")]),_._v(" "),t("li",[_._v("BP默认是SS；")]),_._v(" "),t("li",[_._v("可以使用段超越前缀改变")])]),_._v(" "),t("p",[_._v("4、基址变址寻址方式")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("EA=BX/BP（基址）+SI/DI（变址）")]),_._v("、"),t("code",[_._v("MOV AX,[BX+SI]、MOV AX,[BP][SI]")])]),_._v(" "),t("li",[_._v("EA为BX/SI/DI时，默认是DS；")]),_._v(" "),t("li",[_._v("BP默认是SS；")]),_._v(" "),t("li",[_._v("可以使用段超越前缀改变")])]),_._v(" "),t("p",[_._v("5、相对基址变址寻址方式")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("EA=BX/BP（基址）+SI/DI（变址）+8/16位位移量")]),_._v("、"),t("code",[_._v("MOV AX,[BX+SI+6]、MOV AX,6[BP+DI]")])]),_._v(" "),t("li",[_._v("EA为BX/SI/DI时，默认是DS；")]),_._v(" "),t("li",[_._v("BP默认是SS；")]),_._v(" "),t("li",[_._v("可以使用段超越前缀改变")])]),_._v(" "),t("h1",{attrs:{id:"二、数据传送类指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、数据传送类指令"}},[_._v("#")]),_._v(" 二、数据传送类指令")]),_._v(" "),t("p",[_._v("除标志寄存器传送指令外，均不影响标志位。")]),_._v(" "),t("p",[_._v("重点：MOV、XCHG、PUSH、POP、LEA")]),_._v(" "),t("p",[_._v("了解：XLAT、LDS、LES")]),_._v(" "),t("p",[_._v("1、传送指令：MOV 目(dst),源(src)")]),_._v(" "),t("ul",[t("li",[_._v("立即数传送：\n"),t("ul",[t("li",[_._v("立即数一定在src位置；")]),_._v(" "),t("li",[_._v("源长度与目的操作数需长度一致")])])]),_._v(" "),t("li",[_._v("寄存器传送：\n"),t("ul",[t("li",[_._v("速度块")]),_._v(" "),t("li",[_._v("目与源需长度一致")])])]),_._v(" "),t("li",[_._v("存储器传送：\n"),t("ul",[t("li",[_._v("不存在存储器向存储器的传送指令")]),_._v(" "),t("li",[_._v("目和源不能同时是存储器寻址")])])]),_._v(" "),t("li",[_._v("段寄存器传送")])]),_._v(" "),t("p",[_._v("2、交换指令：XCHG reg目(dst),reg/mem源(src)")]),_._v(" "),t("ul",[t("li",[_._v("目与源的值交换")]),_._v(" "),t("li",[_._v("双操作数长度一致")]),_._v(" "),t("li",[_._v("立即数不可以使用")])]),_._v(" "),t("p",[_._v("3、换码指令：XLAT（了解）")]),_._v(" "),t("ul",[t("li",[_._v("AL<—DS:[BX+AL]")]),_._v(" "),t("li",[_._v("将BX指定的缓冲区中，AL指定的位移处的一个字节数取出赋给AL")]),_._v(" "),t("li",[_._v("隐含寻址（零地址指令，不带操作数）")])]),_._v(" "),t("p",[_._v("4、 取有效地址：LEA r16目(dst),mem源(src)")]),_._v(" "),t("ul",[t("li",[_._v("取源的有效地址给目操作数")])]),_._v(" "),t("h2",{attrs:{id:"堆栈操作指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆栈操作指令"}},[_._v("#")]),_._v(" 堆栈操作指令")]),_._v(" "),t("ul",[t("li",[_._v("堆栈占用主存区域;")]),_._v(" "),t("li",[_._v("采用“先进后出”或“后进先出”原则；")]),_._v(" "),t("li",[_._v("位于堆栈段中，段地址保存在SS段寄存器；")]),_._v(" "),t("li",[_._v("堆栈只有一个出口，栈顶；")]),_._v(" "),t("li",[_._v("用堆栈指针寄存器SP指定栈顶位置；")]),_._v(" "),t("li",[_._v("堆栈只有两种基本操作：进栈PUSH和出栈POP。")])]),_._v(" "),t("p",[_._v("进栈指令：PUSH r16/m16/seg")]),_._v(" "),t("ul",[t("li",[_._v("SP<—SP-2")]),_._v(" "),t("li",[_._v("SS:[SP]<—r16/m16/seg")]),_._v(" "),t("li",[_._v("字操作")])]),_._v(" "),t("p",[_._v("出栈指令：POP r16/m16/seg")]),_._v(" "),t("ul",[t("li",[_._v("r16/m16/seg<—SS:[SP]")]),_._v(" "),t("li",[_._v("SP<—SP+2")]),_._v(" "),t("li",[_._v("字操作")])]),_._v(" "),t("h2",{attrs:{id:"标志操作指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标志操作指令"}},[_._v("#")]),_._v(" 标志操作指令")]),_._v(" "),t("p",[_._v("1、标志位操作指令（串操作）")]),_._v(" "),t("ul",[t("li",[_._v("CLC ;复位进位标志位：CF=0")]),_._v(" "),t("li",[_._v("STC ;置位进位标志位：CF=1")]),_._v(" "),t("li",[_._v("CMC ;求反进位标志位：CF=-CF")]),_._v(" "),t("li",[_._v("CLD ;复位方向标志位：DF=0")]),_._v(" "),t("li",[_._v("STD ;置位方向标志位：DF=1")]),_._v(" "),t("li",[_._v("CLI ;复位中断标志位：IF=0（关中断）")]),_._v(" "),t("li",[_._v("STI ;置位中断标志位：IF=1（开中断）")])]),_._v(" "),t("p",[_._v("2、标志寄存器低字节传送AH的指令：LAHF")]),_._v(" "),t("p",[_._v("3、标志寄存器出入堆栈指令：PUSHF、POPF")]),_._v(" "),t("h1",{attrs:{id:"三、算数运算类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、算数运算类"}},[_._v("#")]),_._v(" 三、算数运算类")]),_._v(" "),t("h2",{attrs:{id:"加减乘除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加减乘除"}},[_._v("#")]),_._v(" 加减乘除")]),_._v(" "),t("p",[_._v("运算结果对状态标志位影响")]),_._v(" "),t("p",[_._v("加法：ADD、ADC、INC")]),_._v(" "),t("p",[_._v("减法：SUB、SBB、DEC、CMP、NEG(求补)")]),_._v(" "),t("p",[_._v("1、加和减指令")]),_._v(" "),t("p",[_._v("ADD 目(dst),源(src) ;dst<—dst+src")]),_._v(" "),t("p",[_._v("SUB 目(dst),源(src) ;dst<—dst-src")]),_._v(" "),t("p",[_._v("2、带进位的加和减指令")]),_._v(" "),t("p",[_._v("ADC 目(dst),源(src) ;dst<—dst+src+CF")]),_._v(" "),t("p",[_._v("SBB 目(dst),源(src) ;dst<—dst-src-CF")]),_._v(" "),t("p",[_._v("3、比较指令CMP（compare）")]),_._v(" "),t("p",[_._v("CMP 目(dst),源(src) ;dst-src")]),_._v(" "),t("ul",[t("li",[_._v("差值不回送目的操作数")]),_._v(" "),t("li",[_._v("影响状态标志")])]),_._v(" "),t("p",[_._v("4、增量和减量指令")]),_._v(" "),t("p",[_._v("INC reg/mem")]),_._v(" "),t("p",[_._v("DEC reg/mem")]),_._v(" "),t("ul",[t("li",[_._v("均为单操作数指令")]),_._v(" "),t("li",[_._v("不影响标志位CF")])]),_._v(" "),t("p",[_._v("5、求补指令")]),_._v(" "),t("p",[_._v("NEG reg/mem ;reg/mem<—0-reg/mem")]),_._v(" "),t("ul",[t("li",[_._v("单操作数指令")]),_._v(" "),t("li",[_._v("不能用立即数")]),_._v(" "),t("li",[_._v("影响标志位")])]),_._v(" "),t("h2",{attrs:{id:"符号扩展指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#符号扩展指令"}},[_._v("#")]),_._v(" 符号扩展指令")]),_._v(" "),t("p",[_._v("CBW ;AL符号扩展成AX")]),_._v(" "),t("p",[_._v("CWD ;AX符号扩展成DX")]),_._v(" "),t("ul",[t("li",[_._v("零地址指令")]),_._v(" "),t("li",[_._v("隐含的\n"),t("ul",[t("li",[_._v("CBW：AL—>AX")]),_._v(" "),t("li",[_._v("CWD：AX—>DX,AX(双字)")])])])]),_._v(" "),t("h2",{attrs:{id:"乘法和除法指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#乘法和除法指令"}},[_._v("#")]),_._v(" 乘法和除法指令")]),_._v(" "),t("h3",{attrs:{id:"乘法指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#乘法指令"}},[_._v("#")]),_._v(" 乘法指令")]),_._v(" "),t("ul",[t("li",[_._v("分"),t("strong",[_._v("无符号")]),_._v("和"),t("strong",[_._v("有符号")]),_._v("指令")]),_._v(" "),t("li",[_._v("单操作数指令（隐含使用AL和AX）")])]),_._v(" "),t("p",[_._v("MUL opr ;无符号指令")]),_._v(" "),t("p",[_._v("IMUL opr ;有符号指令")]),_._v(" "),t("p",[_._v("格式：")]),_._v(" "),t("p",[_._v("AL*opr（字节）—> AX")]),_._v(" "),t("p",[_._v("AX*opr（字）—>DX,AX")]),_._v(" "),t("ul",[t("li",[_._v("opr不能是立即数，可以是reg/mem")]),_._v(" "),t("li",[_._v("隐含被乘数")]),_._v(" "),t("li",[_._v("对标志位影响\n"),t("ul",[t("li",[_._v("字节*字节=字节：CF=OF=0")]),_._v(" "),t("li",[_._v("字节*字节=字    ：CF=OF=1")]),_._v(" "),t("li",[_._v("字    *字    =字    ：CF=OF=0")]),_._v(" "),t("li",[_._v("字    *字    =双字：CF=OF=1")])])]),_._v(" "),t("li",[_._v("其他标志位无定义")])]),_._v(" "),t("h3",{attrs:{id:"除法指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#除法指令"}},[_._v("#")]),_._v(" 除法指令")]),_._v(" "),t("ul",[t("li",[_._v("分"),t("strong",[_._v("无符号")]),_._v("和"),t("strong",[_._v("有符号")]),_._v("指令")]),_._v(" "),t("li",[_._v("单操作数指令（被除数隐含使用AX和DX,AX）")])]),_._v(" "),t("p",[_._v("DIV opr ;无符号指令")]),_._v(" "),t("p",[_._v("IDIV opr  ;有符号指令")]),_._v(" "),t("ul",[t("li",[_._v("opr不能是立即数，可以是reg/mem")]),_._v(" "),t("li",[_._v("除数为0或商出范围，OF=1溢出")]),_._v(" "),t("li",[_._v("对其他标志位无定义")])]),_._v(" "),t("p",[_._v("AX/opr(字节)—>商(AL),余(AH)")]),_._v(" "),t("p",[_._v("DX,AX/opr(字)—>商(AX),余(DX)")]),_._v(" "),t("h1",{attrs:{id:"四、位操作指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、位操作指令"}},[_._v("#")]),_._v(" 四、位操作指令")]),_._v(" "),t("p",[_._v("以二进制进行数据的操作")]),_._v(" "),t("p",[_._v("注意：对标志位的影响")]),_._v(" "),t("h2",{attrs:{id:"_1、逻辑运算指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、逻辑运算指令"}},[_._v("#")]),_._v(" 1、逻辑运算指令")]),_._v(" "),t("p",[_._v("AND、OR、XOR、NOT、TEST")]),_._v(" "),t("ul",[t("li",[_._v("设置：CF=OF=0")]),_._v(" "),t("li",[_._v("结果影响SF、ZF和PF状态，对AF未定义")]),_._v(" "),t("li",[_._v("单操作数：NOT 不影响任何标志位")])]),_._v(" "),t("p",[_._v("逻辑与：AND（有0出0）")]),_._v(" "),t("p",[_._v("AND 目(dst),源(src) ;dst<—dst与src")]),_._v(" "),t("ul",[t("li",[_._v("清零\n"),t("ul",[t("li",[_._v("AND AX,0")]),_._v(" "),t("li",[_._v("AND AL,0FH")]),_._v(" "),t("li",[_._v("AND AX,AX")])])])]),_._v(" "),t("p",[_._v("逻辑或：OR（有1出1）")]),_._v(" "),t("p",[_._v("OR 目(dst),源(src) ;dst<—dst 或src")]),_._v(" "),t("ul",[t("li",[_._v("置位：\n"),t("ul",[t("li",[_._v("OR AX,AX ;AX不变")]),_._v(" "),t("li",[_._v("OR AL,OFH ；")])])])]),_._v(" "),t("p",[_._v("逻辑异或：XOR（相同为0，不同为1）")]),_._v(" "),t("p",[_._v("XOR 目(dst),源(src) ;dst<—dst异或src")]),_._v(" "),t("ul",[t("li",[_._v("取反、清零：\n"),t("ul",[t("li",[_._v("XOR AX,AX")]),_._v(" "),t("li",[_._v("XOR AL,03H")])])])]),_._v(" "),t("p",[_._v("测试指令：TEST")]),_._v(" "),t("p",[_._v("TEST 目(dst),源(src) ;dst与src")]),_._v(" "),t("ul",[t("li",[_._v("不保留结果")]),_._v(" "),t("li",[_._v("test AL,01H ;测试D0是否为1。")]),_._v(" "),t("li",[_._v("测试某一位")])]),_._v(" "),t("p",[_._v("取反指令：NOT")]),_._v(" "),t("p",[_._v("NOT reg/mem")]),_._v(" "),t("ul",[t("li",[_._v("取反")]),_._v(" "),t("li",[_._v("单操作数指令")]),_._v(" "),t("li",[_._v("不影响任何标志位")])]),_._v(" "),t("h2",{attrs:{id:"_2、移位指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、移位指令"}},[_._v("#")]),_._v(" 2、移位指令")]),_._v(" "),t("p",[_._v("无符号（逻辑）：SHL、SHR；有符号（算数）：SAL、SAR")]),_._v(" "),t("p",[_._v("L：左，R：右")]),_._v(" "),t("ul",[t("li",[_._v("移出的位进入CF")]),_._v(" "),t("li",[_._v("移位后的结果影响SF、ZF、PF")])]),_._v(" "),t("p",[_._v("逻辑左移指令：SHL")]),_._v(" "),t("p",[_._v("SHL reg/mem,1/CL ;最低位补0，最高位进入CF")]),_._v(" "),t("p",[_._v("逻辑右移指令：SHR")]),_._v(" "),t("p",[_._v("SHR reg/mem,1/CL ;最高位补0，最低位进入CF")]),_._v(" "),t("p",[_._v("算数左移指令：SAL")]),_._v(" "),t("p",[_._v("SAL reg/mem,1/CL ;最低位补0，最高位进入CF")]),_._v(" "),t("p",[_._v("算数右移指令：SAR")]),_._v(" "),t("p",[_._v("SAR reg/mem,1/CL ;最高位不变，最低位进入CF")]),_._v(" "),t("h2",{attrs:{id:"_3、循环移位指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、循环移位指令"}},[_._v("#")]),_._v(" 3、循环移位指令")]),_._v(" "),t("p",[_._v("不带进位：ROL、ROR；带进位：RCL、RCR")]),_._v(" "),t("ul",[t("li",[_._v("设置进位标志CF，但不影响SF、ZF、PF、AF标志")])]),_._v(" "),t("p",[_._v("循环左移：ROL")]),_._v(" "),t("p",[_._v("ROL reg/mem,1/CL ;最高位移入CF和最低位")]),_._v(" "),t("p",[_._v("循环左右移：ROR")]),_._v(" "),t("p",[_._v("ROR reg/mem,1/CL ;最低位移入CF和最高位")]),_._v(" "),t("p",[_._v("进位循环左移：RCL")]),_._v(" "),t("p",[_._v("RCL reg/mem,1/CL ;先将CF的值移入最低位，再将最高位的值移入CF")]),_._v(" "),t("p",[_._v("进位循环右移：RCL")]),_._v(" "),t("p",[_._v("RCR reg/mem,1/CL ;先将CF的值移入最高位，再将最低位的值移入CF")]),_._v(" "),t("h1",{attrs:{id:"五、控制转移类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、控制转移类"}},[_._v("#")]),_._v(" 五、控制转移类")]),_._v(" "),t("ul",[t("li",[_._v("用于实现分支、循环、子程序等结构")]),_._v(" "),t("li",[_._v("通过改变IP（和CS）值，实现程序执行顺序的改变。")]),_._v(" "),t("li",[_._v("重点掌握：\n"),t("ul",[t("li",[_._v("JMP（无条件转移指令）、JCC（条件转移指令）")]),_._v(" "),t("li",[_._v("LOOP（循环）")]),_._v(" "),t("li",[_._v("CALLL/RET（了解）")]),_._v(" "),t("li",[_._v("INT n、IRET 常用系统功能调用")])])])]),_._v(" "),t("h2",{attrs:{id:"_1、无条件转移指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、无条件转移指令"}},[_._v("#")]),_._v(" 1、无条件转移指令")]),_._v(" "),t("p",[_._v("JMP 标号 ；程序转向标号指定的地址")]),_._v(" "),t("h2",{attrs:{id:"_2、条件转移指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、条件转移指令"}},[_._v("#")]),_._v(" 2、条件转移指令")]),_._v(" "),t("p",[_._v("JCC 标号 ；条件满足，转移到标号的位置")]),_._v(" "),t("p",[_._v("​\t\t\t\t；否则，顺序执行")]),_._v(" "),t("p",[_._v("​\t\t\t\t不影响标志位，但要利用标志")]),_._v(" "),t("p",[_._v("根据标志位不同，分成三种情况：")]),_._v(" "),t("ul",[t("li",[_._v("对无符号数")])]),_._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("JA/JNBE\t\t\t大于/不小于等于\nJAE/JNB\t\t\t大于等于/不小于\nJB/JNAE\t\t\t小于/不大于等于\nJBE/JNA\t\t\t小于等于/不大于\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br")])]),t("ul",[t("li",[_._v("对有符号数")])]),_._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("JG/JNLE\t\t\t大于/不小于等于\nJGE/JNL\t\t\t大于等于/不小于\nJL/JNGE\t\t\t小于/不大于等于\nJLE/JNG\t\t\t小于等于/不大于\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br")])]),t("ul",[t("li",[_._v("对单个条件标志")])]),_._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("JE/JZ\t\t等于/结果为零\t\t  ZF=1\nJNE/JNZ\t\t不等于/结果不为零\tZF=0\nJC\t\t\t有进位/有借位\t\t  CF=1\nJNC\t\t\t无进位/无借位     CF=0\nJO\t\t\t溢出\t\t\t\t  OF=1\nJNO\t\t\t不溢出\t\t\t\t OF=0\nJP/JPE\t\t奇偶性为1（偶状态） PF=1\nJNP/JPO\t\t奇偶性为0（奇状态） PF=0\nJS\t\t\t符号位为1\t\t\tSF=1\nJNS\t\t\t符号位为0\t\t\tSF=0\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br"),t("span",{staticClass:"line-number"},[_._v("5")]),t("br"),t("span",{staticClass:"line-number"},[_._v("6")]),t("br"),t("span",{staticClass:"line-number"},[_._v("7")]),t("br"),t("span",{staticClass:"line-number"},[_._v("8")]),t("br"),t("span",{staticClass:"line-number"},[_._v("9")]),t("br"),t("span",{staticClass:"line-number"},[_._v("10")]),t("br")])]),t("h2",{attrs:{id:"_3、循环指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、循环指令"}},[_._v("#")]),_._v(" 3、循环指令")]),_._v(" "),t("ul",[t("li",[_._v("88/86有针对CX计数器的计数循环指令")]),_._v(" "),t("li",[_._v("LOOP label（标号）执行分为两步：\n"),t("ul",[t("li",[_._v("DEC CX   ;CX<—CX-1")]),_._v(" "),t("li",[_._v("JNZ label")])])])]),_._v(" "),t("h2",{attrs:{id:"_4、子程序指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、子程序指令"}},[_._v("#")]),_._v(" 4、子程序指令")]),_._v(" "),t("ul",[t("li",[_._v("子程序是完成特定功能的一段程序;")]),_._v(" "),t("li",[_._v("主程序采用"),t("strong",[_._v("CALL")]),_._v("调用指令转移到子程序的起始处执行;")]),_._v(" "),t("li",[_._v("运行完子程序后，采用"),t("strong",[_._v("RET")]),_._v("指令回到主程序继续执行。")])]),_._v(" "),t("h2",{attrs:{id:"_5、中断指令和系统功能调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、中断指令和系统功能调用"}},[_._v("#")]),_._v(" 5、中断指令和系统功能调用")]),_._v(" "),t("h3",{attrs:{id:"中断指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中断指令"}},[_._v("#")]),_._v(" 中断指令")]),_._v(" "),t("p",[_._v("INT i8")]),_._v(" "),t("p",[_._v("IRET")]),_._v(" "),t("p",[_._v("系统功能调用 （DOS功能调用）")]),_._v(" "),t("p",[_._v("INT 21H")]),_._v(" "),t("p",[_._v("重点掌握：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("键盘接收一个字符：01H号")]),_._v(" "),t("ul",[t("li",[_._v("功能调用号：AH=01H")]),_._v(" "),t("li",[_._v("出口参数：AL=键盘接收的字符的ASCII码")]),_._v(" "),t("li",[_._v("功能调用：INT 21H")])])]),_._v(" "),t("li",[t("p",[_._v("输出到屏幕一个字符：02H号")])]),_._v(" "),t("li",[t("p",[_._v("输出到屏幕一个字符串：09H号")]),_._v(" "),t("ul",[t("li",[_._v("功能调用号：AH=09H")]),_._v(" "),t("li",[_._v("出口参数：DS:DX=欲显示字符串在内存中的首地址；"),t("strong",[_._v("最后必须以“$”结束")]),_._v("（并不显示）")]),_._v(" "),t("li",[_._v("功能调用：INT 21H")])])]),_._v(" "),t("li",[t("p",[_._v("返回DOS：4CH号")])])]),_._v(" "),t("h1",{attrs:{id:"六、输入、输出类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、输入、输出类"}},[_._v("#")]),_._v(" 六、输入、输出类")]),_._v(" "),t("ul",[t("li",[_._v("IN")]),_._v(" "),t("li",[_._v("OUT")])]),_._v(" "),t("h1",{attrs:{id:"七、串操作类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、串操作类"}},[_._v("#")]),_._v(" 七、串操作类")]),_._v(" "),t("ul",[t("li",[_._v("零地址指令，操作数（隐含）")]),_._v(" "),t("li",[_._v("源串DS:[SI]，目的串ES:[DI]，程序框架中需要定义数据段和附加段")]),_._v(" "),t("li",[_._v("源串首/末地址—>SI，目的串/末首地址—>DI")]),_._v(" "),t("li",[_._v("指令执行后，SI/DI（+-）1(B)/2(W)\n"),t("ul",[t("li",[_._v("地址增量（CLD/DF=0），上式为+")]),_._v(" "),t("li",[_._v("地址减量（STD/DF=1），上式为-")])])])]),_._v(" "),t("h2",{attrs:{id:"_1、传送-从源存储区到目的区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、传送-从源存储区到目的区"}},[_._v("#")]),_._v(" 1、传送：从源存储区到目的区")]),_._v(" "),t("ul",[t("li",[_._v("MOVSB")])]),_._v(" "),t("blockquote",[t("p",[_._v("意思是搬移一个字节，它是把 DS:SI 所指地址的一个字节搬移到 ES:DI 所指的地址上，搬移后原来的内容不变，但是原来 ES:DI 所指的内容会被覆盖而且在搬移之后 SI 和 DI 会自动地指向下一个要搬移的地址。")])]),_._v(" "),t("ul",[t("li",[_._v("MOVSW")])]),_._v(" "),t("p",[_._v("MOVSB、MOVSW 和 MOVSD 指令将数据从 ESI 指向的内存位置复制到 EDI 指向的内存位置。（根据方向标志位的值）这两个寄存器自动地增加或减少：")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[_._v("MOVSB")]),_._v(" "),t("th",{staticStyle:{"text-align":"center"}},[_._v("传送（复制）字节")])])]),_._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[_._v("MOVSW")]),_._v(" "),t("td",{staticStyle:{"text-align":"center"}},[_._v("传送（复制）字")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[_._v("MOVSD")]),_._v(" "),t("td",{staticStyle:{"text-align":"center"}},[_._v("传送（复制）双字")])])])]),_._v(" "),t("p",[_._v("MOVSB、MOVSW 和 MOVSD 可以使用重复前缀。方向标志位决定 ESI 和 EDI 是否增加或减少。增加 / 减少的量如下表所示：")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[_._v("指令")]),_._v(" "),t("th",{staticStyle:{"text-align":"center"}},[_._v("ESI 和 EDI 增加或减少的数值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[_._v("MOVSB")]),_._v(" "),t("td",{staticStyle:{"text-align":"center"}},[_._v("1")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[_._v("MOVSW")]),_._v(" "),t("td",{staticStyle:{"text-align":"center"}},[_._v("2")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[_._v("MOVSD")]),_._v(" "),t("td",{staticStyle:{"text-align":"center"}},[_._v("4")])])])]),_._v(" "),t("h2",{attrs:{id:"_2、存入串-将ax的内容存入目的存储区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、存入串-将ax的内容存入目的存储区"}},[_._v("#")]),_._v(" 2、存入串：将AX的内容存入目的存储区")]),_._v(" "),t("ul",[t("li",[_._v("STOSB")])]),_._v(" "),t("blockquote",[t("p",[_._v("该指令为单字符输出指令，调用该指令后，可以将累加器AL中的值传递到当前ES段的DI地址处，并且根据DF的值来影响DI的值，如果DF为0，则调用该指令后，DI自增1。")])]),_._v(" "),t("ul",[t("li",[_._v("STOSW")])]),_._v(" "),t("h2",{attrs:{id:"_3、从串取-从源存储区的内容送ax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、从串取-从源存储区的内容送ax"}},[_._v("#")]),_._v(" 3、从串取：从源存储区的内容送AX")]),_._v(" "),t("ul",[t("li",[_._v("LODSB")]),_._v(" "),t("li",[_._v("LODSW")])]),_._v(" "),t("blockquote",[t("p",[_._v("串操作指令LODSB/LODSW是块读出指令，其具体操作是把SI指向的存储单元读入累加器,其中LODSB是读入AL,LODSW是读入AX中,然后SI自动增加或减小1或2位.当方向标志位DF=0时，则SI自动增加；DF=1时，SI自动减小。")]),_._v(" "),t("p",[_._v("与LODSB/LODSW类似的，STOSB/STOSW是块写入指令，其具体操作是把累加器的内容写入到指向的存储单元中。其中STOSB是从AL中读入,STOSW是从AX中读入,然后DI自动增加或减小1或2位.当方向标志位DF=0时，则DI自动增加；DF=1时，DI自动减小。")])]),_._v(" "),t("h2",{attrs:{id:"_4、比较源和目的串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、比较源和目的串"}},[_._v("#")]),_._v(" 4、比较源和目的串")]),_._v(" "),t("ul",[t("li",[_._v("CMPSB")]),_._v(" "),t("li",[_._v("CMPSW")])]),_._v(" "),t("h2",{attrs:{id:"_5、串扫描-将ax的内容与目的串的一个数据比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、串扫描-将ax的内容与目的串的一个数据比较"}},[_._v("#")]),_._v(" 5、串扫描：将AX的内容与目的串的一个数据比较")]),_._v(" "),t("ul",[t("li",[_._v("SCASB")]),_._v(" "),t("li",[_._v("SCASW")])]),_._v(" "),t("h2",{attrs:{id:"_6、三种控制次数的指令-配合上面指令使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、三种控制次数的指令-配合上面指令使用"}},[_._v("#")]),_._v(" 6、三种控制次数的指令（配合上面指令使用）")]),_._v(" "),t("ul",[t("li",[_._v("REP\n"),t("ul",[t("li",[t("p",[_._v("CX<—CX-1")])]),_._v(" "),t("li",[t("p",[_._v("判断CX=0？若CX=0，退出")])]),_._v(" "),t("li",[t("p",[_._v("REP STOS "),t("em",[_._v("m8")]),_._v("  ：使用 AL 填写位于 ES:[(E)DI] 的 (E)CX 个字节")])])])]),_._v(" "),t("li",[_._v("REPE/REPZ ；找不相等的字符\n"),t("ul",[t("li",[_._v("CX<—CX-1")]),_._v(" "),t("li",[_._v("判断CX=0或ZF=0，则退出")]),_._v(" "),t("li",[_._v("REPE CMPS "),t("em",[_._v("m8,m8")]),_._v(" ：在 ES:[(E)DI] 与 DS:[(E)SI] 中查找不匹配的字节")])])]),_._v(" "),t("li",[_._v("串重复前缀REPNE/REPNZ；找相等的字符\n"),t("ul",[t("li",[_._v("CX<—CX-1")]),_._v(" "),t("li",[_._v("判断CX=0或ZF=1，则退出")]),_._v(" "),t("li",[_._v("REPNE CMPS "),t("em",[_._v("m8,m8")]),_._v(" ：在 ES:[(E)DI] 与 DS:[(E)SI] 中查找匹配字节")])])])]),_._v(" "),t("h1",{attrs:{id:"八、处理器控制类、"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、处理器控制类、"}},[_._v("#")]),_._v(" 八、处理器控制类、")]),_._v(" "),t("ul",[t("li",[_._v("NOP ；空操作指令，延时")]),_._v(" "),t("li",[_._v("HLT ；暂停指令:CPU进入暂停状态")])]),_._v(" "),t("h1",{attrs:{id:"九、伪指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#九、伪指令"}},[_._v("#")]),_._v(" 九、伪指令")]),_._v(" "),t("ul",[t("li",[_._v("不参与程序执行，起到指示说明的作用")])]),_._v(" "),t("p",[_._v("类型名 PTR 名字/标号：当无法通过任一个操作数去确定操作类型时，需要显示指明长度时使用。")]),_._v(" "),t("ul",[t("li",[_._v("Byte PTR、Word PTR等；")])]),_._v(" "),t("p",[_._v("OFFSET 名字/标号：返回EA（偏移地址地址）")]),_._v(" "),t("p",[_._v("SEG 名字/标号：返回段地址")]),_._v(" "),t("p",[_._v("END：表示源程序到此结束")]),_._v(" "),t("p",[_._v("EQU：符号定义伪指令")]),_._v(" "),t("ul",[t("li",[_._v("EQU和“=”")]),_._v(" "),t("li",[t("code",[_._v("符号名 EQU 常数/数值表达式")])]),_._v(" "),t("li",[t("code",[_._v("符号名 = 常数/数值表达式")])]),_._v(" "),t("li",[_._v("EQU定义不占内存")]),_._v(" "),t("li",[_._v("EQU不能重复定义符号名，但“=”允许有重复赋值")])]),_._v(" "),t("h2",{attrs:{id:"变量的定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量的定义"}},[_._v("#")]),_._v(" 变量的定义")]),_._v(" "),t("p",[_._v("汇编语言指令格式：")]),_._v(" "),t("p",[t("code",[_._v("变量名 伪指令 初值表")])]),_._v(" "),t("p",[_._v("变量名：表示初值表首元素的逻辑地址；")]),_._v(" "),t("p",[_._v("伪指令：DB(字节8位)、DW(字16位)、DD(双字32位)")]),_._v(" "),t("p",[_._v("初值表：用逗号分隔的参数")]),_._v(" "),t("p",[_._v("复制操作符DUP定义多个相同元素：")]),_._v(" "),t("p",[_._v("格式："),t("code",[_._v("重复次数 DUP (重复参数1、重复参数2、……)")])]),_._v(" "),t("p",[_._v("DB：")]),_._v(" "),t("ul",[t("li",[_._v("无符号数：0——255")]),_._v(" "),t("li",[_._v("有符号数：-128——+127")]),_._v(" "),t("li",[_._v("字符串常数")])]),_._v(" "),t("p",[_._v("变量的定位：")]),_._v(" "),t("ul",[t("li",[_._v("段中定义的第一变量从0地址开始；")]),_._v(" "),t("li",[_._v("按照定义的先后顺序依次分配存储空间；")]),_._v(" "),t("li",[_._v("ORG控制数据或代码所在的偏移地址："),t("code",[_._v("ORG 参数")])])]),_._v(" "),t("p",[_._v("名字和标号的属性：")]),_._v(" "),t("ul",[t("li",[_._v("名字指向一条伪指令，标号指向一条硬指令。")]),_._v(" "),t("li",[_._v("具有两类属性：\n"),t("ul",[t("li",[_._v("地址：段地址和偏移地址；")]),_._v(" "),t("li",[_._v("类型：\n"),t("ul",[t("li",[_._v("变量类型：BYTE、WORD和DWORD；")]),_._v(" "),t("li",[_._v("标号、段名、子程序名的类型：NEAR(近)和FAR(远)")])])])])])]),_._v(" "),t("h2",{attrs:{id:"段定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#段定义"}},[_._v("#")]),_._v(" 段定义")]),_._v(" "),t("p",[_._v("PROC \t 定义过程.")]),_._v(" "),t("p",[_._v("ENDP\t  过程结束.")]),_._v(" "),t("p",[_._v("SEGMENT\t 定义段.")]),_._v(" "),t("p",[_._v("ASSUME\t 建立段寄存器寻址.")]),_._v(" "),t("p",[_._v("ENDS\t 段结束.")]),_._v(" "),t("p",[_._v("END\t  程序结束.")]),_._v(" "),t("p",[_._v("ret\t 返回主程序")]),_._v(" "),t("p",[_._v("IRET\t子程序返回")]),_._v(" "),t("p",[_._v("1、格式：")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("段名 SEGMENT\n……\n段名 ENDS\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br")])]),t("p",[_._v("2、ASSUME DS:数据段名,CS:代码段名,SS:堆栈段名,ES:附加段名:")]),_._v(" "),t("ul",[t("li",[_._v("指定逻辑地址与物理地址之间的对应关系")]),_._v(" "),t("li",[_._v("用指令MOV实现：")])]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("MOV AX,段名\nMOV DS,AX\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br")])]),t("h2",{attrs:{id:"过程定义-子程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过程定义-子程序"}},[_._v("#")]),_._v(" 过程定义（子程序）")]),_._v(" "),t("p",[_._v("1、格式：")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("过程名 PROC [属性NEAR或FAR]\n……\n过程名 ENDP\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br")])]),t("ul",[t("li",[_._v("NEAR：段内调用，同一代码段")]),_._v(" "),t("li",[_._v("FAR：段间调用，不同代码段")])]),_._v(" "),t("p",[_._v("2、举例：")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("Dpchar porc\n\tPUSH AX\n\tPUSH BX\n\t……\n\tPOP BX\n\tPOP AX\n\tRET\t\t；子程序返回\nDpchar endp ；过程结束\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br"),t("span",{staticClass:"line-number"},[_._v("5")]),t("br"),t("span",{staticClass:"line-number"},[_._v("6")]),t("br"),t("span",{staticClass:"line-number"},[_._v("7")]),t("br"),t("span",{staticClass:"line-number"},[_._v("8")]),t("br")])]),t("p",[_._v("中断服务子程序的一般构成：")]),_._v(" "),t("ul",[t("li",[_._v("开中断、保护现场、中断服务、恢复现场、中断返回")])]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("intp porc\n\tSTI\t\t\t；开中断\n\tPUSH AX\n\tPUSH BX\n\t……\t\t  ；中断服务过程\n\tPOP BX\n\tPOP AX\n\tIRET\t\t；子程序返回\nintp endp ；过程结束\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br"),t("span",{staticClass:"line-number"},[_._v("5")]),t("br"),t("span",{staticClass:"line-number"},[_._v("6")]),t("br"),t("span",{staticClass:"line-number"},[_._v("7")]),t("br"),t("span",{staticClass:"line-number"},[_._v("8")]),t("br"),t("span",{staticClass:"line-number"},[_._v("9")]),t("br")])]),t("h1",{attrs:{id:"十、分支程序设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十、分支程序设计"}},[_._v("#")]),_._v(" 十、分支程序设计")]),_._v(" "),t("ul",[t("li",[_._v("根据条件是真或假决定执行与否")]),_._v(" "),t("li",[_._v("判断的条件指令，如cmp，test，执行后形成的状态标志")])]),_._v(" "),t("h1",{attrs:{id:"十一、循环程序设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十一、循环程序设计"}},[_._v("#")]),_._v(" 十一、循环程序设计")]),_._v(" "),t("p",[_._v("3个组成部分：")]),_._v(" "),t("ul",[t("li",[_._v("循环初始部分：为开始循环准备必要的条件，如循环次数、循环体需要的数值等。")]),_._v(" "),t("li",[_._v("循环体部分：指重复执行的程序部分，其中包括对循环条件等的修改程序段")]),_._v(" "),t("li",[_._v("循环控制部分：判断循环条件是否成立，决定是否继续循环")])])])}),[],!1,null,null,null);v.default=a.exports}}]);