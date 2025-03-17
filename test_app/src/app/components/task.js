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
        defaultValue: users[0],
        variants: users
    },
    group: {
        defaultValue: groups[0],
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
        defaultValue: users[0],
        variants: users
    },
    creator: {
        defaultValue: users[0],
        variants: users
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

    function save(e) {
        e.preventDefault();
        return
    }

    function saveAndExit(e) {
        e.preventDefault();
        return
    }

    function create(e) {
        e.preventDefault();
        return
    }

    useEffect(() => {
        if (data.isSuccess && data.isLoad) {
            if (isShadow && document.getElementById('taskBody').scrollTop == 0) setIsShadow(false);
        }
    }, [data.isSuccess, data.isLoad, isShadow])

    useEffect(() => {
        if (data.isSuccess && data.isLoad) {
            setWidth(document.getElementById('taskBody').getBoundingClientRect().width);
            document.getElementById("funcBar").setAttribute('style', `width:${document.getElementById('taskBody').getBoundingClientRect().width}px`);
        }
    }, [data.isSuccess, data.isLoad])

    if (!data.isSuccess && data.isLoad) setData({isLoad: true, isSuccess: true, data: defaultTasksValues});
    else if (!data.isLoad) return <></>
    else {
        let clearData = data.data
        return (
            <div id="taskBody" className="relative z-10 w-full pb-4 h-full overflow-scroll border-t-[1px] border-stroke" onScroll={scroll}>
                <div id="funcBar" className={`fixed z-10 p-4 w-full bg-white ${isShadow && 'shadow-base'} w-full max-w-[${width}px] flex justify-between items-center`}>
                    <div className="flex gap-4 items-center max-[767px]:justify-between max-[767px]:w-full">
                        <h3 className="text-xl font-title">Подзадача</h3>
                        <button className="bg-white aspect-auto text-sm px-3 py-1.5" onClick={create}>Создать</button>
                    </div>
                    <div className="flex gap-4 items-center max-[767px]:hidden">
                        <button className="aspect-auto text-white text-sm px-3 py-1.5 bg-[#0078CF]" onClick={save}>Сохранить</button>
                        <button className="bg-white aspect-auto text-sm px-3 py-1.5" onClick={saveAndExit}>Сохранить и выйти</button>
                    </div>
                </div>
                <form className="flex flex-col gap-4 px-4 pt-[64px]">
                    <h2 className={`font-semibold font-title text-2xl max-[767px]:text-xl mb-2 line-clamp-1 max-w-[${width}px]`}>{clearData.title}</h2>
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
                        <BaseInput name={'comments'} height={true} label={'Комментарии'} defaultValue={clearData.comments.defaultValue}/>
                    </InputWrapper>
                    <InputWrapper>
                        <ListInput name={'coordinating'} label={'Согласующие'} defaultValues={clearData.coordinating.defaultValues} variants={clearData.coordinating.variants}/>
                    </InputWrapper>
                    <InputWrapper>
                        <DateInput name={'opened_at'} label={'Когда открыто'} defaultValue={clearData.opened_at.defaultValue}/>
                        <DateInput name={'created_at'} label={'Когда создано'} defaultValue={clearData.created_at.defaultValue}/>
                    </InputWrapper>
                    <InputWrapper>
                        <AddSearchInput name={'opener'} label={'Кем открыто'} defaultValue={clearData.opener.defaultValue} variants={clearData.opener.variants}/>
                        <AddSearchInput name={'creator'} label={'Кем создано'} defaultValue={clearData.creator.defaultValue} variants={clearData.creator.variants}/>
                    </InputWrapper>
                </form>
            </div>
        )
    }
}

function InputWrapper({children}) {
    return (
        <div className="flex flex-row max-[991px]:flex-col gap-4">
            {children}
        </div>
    )
}

