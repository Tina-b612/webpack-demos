
/*var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());*/

import React from 'react';			//导入react模块
import {render} from 'react-dom';	//导入react-dom下的render方法
import Greeter from './Greeter';	//导入自定义模块

import './main.css';		//使用reruire导入文件

render (<Greeter />,document.getElementById('root'));	//写入<Greeter />
















