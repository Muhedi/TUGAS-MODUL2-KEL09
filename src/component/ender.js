import React from "react";

export default function ender(props){
    return(
        <>
        
            <ul className="list-group" style={{width: "50rem", margin: "0 0 25px 25px"}}>
                <li className="list-group-item">
                    <h6>Pembuat komponen 2: {props.nama2}</h6>
                </li>
                <li className="list-group-item">
                    <h6>NIM               : {props.NIM2}</h6>
                </li>
                 <li className="list-group-item">
                    <h6>Tipe komponen     : {props.Tipe2}</h6>
                </li>
            </ul>
            {props.data.map((value) => (
                <>
                    <div className="card shadow" style={{width: "20rem", margin: "auto", float: "left", marginLeft: "25px"}}>
                        <img src={value.gambar1} className="card-img-top" alt={value.sekolah1} />
                        <div className="card-body">
                            <p>{value.barang}</p>
                            <p>{value.harga}</p>
                        </div>
                    </div>
                </>
            ))}  
        </>
    );
}