import React, { useEffect, useState } from 'react'
import Search from './Search';
import data from '../data.json';
import Category from './Category';

function Dashboard() {
    const [categories, setCategories] = useState([]);
    const [searchItems, setSearchItems] = useState('');

    useEffect(() => {
        const localData = localStorage.getItem('localStoredData');
        if(localData){
            setCategories(JSON.parse(localData).categories);
        }else{
            setCategories(data.categories);
        }
    },[]);

    const updateLocalStoredData = (updateCategories) => {
        localStorage.setItem('localStoredData', JSON.stringify({ categories: updateCategories}))
    }

    const addWidget = (categoryName, widget) => {
        const updateCategories = categories.map(category => {
            if(category.name === categoryName){
                return {...category, widgets: [...category.widgets, widget]}
            }
            return category;
        })
        setCategories(updateCategories);
        updateLocalStoredData(updateCategories);
    }

    const removeWidget = (categoryName, widgetName) => {
        const updateCategories = categories.map(category =>{
            if(category.name === categoryName){
                return {...category, widgets: category.widgets.filter(widget => widget.name !== widgetName)}
            }
            return category;
        })
        setCategories(updateCategories);
        updateLocalStoredData(updateCategories);
    }

    const filteredCategories = categories.map(category => ({...category, widgets: category.widgets.filter(widget => widget.name.toLowerCase().includes(searchItems.toLowerCase()) || widget.text.toLowerCase().includes(searchItems.toLowerCase()))}))

  return (
    <div className='px-5 mt-4'>
      <Search setSearchItems={setSearchItems} />
      <div className='mt-5'>
        {filteredCategories.map((category) => (
            <div key={category.name} className='bg-slate-200 p-2 mt-5 rounded-md'>
                <Category addWidget={addWidget} removeWidget={removeWidget} category={category} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard;
