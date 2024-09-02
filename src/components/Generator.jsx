import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/swoldier'
import {SCHEMES} from '../utils/swoldier'
import Button from './Button'

function Heater(props) {
    const {index, title, description} = props
    return (
        <div className='flex flex-col gap-4 items-center justify-center'>
            <div className='flex items-center gap-2'>
                <p className='text-3xl sm:text-3xl md:text-5xl
                font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator(props) {
    const [showModal, setShowModal] = useState(false)
    // const [poison, setPoison] = useState('individual')
    // const [muscles, setMuscles] = useState([])
    // const [goal, setGoal] = useState('strength_power')
    const {poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout} = props
    function toggleModal(){
        setShowModal(!showModal)
    }
    function updateMuscles(muscleGroup){
        if (muscles.includes(muscleGroup)){
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2){
            return
        }
        if (poison !== 'individual'){
            setMuscles([muscleGroup])
            setShowModal(false)//只允许选一项，选完即关闭下拉列表
            return
        }

        setMuscles([...muscles,muscleGroup])
        if (muscles.length === 2){
            setShowModal(false)
        }

       
    }
    return (
    <SectionWrapper id='generate' header={"generater your workout"} 
    title={['It\'s','Huge','o\'clock']}>
        <Heater index={'01'} title={'Pick your poison'} description={'Select the workout you wish to endure.'}/>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {/* 这里需要给button加gap */}
        {Object.keys(WORKOUTS).map((type,typeIndex)=> {
            return ( 
                <button onClick={() => {
                    setMuscles([])
                    {/*在设置新poison时，先清空*/}
                    setPoison(type)
                }} className={"bg-slate-950 px-4 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600 "
                 + (type===poison ? 'border-blue-600' : 'border-blue-400')}
                 key={typeIndex}>
                    <p className="capitalize">{type.replaceAll('_',' ')}</p>
                </button>
            )
        })}
        </div>
        {/* ------------ */}
        <Heater index={'02'} title={'Lock on targets'} 
        description={'Select the muscles judged for annihilation'}/>
        <div className='bg-slate-950 border border-solid border-blue-400 
        rounded-lg flex flex-col '>
            <button onClick={toggleModal} 
            className="relative py-3 flex items-center justify-center">{/*为子元素居中*/}
                <p className='capitalize'>{muscles.length === 0 ? "Select muscle groups" : muscles.join(" ")}</p>
                <i className="fa-solid fa-caret-down absolute right-2 top-1/3 -translate-y-1/"></i>
                {/* right-2: Positions the element 0.5rem (8px) from the right side of its nearest positioned ancestor.
                top-1/2: Positions the element's top edge at 50% of its parent's height.
                -translate-y-1/2: Moves the element upward by 50% of its own height to vertically center it within the parent element. */}
            </button>
            {/* 下拉列表-重要 */}
            {showModal && (
                <div className='flex flex-col py-3'>
                    {(poison === 'individual' ? 
                    WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                        return (
                            <button onClick={() => {updateMuscles(muscleGroup)}}
                            className={'hover:text-blue-400 duration-200' + 
                            (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}
                            key={muscleGroupIndex}>
                                <p className='uppercase'>{muscleGroup.replaceAll('_',' ')}</p>
                            </button>
                        )
                    })}
                </div>
            )}
        </div>
        {/* ------------ */}
        <Heater index={'03'} title={'Become Juggernaut'} description={'Select you ultimate objective.'}/>
        <div className='grid grid-cols-1 sm:grid-col-3  gap-4'>
        {/* 这里需要给button加gap */}
        {Object.keys(SCHEMES).map((scheme,schemeIndex)=> {
            return (
                <button 
                onClick={() => {
                    setGoal(scheme)
                }} 
                className={"bg-slate-950 px-4 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600 "
                +(scheme===goal ? 'border-blue-600' : 'border-blue-400')} 
                key={schemeIndex}>
                    <p className="capitalize">{scheme.replaceAll('_',' ')}</p>
                </button>
            )
        })}
        </div>
        <Button func={updateWorkout} text={"Formulate"}></Button>
        
    </SectionWrapper>
  )
}
