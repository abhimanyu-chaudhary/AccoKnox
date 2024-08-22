import React, { useState } from 'react'
import Widget from './Widget'
import AddWidgetForm from './AddWidgetForm';

function Category({category, addWidget, removeWidget}) {
    const [showCard, setShowCard] = useState(false);

    //to fetch the user input in the new widget and passing them to the dashboard.
    const handleAddWidget = (widget) => {
        addWidget(category.name, widget);
        setShowCard(false);
    }

  return (
    <div className='pb-5'>
      <h1 className='mb-4 font-bold'>{category.name}</h1>
      <div className='flex items-center flex-wrap gap-4'>
        {category.widgets.map(widget => (
            <div key={widget.name} className='mr-4'>
                <Widget widget={widget} removeWidget={() => removeWidget(category.name, widget.name)} />
            </div>
        ))}

      {/* //conditional rendering applied */}
        {showCard ? (
            <AddWidgetForm addWidget={handleAddWidget} cancel={() => setShowCard(false)}  />
        ): (
            <button onClick={()=> setShowCard(true)} className='w-40 h-16 bg-violet-500 rounded-md'>Add Widget + </button>
        )}
      </div>
    </div>
  )
}

export default Category
