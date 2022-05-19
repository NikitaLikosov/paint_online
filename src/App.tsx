import React from 'react';
import Canvas from './component/Canvas';
import SettingBar from './component/SettingBar';
import ToolBar from './component/ToolBar';

function App() {
  return (
    <div className="container mx-auto px-16 ">
      <ToolBar/>
      <SettingBar/>
      <Canvas/>
    </div>
  );
}

export default App;
