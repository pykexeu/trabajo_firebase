import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { app } from '../firebase/config'

const db = getFirestore(app);

function Trainings() {
    const navigate = useNavigate();
    const [list, setList] = useState([]);

    const handleClick = () => {
        navigate("/register-training");
    };

    useEffect(() => {
        const getList = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'training'))
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                setList(docs)
            } catch (error) {
                console.log(error)
            }
        }
        getList()
    }, [list]);

    return (
        <div className="p-4 shadow-md flex justify-center items-center text-white">

            <div>
                <h1 className="text-3xl text-red-500 font-bold text-center mb-4">Lista de entrenamientos</h1>
                <div className="flex flex-col gap-y-4 bg-">
                    {list.map(lists => (
                        <div key={lists.id} className="p-8 bg-transparent shadow-lg rounded-md p-4 align-items-center flex flex-col justify-center items-center border border-width-2 border-red-500 border-radius-5" >
                            <p className="text-red-500 font-bold">Fecha: {lists.date}</p>
                            <p className="text-red-500 font-bold">Hora: {lists.time}</p>
                            <p className="text-red-500 font-bold">Descripción: {lists.description}</p>
                        </div>
                    ))}
                </div>
                <br></br>
                <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md mx-auto block mt-5"
                        onClick={handleClick}
                    >Registrar Nuevo Entrenamiento
                    </button>
            </div>
        </div>
    );
}

export default Trainings;