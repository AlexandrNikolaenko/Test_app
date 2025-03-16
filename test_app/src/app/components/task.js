'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { groups, users } from "./defaultData";
import useGetSecretData from "./hooks";
import { API_HOST } from "./host";

const defaultTasksValues = {
    title: 'STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller',
    theme: {
        defaultValue: 'На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller'
    },
    status: {
        defaultValue: 'Новая'
    },
    description: {
        defaultValue: ''
    },
    product: {
        defaultValue: 'Paltform'
    },
    notes: {
        defaultValue: 'Проверить ACL id=172830402014193655'
    },
    priority: {
        defaultValue: 'Средний'
    },
    incharge: {
        defaultValue: users[0].name,
        variants: users
    },
    group: {
        defaultValue: groups[0].name,
        variants: groups
    },
    comments: {
        defaultValue: ''
    },
    coordinating: {
        defaultValues: users.slice(0, 12),
        variants: users
    },
    opened_at: {
        defaultValue: ''
    },
    created_at: {
        defaultValue: '22.10.2024'
    },
    opener: {
        defaultValue: 'Андрей Пивоваров'
    },
    creator: {
        defaultValue: 'Андрей Пивоваров'
    }
}

export default function Task() {
    let [isShadow, setIsShadow] = useState(true);
    const id = 1;
    let {data, setData} = useGetSecretData(`${API_HOST}/task?id=${id}`);
    let [width, setWidth] = useState(320);

    function scroll(e) {
        if (!isShadow && e.target.scrollTop > 0) setIsShadow(true);
        else if (isShadow && e.target.scrollTop == 0) setIsShadow(false);
    }

    useEffect(() => {
        if (data.isSuccess && data.isLoad) {
            if (isShadow && document.getElementById('taskBody').scrollTop == 0) setIsShadow(false);
        }
    })

    useEffect(() => {
        if (data.isSuccess && data.isLoad) {
            setWidth(document.getElementById('taskBody').getBoundingClientRect().width);
            document.getElementById("funcBar").width = document.getElementById('taskBody').getBoundingClientRect().width;

            console.log(document.getElementById("funcBar").width);
        }
    })

    if (!data.isSuccess && data.isLoad) setData({isLoad: true, isSuccess: true, data: defaultTasksValues});
    else if (!data.isLoad) return <></>
    else {
        let clearData = data.data
        return (
            <div id="taskBody" className="relative z-10 w-full pb-4 h-full overflow-scroll border-t-[1px] border-stroke" onScroll={scroll}>
                <div id="funcBar" className={`fixed z-10 w-full max-w-[${width}px] flex justify-between p-4 bg-white ${isShadow && 'shadow-base'}`}>
                    <div className="flex gap-4 items-center">
                        <h3 className="text-xl font-title">Подзадача</h3>
                        <button className="bg-white aspect-auto text-sm px-3 py-1.5">Создать</button>
                    </div>
                    <div className="flex gap-4 items-center">
                        <button className="aspect-auto text-white text-sm px-3 py-1.5 bg-[#0078CF]">Сохранить</button>
                        <button className="bg-white aspect-auto text-sm px-3 py-1.5">Сохранить и выйти</button>
                    </div>
                </div>
                <form className="flex flex-col gap-4 px-4 pt-[64px]">
                    <h2 className={`font-semibold font-title text-2xl mb-2 line-clamp-1 max-w-[${width}px]`}>STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller</h2>
                    <InputWrapper>
                        <RequiredInput name={'theme'} label={'Тема'} defaultValue={clearData.theme.defaultValue}/>
                        <BaseInput name={'status'} defaultValue={clearData.status.defaultValue} label={'Статус'}/>
                    </InputWrapper>
                    <InputWrapper>
                        <BaseInput name={'description'} label={'Описание'} defaultValue={clearData.description.defaultValue}/>
                        <SearchInput name={'product'} label={'Продукт'} defaultValue={clearData.product.defaultValue}/>
                    </InputWrapper>
                    <InputWrapper>
                        <RequiredInput name={'notes'} label={'Рабочие заметки'} defaultValue={clearData.notes.defaultValue}/>
                        <BaseInput name={'priority'} defaultValue={clearData.priority.defaultValue} label={'Приоритет'}/>
                    </InputWrapper>
                    <InputWrapper>
                        <AddSearchInput name={'incharge'} label={'Ответственный'} defaultValue={clearData.incharge.defaultValue} variants={clearData.incharge.variants}/>
                        <AddSearchInput name={'group'} label={'Группа'} defaultValue={clearData.group.defaultValue} variants={clearData.group.variants}/>
                    </InputWrapper>
                    <InputWrapper>
                        <BaseInput name={'comments'} label={'Комментарии'} defaultValue={clearData.comments.defaultValue}/>
                    </InputWrapper>
                    <InputWrapper>
                        <ListInput name={'coordinating'} label={'Согласующие'} defaultValues={clearData.coordinating.defaultValues} variants={clearData.coordinating.variants}/>
                    </InputWrapper>
                    <InputWrapper>
                        <DateInput name={'opened_at'} label={'Когда открыто'} defaultValue={clearData.opened_at.defaultValue}/>
                        <DateInput name={'created_at'} label={'Когда создано'} defaultValue={clearData.created_at.defaultValue}/>
                    </InputWrapper>
                    <InputWrapper>
                        <AddSearchInput name={'opener'} label={'Кем открыто'} defaultValue={clearData.opener.defaultValue}/>
                        <AddSearchInput name={'creator'} label={'Кем создано'} defaultValue={clearData.creator.defaultValue}/>
                    </InputWrapper>
                </form>
            </div>
        )
    }
}

