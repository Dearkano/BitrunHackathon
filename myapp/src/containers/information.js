import * as React from 'react';

import { Card, WingBlank, WhiteSpace,Button } from 'antd-mobile';
import ListView from '../components/listview';
export default class extends React.Component {
    constructor(props){
        super(props);
        this.state={showGoingEvent:false,showFinishedEvent:false,showUnfinishedEvent:false};
    }
    onClickGoingEvent(){
        this.setState({showGoingEvent:this.state.showGoingEvent?false:true});
    }
    onClickFinishedEvent(){
        this.setState({showFinishedEvent:this.state.showFinishedEvent?false:true});
    }
    onClickUnfinishedEvent(){
        this.setState({showUnfinishedEvent:this.state.showUnfinishedEvent?false:true});
    }
    render() {
        const obj={
            description : "姚文生，天津日报视觉中心的一名摄影记者。2014年12月，姚文生的妻子张淑霞被确诊为急性髓系白血病，一年多来，姚文生花光了全部家庭积蓄，默默扛起了所有重担，他奔波于医院和采访地点之间，在照顾妻子的同时，从未离开过新闻报道一线，几乎没有耽误过一次报道任务。姚文生总想着：“不要给同事、朋友添堵，能自己扛就扛过去。”为此，他花掉了抵押房产的贷款，又借了外债，可面对高昂犹如“无底洞”般的移植费用，这个一直以来乐观、坚强的男人是真的没辙了。",
            title : "对越自卫反击战女兵身患癌症",
            amount:5000,
            rest:1200,
            participants:5988,
            mode:1,
            imgUrl:"/images/charity.png",
            id:1
          }
        console.log(this.state);
        return(
            <div>
        <WingBlank size="lg">
            <WhiteSpace size="lg" />
            <Card>
                <Card.Header
                    title="张三"
                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra={<span>志愿者</span>}
                />
                <Card.Body>
                    <div className="list-information">
                    <Button type="warning" size='big' style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100px",textSize:"100px",marginBottom:"20px"}}>账户地址：0xasfqwfqwrfqwfqwg21t</Button>
                    <Button type="primary" size='big' style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100px",textSize:"100px"}}>Token : 12432</Button>
                    </div>
                </Card.Body>
             
            </Card>
            <WhiteSpace size="lg" />
        </WingBlank>
      
        <Button type="default" onClick={this.onClickGoingEvent.bind(this)}>正在进行的活动(3)</Button>
        {this.state.showGoingEvent?<ListView data={[obj] } />:null}
        <Button type="default" onClick={this.onClickFinishedEvent.bind(this)} style={{marginTop:"15px"}}>已完成的活动(1)</Button>
        {this.state.showFinishedEvent?<ListView data={[obj] } />:null}
        <Button type="default" onClick={this.onClickUnfinishedEvent.bind(this)} style={{marginTop:"15px"}}>已放弃的活动(1)</Button>
        {this.state.showUnfinishedEvent?<ListView data={[obj] } />:null}
        </div>);
    }
}