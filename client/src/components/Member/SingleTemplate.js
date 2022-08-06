import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const SingleTemplate = () => {
    const { templateId } = useParams();

    const [template, setTemplate] = useState(null);

    useEffect(() => {
        axios.get(`/api/templates/`)
            .then(res => console.log("this is the template data",res.data))
            .catch(err => console.log(err));
    }
    , []);

    return (
        <>
            {template && (
                <>
                    template here
                </>
            )}
        </>
    );
}