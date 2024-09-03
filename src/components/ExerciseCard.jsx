import React,{useState} from 'react'

export default function ExerciseCard(props) {
    const [setCompleted, setSetCompleted] = useState(0)
    const {exercise,i} = props
    function handleSetIncrement(){
        setSetCompleted((setCompleted+1) % 6)
    }
    return (
    <div className='p-4 rounded-md flex flex-col gap-4 bg-slate-950'>
        <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
            <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold">
                0{i+1}
                {/* 默认情况下（小于 sm 断点，<640px）：
                元素为 hidden，即不显示，完全从页面布局中消失。
                在小屏幕及以上（sm 断点，>=640px）：
                元素变为 inline，作为行内元素显示，与其他内容同行。 */}
            </h4>
            <h2 className='capitalize whitespace-nowrap truncate 
            max-w-full text-lg sm:text-xl md:text-2xl flex-1 md:text-center'>{exercise.name.replaceAll("_"," ")}</h2>
            <p className='text-sm text-slate-400 capitalize'>{exercise.type}</p>
        </div>

        <div className='flex flex-col'>
            <h3 className='text-slate-400 text-sm'>Muscel Groups</h3>
            <p className=''>{exercise.muscles.join(' & ')}</p>
        </div>

        <div className='flex flex-col bg-slate-950 rounded gap-2'>
            {exercise.description.split('___').map((val) => {
                return (
                    <div className='text-sm'>
                        {val}
                    </div>
                )
            })}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-4 sm:place-items-center gap-2'>
            {['reps','rest','tempo'].map(info=>{
                return (
                    <div key={info} className='flex flex-col p-2 rounded border-[1px]
                     border-solid border-slate-400 w-full'>
                        {/* sm:place-items-center 类生效，网格容器（或使用 Flexbox 的容器）的子项在水平方向和垂直方向都居中对齐。 */}
                        <h3 className="capitalize text-slate-400 text-sm">{info === 'reps' ? `${exercise.unit}` : info}</h3>
                        <p className='font-med'>{exercise[info]}</p>
                     </div>
                )
            })}
            <button onClick={handleSetIncrement} className='flex flex-col p-2 rounded border-[1px]
            border-solid border-blue-900 hover:border-blue-600 w-full duration-200'>
                <h3 className='text-slate-400 text-sm capitalize'>Sets Completed</h3>
                <p className='font-medium'>{setCompleted}/5</p>
            </button>
        </div>
    </div>
  )
}
