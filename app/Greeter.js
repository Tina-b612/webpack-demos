
//1.
/*module.exports = function (){
	var greet = document.createElement('div');
	greet.textContent = "Hi there and greetings!";
	return greet;
};*/

//2.
/*var config = require('./config.json');			//加载json文件
module.exports = function (){
	var greet = document.createElement('div');	
	greet.textContent = config.greetText;
	return greet;
}*/

//3.
import React, {Component} from 'react';		//导入react模块，显示命名Component
import config from './config.json';			//导入自定义json文件
import styles from './Greeter.css';			//导入css文件

class Greeter extends Component {			//定义一个模块，继承自Component
	render() {
		return (
			<div className={styles.root}> 　
        		{config.greetText}
      		</div>
		);
	}
}

export default Greeter						












