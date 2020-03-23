import React from 'react';
// import Child from './Child'
import {Button} from 'antd'
import './index.less'
import 'antd/dist/antd.css'
export default class Life  extends React.Component {
    render() { 
        return (
            <div>
               <Button onClick={this.handleAdd}>AntD点击一下</Button>

            </div>
        );
    }
}
 
