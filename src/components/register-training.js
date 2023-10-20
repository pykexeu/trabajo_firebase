import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { app } from '../firebase/config'
import { useNavigate } from "react-router-dom";

const db = getFirestore(app);

const RecordTraining = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleClick = () => {
        navigate("/trainings");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'training'), {
                date, time, description
            })
        } catch (error) {
            console.log(error);
        }
        setTime('');
        setDescription('');
        setDate('');
    };

    return (
        <div className="p-4 shadow-md flex justify-center items-center ">
            <form onSubmit={handleSubmit}>


                <label htmlFor="username" className="block text-red-500 font-semibold mb-3">
                    Fecha:
                </label>
                <input
                    type="date"
                    id="date"
                    className="border border-red-500 rounded-md px-3 py-2 w-full shadow shadow-red-500"
                    value={date}
                    onChange={handleDateChange}
                    required
                />

                <div>
                    <label htmlFor="username" className="block text-red-500 font-semibold mb-2">
                        Hora:
                    </label>
                    <input
                        type="time"
                        id="time"
                        className="border rounded-md px-3 py-2 w-full bg-white"
                        value={time}
                        onChange={handleTimeChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="username" className="block text-red-500 font-semibold mb-2">
                        Descripción:
                    </label>
                    <textarea
                        id="description"
                        className="border rounded-md px-3 py-2 w-full bg-white"
                        value={description}
                        rows={6}
                        onChange={handleDescriptionChange}
                    />
                </div>

                <div className="flex">
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md mx-20"
                        onClick={handleClick}
                    >
                        Regresar
                    </button>
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md mx-20"
                    >
                        Registrar
                    </button>
                </div>


            </form>
        </div>
    );
}

export default RecordTraining;