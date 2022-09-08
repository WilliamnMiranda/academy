import React, { SetStateAction } from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

interface IProps {
    value: string
    options: string[]
    style?: {}
    helper?: string,
    setItem: React.Dispatch<SetStateAction<string>>
}

const SelectModal = ({ options, value, setItem,style,helper}: IProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setItem(event.target.value as string);
    };
    return (
        <FormControl sx={{width: '100%'}}>
            <TextField
                id="outlined-select-currency"
                select
                label="Tipo"
                value={value}
                onChange={handleChange}
                helperText={helper && value !== '' ? '' : helper}
                sx={style}
            >
                {
                    options.map((item) => <MenuItem value={item}>{item}</MenuItem>)
                }
            </TextField>
        </FormControl>
    )
}

export default SelectModal