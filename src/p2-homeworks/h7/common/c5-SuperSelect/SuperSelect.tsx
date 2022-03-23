import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = [options?.map((item, i) => (
        <option key={`key-${i}`} value={item}>{item}</option>
    ))]; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {

        if (onChange) onChange(e);

        if (onChangeOption) {
            onChangeOption(e.currentTarget.value);
        }
        // onChange, onChangeOption
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
