import {useEffect, useState} from "react";

export const useForm = (arg) => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [createdAt, setCreatedAt] = useState('');


    useEffect(() => {
        console.log('id changed ' + id);
    }, [id]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // fetch запрос
        // 1. http://localhost:3500/tasks
        // 2. Method POST
        // 3. Payload {id, title ...}
        // 4. try catch
    }

    return {
        id,
        setId,
        title,
        setTitle,
        description,
        setDescription,
        status,
        setStatus,
        createdAt,
        setCreatedAt,
        handleFormSubmit
    }
}
