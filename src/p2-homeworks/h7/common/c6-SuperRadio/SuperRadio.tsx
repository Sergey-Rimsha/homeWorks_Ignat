import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        if (onChange) onChange(e);

        if(onChangeOption) {
            onChangeOption(e.currentTarget.value);
        }

        // onChange, onChangeOption
    }

    // map options with key
    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                onChange={onChangeCallback}
                name={o}
                checked={o === value}
                value={o}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