function AddSearchInput({label, defaultValue, name, variants}) {
    let [isOpen, setIsOpen] = useState(false);
    let [value, setValue] = useState(defaultValue);

    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className="text-sm">{label}</label>
            <div className="flex gap-1">
                <div name={name} id={name} defaultValue={defaultValue} className="w-full as_input relative pr-[30px]">
                    {value && <div className="choose flex gap-2 items-center py-0.5 px-2 h-6"><span className="text-sm line-clamp-1 ">{value.name}</span></div>}
                    <Image alt="clear" height={16} width={16} src={'/clear.svg'} onClick={() => setValue(false)} className="absolute top-2 right-2 cursor-pointer"/>
                    <ModalList setValue={setValue} variants={variants} isOpen={isOpen}/>
                </div>
                <button className="small-bt" onClick={(e) => {e.preventDefault(); setIsOpen(!isOpen)}}><Image alt="add" width={20} height={20} src={'/plus.svg'}/></button>
                <button className="small-bt" onClick={(e) => e.preventDefault()}><Image alt="search" width={20} height={20} src={'/search.svg'}/></button>
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
                <button className="small-bt" onClick={(e) => e.preventDefault()}><Image alt="search" width={20} height={20} src={'/search.svg'}/></button>
            </div>
        </div>
    )
}

function BaseInput({label, defaultValue, name, height}) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className="text-sm">{label}</label>
            {
                height 
                ?
                <textarea name={name} id={name} defaultValue={defaultValue} className="w-full as_input"/>
                :
                <input name={name} id={name} defaultValue={defaultValue} className="w-full"/>
            }
            
        </div>
    )
}

function RequiredInput({label, defaultValue, name}) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className="flex gap-1 text-sm"><span className="text-red-800">*</span>{label}</label>
            <input required={true} name={name} id={name} defaultValue={defaultValue} className="w-full"/>
        </div>
    )
}

function DateInput({label, defaultValue, name}) {
    function openPicker(e) {
        e.preventDefault();
        document.getElementById(name).showPicker();
    }

    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className="text-sm">{label}</label>
            <div className="flex gap-1">
                <input name={name} type="date" id={name} defaultValue={defaultValue} className="w-full"/>
                <button onClick={openPicker} className="small-bt"><Image alt="search" width={20} height={20} src={'/calendar.svg'}/></button>
            </div>
        </div>
    )
}

function ListInput({label, defaultValues, name, variants}) {
    let [isOpen, setIsOpen] = useState(false);
    let [values, setValues] = useState(defaultValues);

    function setNew(variant) {
        if (!Array.from(values).includes(variant)) setValues(values.concat(variant));
    }

    function deleteUser(variant) {
        console.log(variant)
        setValues(values.filter(value => value.id != variant.id));
    }

    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className="text-sm">{label}</label>
            <div className="flex gap-1">
                <div name={name} type="date" id={name} className="w-full relative flex flex-wrap pr-[30px] gap-1 as_input" values={values}>
                    {
                        values.map(user => <div className="choose flex gap-2 items-center py-0.5 px-2" key={user.id}><span className="text-sm line-clamp-1">{user.name}</span><Image alt="delete" width={9.5} height={16} src={'/Close.svg'} onClick={() => deleteUser(user)}/></div>)
                    }
                    <Image alt="clear" height={16} width={16} src={'/clear.svg'} onClick={() => setValues([])} className="absolute top-2 right-2 cursor-pointer"/>
                    <ModalList variants={variants} isOpen={isOpen} setValue={setNew}/>
                </div>
                <button className="small-bt" onClick={(e) => {e.preventDefault(); setIsOpen(!isOpen)}}><Image alt="add" width={20} height={20} src={'/plus.svg'}/></button>
                <button className="small-bt" onClick={(e) => e.preventDefault()}><Image alt="search" width={20} height={20} src={'/search.svg'}/></button>
            </div>
        </div>
    )
}

function ModalList({variants, setValue, isOpen}) {
    return(
        <ul className={`absolute right-[4px] ${!isOpen && 'hidden'} bg-white flex flex-col as_input z-50`}>
            {
                variants.map(variant => <li className="cursor-pointer px-2 py-1 text-sm" onClick={() => setValue(variant)} key={variant.id}>{variant.name}</li>)
            }
        </ul>
    )
}