function InputWrapper({children}) {
    return (
        <div className="flex flex-row gap-4">
            {children}
        </div>
    )
}

function AddSearchInput({label, defaultValue, name, variants}) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className="text-sm">{label}</label>
            <div className="flex gap-1">
                <input name={name} id={name} defaultValue={defaultValue} className="w-full as_input"/>
                <button className="small-bt"><Image alt="search" width={20} height={20} src={'/search.svg'}/></button>
                <button className="small-bt"><Image alt="search" width={20} height={20} src={'/plus.svg'}/></button>
            </div>
        </div>
    )
}

function SearchInput({label, defaultValue, name}) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className="text-sm">{label}</label>
            <div className="flex gap-1">
                <input name={name} id={name} defaultValue={defaultValue} className="w-full"/>
                <button className="small-bt"><Image alt="search" width={20} height={20} src={'/search.svg'}/></button>
            </div>
        </div>
    )
}

function BaseInput({label, defaultValue, name}) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className="text-sm">{label}</label>
            <input name={name} id={name} defaultValue={defaultValue} className="w-full"/>
        </div>
    )
}

function RequiredInput({label, defaultValue, name}) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className="flex gap-1 text-sm"><span className="text-red-800">*</span>{label}</label>
            <input name={name} id={name} defaultValue={defaultValue} className="w-full"/>
        </div>
    )
}

function DateInput({label, defaultValue, name}) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className="text-sm">{label}</label>
            <div className="flex gap-1">
                <input name={name} type="date" id={name} defaultValue={defaultValue} className="w-full"/>
                <button className="small-bt"><Image alt="search" width={20} height={20} src={'/calendar.svg'}/></button>
            </div>
        </div>
    )
}

function ListInput({label, defaultValues, name, variants}) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className="text-sm">{label}</label>
            <div className="flex gap-1">
                <div name={name} type="date" id={name} className="w-full as_input"></div>
                <button className="small-bt"><Image alt="search" width={20} height={20} src={'/search.svg'}/></button>
                <button className="small-bt"><Image alt="search" width={20} height={20} src={'/plus.svg'}/></button>
            </div>
        </div>
    )
}