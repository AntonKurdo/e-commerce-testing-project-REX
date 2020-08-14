import React from 'react';
import './Filters.scss';
import { Select } from './CustomSelect';
import { CoinSelect } from './CoinSelect';
import { ManufSelect } from './Manufacturer';
import { Input } from './Input';

const firstSelectValues = ['By Algorithm', 'By Algorithm 1', 'By Algorithm 2', 'By Algorithm 3', 'By Algorithm 4']
const thirdSelectValues = ['By Equipment', 'By Equipment 1', 'By Equipment 2', 'By Equipment 3', 'By Equipment 4']

export const Filters = ({
    algSelect,
    isAlgSelectActive,
    setAlgSelMode,
    setAlgSelValue,
    equipmentSelect,
    isEquipmentSelectActive,
    setEquipmentSelMode,
    setEquipmentSelValue,
    title
}) => {
    return (
        <div className='filters'>
            <div className='_title'>{title}</div>
            <Select
                arr={firstSelectValues}
                select={algSelect}
                isSelectActive={isAlgSelectActive}
                setSelMode={setAlgSelMode}
                setSelValue={setAlgSelValue} 
            />
            <CoinSelect />
            <Select
                arr={thirdSelectValues}
                select={equipmentSelect}
                isSelectActive={isEquipmentSelectActive}
                setSelMode={setEquipmentSelMode}
                setSelValue={setEquipmentSelValue} 
            />
            <ManufSelect />
            <Input placeholder='Minimum price'/>
            <Input placeholder='Maximum price'/>
            <Input placeholder='🔍 Search' type='text'/>
        
        </div>

    )
}