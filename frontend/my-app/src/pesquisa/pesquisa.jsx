import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import CircularProgress from '@material-ui/core/CircularProgress'
import './pesquisa.css'

function Pesquisa({ onChange }) {

    const { control, handleSubmit } = useForm('')
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {

        async function getVideo() {
            const url = new URL('http://localhost:4000/api/pesquisa')

            url.search = new URLSearchParams({
                pesquisa: data.pesquisa,
            })

            return fetch(url, {
                method: 'GET',
                mode: 'cors'
            })
        }

        setLoading(true)
        getVideo().then(async (response) => {
            setLoading(false)
            onChange(await response.json())
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='search_div'>
                <span>
                    <img src='https://img.icons8.com/material-outlined/24/ffffff/search--v1.png' alt='' />
                    <Controller
                        name='pesquisa'
                        defaultValue=''
                        render={({ field }) => <input placeholder='Pesquisar...' className='search_input' {...field} />}
                        control={control}
                    />
                </span>
            </div>
            {loading && <div className='mid'><CircularProgress /></div>}
        </form>
    );
}

export default Pesquisa
