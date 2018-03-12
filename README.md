npm install --save-dev webpack

npm view webpack version
npm install --save-dev webpack@<version>

npm install webpack-cli -D
webpack init
webpack --watch --progress

npm uninstall webpack
npm -g uninstall webpack --save

"scripts": {
    "start": "webpack --config webpack.config.js"
}

npm install -g typescript tsd

DOM (Document Object Model)
 - key,
 - ref
 - dangerouslySetInnerHTML

dotnet new reactredux -n sample
npm install --save @types/react-bootstrap
npm install eslint

หมายเหตุ หากเราติดตั้ง third party ด้วยคำสั่ง npm install แต่ไม่ใส่ parameter –save หรือ –save-dev แล้ว ทาง npm จะดาวน์โหลดไฟล์ต่างๆ ใน module เหล่านั้นมาไว้ใน node_modules/ โฟลเดอร์ให้เหมือนเดิม แต่จะไม่มีการแก้ไขไฟล์ package.json ซึ่งสมาชิกในทีมที่นำโปรเจ็กท์ของเราไปพัฒนาต่อจะประสบกับความยุ่งยากในการ install dependency modules

npm install -g redux —save

webpack --config webpack.config.vendor.js
webpack

new console (run as administrator)

npm install -g create-react-app
Ex.  create-react-app hello-start

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

npm install && npm start

npm init
npm install --save react react-dom
npm install --save-dev ts-loader source-map-loader
npm link typescript

webpack --watch --progress

###########################################################

Lifecycle
 ReactDOM.render() => getDefaultProps() => getDefaultState()
  - componentWillMount() =>
  - componentDidMount() มันจะ render() เสร็จ
 ** เราสามารถ setState ทั้ง 2 จังหวะ นี้ได้
- componentWillReceiveProps(nextProps) : setProps() จังหวะที่ Component จะได้รับ props อันใหม่
- shouldComponentUpdate(nextProps, nextState) : ผ่าน setState() props เปลี่ยนหรือ state เปลี่ยน มันจะโดนมาอยู่ที่จุดนี้
- componentWillUpdate(nextProps, nextState) : Virtual DOM ตัดสินใจจะอัพเดต view
- componentDidUpdate(prevProps, prevState) : เพื่อบอกว่าการอัพเดต component เสร็จแล้ว

 - การใช้งาน map, reduce, filter เพื่อแปลงค่าใน array

 - Server side rendering เพื่อ SEO

 - Unit Test ส่วน component, action, reducer ด้วย Mocha, Chai, SInon, Enzyme
###########################################################

Component

- สร้าง Layout ถ้าอยากให้เห็นกันต้อง import เข้ามาด้วย
- Component – ส่วนต่าง ๆ ในเว็บเราจะมองเป็น Component

Prop (Properties หรือ Attributes)
     คือ object ไว้เก็บข้อมูล array, object และ functions
     - ข้อมูลที่ถูกส่งต่อจาก Component ชั้นบนลงไปชั้นล่าง เราเรียกว่า Props (Properties)

- ส่งค่า จาก เข้าไปใน component ข้างใน เพือให้ compoentn ข้างใน
- <p>{this.prop.title}<p/>

State

-  เก็บสถานะ จะใช้ได้เฉพาะ Component เท่านั้น  โดยแก้ไขค่าผ่านการ setStatue()
- ข้อมูลที่อยู่ใน Component แต่ละชิ้น เราเรียกว่า State
- จะต้องกำหนด default value , set event,
- สร้าง contracture    (state จะต้อง initial ใหม่เสมอ)
- Ex. Constuctor () {
-     Super();
-    this.state = {
    - Name : “xxxx"
    - }
- }
- Set state
    - this.setState({ Name:”xxxxx”})
- Show state
    - <h1>{this.state.Name}</h1>

 Events

-     OnClick , OnChange

 Router

-     Import component, Import Router & Route, Link, browserHistory from 'react-router’
-  CreateRoute
    - <Router history={browserHistory}>
        - <Route path=“/home” Component ={Home}“” >

Redux

- เหมือนระบบ Subscribe อยากรู้อะไร ก็ subscribe
- State ทั้งหมดจะเก็บไว้ที store ที่เดียว
- อยากแก้ไขข้อมูล (Edit) ใน store ก็ทำการ Dispatch

- Redux จะไม่สามารถแก้ไข state โดยตรง  จะต้องแก้ไขผ่าน action

     - getState
     - Dispatched
     - Supscip

reducer.    จะจัดการ state. (จะรับ current state & action) หรือคำนวน state ถัดไปหรือตัวรับคำสั่งในการเปลียนแปลง state เป็น Pure Function

 - แพทเทิร์นการสร้าง action, reducer, store และการใช้งานร่วมกับ React
 - Presentation component vs Container component
 - การใช้งาน Hot Module Reloading
 - การใช้งาน Redux DevTools และ Time Travel Debugging

WebPack
####################################################
แปลง ES6/ES7 เป็น ES5

// ไฟล์ webpack.config.js

context : directory ที่ใช้ในการรวมไฟล์
entry : ชื่อไฟล์ที่ต้องการจะรวม
output : ตำแหน่งของไฟล์ที่เกิดจากการรวมแล้ว
plugins : plugin เสริม ที่ใช้ในขั้นตอนรวมไฟล์
module: กำหนดรูปแบบของไฟล์ที่สามารถทำการรวมด้วย Webpack ได้

module.exports = {
  entry: './app.js', // กำหนด entry point เป็น app.js
  output: {
  filename: 'bundle.js' // ตั้งชื่อไฟล์ output เป็น bundle.js
  },
  module: {

  // ส่วนนี้เอาไว้ระบุ Loader ที่จะใช้
  loaders: [
  {
                     test: /\.jsx?$/, // ถ้าเจอไฟล์นามสกุล js หรือ jsx
                     loader: 'babel-loader' // ให้ load ไฟล์นั้นด้วย babel นะ
  } ]
  }
};

จะต้องติดตั้ง babel-loader
npm install babel-loader --save-dev

-d
เพิ่มฟีเจอร์สำหรับ debug และ source maps เข้ามาด้วย เรามักจะใช้ option นี้ ตอนที่กำลัง dev อยู่ครับ
-p
ช่วยบีบอัดไฟล์ให้เล็กลงด้วย อันนี้เหมาะสำหรับตอนจะเอาขึ้น production ครับ
–watch
คอย watch ไฟล์ให้ด้วย หากมีการแก้ไขใดๆ ก็จะรัน Webpack ใหม่ให้โดยอัตโนมัติ

Ex. webpack -p --watch --progress

####################################################

npx create-react-app react-tutorial
cd react-tutorial

yarn add redux react-redux
yarn start

Destructuring Assignment
ดึงค่าใน Object ออกมา
let {currentUser, isLoggedIn} = this.props;

let {Hotel:{ HotelInfo }} = this.props;
let [HotelInfo1, HotelInf2 ] = HotelInfo
yarn add styled-components
yarn add recompose

... Rest Operator  เอาค่ามาเป็น array
    -
Ex. const addPrefix = (prefix, ...msg) => {
        return msg.map(m => 'Hello' + ' + m)
}

Spread Operator
เอาค่าใน object มากระจายเข้าไป หรือ merge รวมกัน
let user = {name : 'John', age : 50}
let userWithTel = {...user, tel : '3222222222'}
Result