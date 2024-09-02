import React, { Component } from 'react'

export default function SectionWrapper(props){
    const {children, header, title, id} = props
    return (
        <section id={id} className='min-h-screen flex flex-col gap-10'>
            <div className='bg-slate-950 py-10 flex flex-col gap-4 juystify-center items-center p-4'>
                <p className="uppercase font-medium">{header}</p>
                <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{title[0]} <span className="uppercase text-blue-400">{title[1]}</span> {title[2]}</h2>
            </div>
            <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4'>
                {children}
            </div>
        </section>
    )
}

{/* <section> 应用于文档中具有明确主题的部分，它具有语义，能够帮助搜索引擎和用户理解内容的结构。
<div> 则是一个通用的容器，没有特定的语义，适合在没有明确语义要求的场景下使用。 */}
// max-w-[800px]: This sets the maximum width of the element to 800px. The [800px] part is a custom value, meaning that the maximum width will not exceed 800 pixels.
// w-full: This sets the width of the element to 100% of its parent container, meaning the element will try to occupy the full width available within its parent.