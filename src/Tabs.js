import React from 'react'
import { connect } from 'react-redux';
import {tabIndexUpdate} from './actions/index'

class Tabs extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }

    onUpdateTabIndex =(index)=>{
        this.props.dispatch(tabIndexUpdate(index))
    }

    renderButtons = ()=>{
        return this.props.tabsData.map((tab,index)=>{
            return <button 
                key={index} 
                onClick={()=>this.onUpdateTabIndex(index)}>{tab.name}</button>
        })
    }

    render(){
        // console.log(this.props.tabsData[this.props.currentIndex].content,'test')
        const currentTabContent = this.props.tabsData[this.props.currentIndex].content
        return(
            <div className='tabs-accordion'>
                {this.renderButtons()}
                <p className='current-tab-content'>
                    {/* !! is for snapshot test when array is empty */}
                    {!!this.props.tabsData.length&&currentTabContent}
                </p>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        tabsData:state.tabsData,
        currentIndex:state.currentIndexUpdate.currentIndex     
    };
}
export default connect(mapStateToProps)(Tabs) 