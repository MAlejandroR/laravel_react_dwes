import Layout from "@/Layouts/Layout.jsx";
import {useState} from "react";



export default function Listado({nombre, campos , filas}){
    return (
        <Layout>
            <Tabla  nombre={nombre} campos={campos} filas={filas} />
        </Layout>
    )


}
