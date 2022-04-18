import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import './hw11SuperRange.scss';

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeHandler = (value: [number, number]) => {
        setValue1(value[0]);
        setValue2(value[1]);
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className="hw11wrap">
                <div className="superRange">
                    <span className="superRange_value">{value1}</span>
                    <SuperRange
                        value={value1}
                        onChangeRange={setValue1}
                        // сделать так чтоб value1 изменялось
                    />
                </div>

                <div className="superDoubleRange">
                    <div className="superDoubleRange_value">{value1}</div>
                    <SuperDoubleRange
                        onChangeRange={onChangeHandler}
                        value={[value1, value2]}
                        // сделать так чтоб value1 и value2 изменялось
                    />
                    <div className="superDoubleRange_value">{value2}</div>
                </div>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
