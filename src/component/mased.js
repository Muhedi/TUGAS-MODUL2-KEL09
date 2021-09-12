import React from "react";

export default function mased(props){
    return(
        <>
        
            <h4 style={{marginLeft: "650px"}}>TUGAS PRAKTIKUM RPLBK</h4>
            <h4 style={{marginLeft: "670px"}}>MODUL 2 KELOMPOK 9</h4>
            <ul className="list-group" style={{width: "50rem", margin: "0 0 25px 25px"}}>
                <li className="list-group-item">
                    <h6>Pembuat komponen 1: {props.nama1}</h6>
                </li>
                <li className="list-group-item">
                    <h6>NIM               : {props.NIM1}</h6>
                </li>
                 <li className="list-group-item">
                    <h6>Tipe komponen     : {props.Tipe1}</h6>
                </li>
            </ul>
            {props.data.map((value) => (
                <>
                    <div className="card shadow" style={{width: "20rem", margin: "auto", float: "left", marginLeft: "25px"}}>
                        <img src={value.gambar} className="card-img-top" alt={value.sekolah} />
                        <div className="card-body">
                            <p>{value.Sekolah}</p>
                            <p>{value.tahun}</p>
                        </div>
                    </div>
                </>
            ))}  
        </>
    );
}