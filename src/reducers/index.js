import {combineReducers} from 'redux';
import { INDEX_UPDATE} from '../actions/index'
const tabsData =()=>{
    return [
        { name: 'First tab',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
        { name: 'Second tab',
          content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { name: 'Third tab',
          content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
      ]
};



const tabIndexUpdateReducer=(state={currentIndex:0},action)=>{
    switch(action.type){
        case INDEX_UPDATE:
            return {currentIndex:action.currentIndex};
        default:
            return state;
    }
}

export default combineReducers({
    tabsData:tabsData,
    currentIndexUpdate:tabIndexUpdateReducer
})
