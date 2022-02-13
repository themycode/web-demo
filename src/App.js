import React from 'react'
// 导入要使用的组件
import { Button } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
// 导入首页和城市选择两个组件
import Home from './pages/Home/index'
import CityList from './pages/CityList/index';

function App() {
  return (
    <Router>
      <div className='App'>

        {/* 配置导航菜单 */}
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li><Link to="/citylist">城市列表</Link></li>
        </ul>


        {/* 配置路由 */}
        <Routes>
          {/* 如果有子路由要用* */}
          <Route path='/home/*' element={<Home />} />
          <Route path='/citylist' element={<CityList />} />
        </Routes>
      </div>
    </Router>

  );
}


export default App;
