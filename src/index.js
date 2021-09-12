import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TUGAS from './component/mased';
import TUGAS1 from './component/ender';

const data = [
  {Sekolah: "SD 3 DEMAAN KUDUS", tahun:"2006-2012", gambar: "https://i.ibb.co/YNCPLzf/Logo-SD-Sekolah-Dasar.jpg"}, 
  {Sekolah: "SMP 2 KUDUS", tahun:"2012-2015", gambar: "https://i.ibb.co/bBtGn17/Logo-OSIS-SMP.png"}, 
  {Sekolah: "SMK NU MAARIF KUDUS", tahun:"2015-2018", gambar: "https://i.ibb.co/tby7h7t/OIP.jpg"}, 
  {Sekolah: "UNIVERSITAS DIPONEGORO", tahun:"2018-Sekarang", gambar: "https://i.ibb.co/Nsh3VNb/R.png"}, 
  {barang: "DVD FILM", harga:"100K", gambar1: "https://i.ytimg.com/vi/c6fxpyyVgi8/maxresdefault.jpg"}, 
  {barang: "TIKET OYO", harga:"200K!", gambar1: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-3739682/oyo-room_oyo-rooms-e-voucher-value-rp-100-000_full02.jpg"}, 
  {barang: "TIKET RedDoors", harga:"150K!", gambar1: "https://lh3.googleusercontent.com/proxy/f_a5fM8vIYDMO-2pIoXOY0tTuHF5wk5qimaGiAivFFZ2MozXan-j9aPkVNxHBlWeOUEGfSNXvS7huVUP6z08rlEXEjelG41u_YUwpmTarmvXqCL_5bc2_xRz_qBI-dXjY30WQt7_uAcaaw"}, 
  {barang: "JOKI PRAKTIKUM", harga:"inbox!", gambar1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAsnYmpaVafr6-rgnQiX8rpritOZdQzElEA&usqp=CAU"}, 
  
] 



ReactDOM.render(
  <React.StrictMode>
    <TUGAS nama1="MUHAMMAD EDI ILFA" NIM1="21120118120017" Tipe1="Riwayat Pendidikan" data={data} />
    <TUGAS1 nama2="indrak" NIM2="21120118140097" Tipe2="Dagangan" data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);
