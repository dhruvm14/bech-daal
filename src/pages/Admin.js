import React, { useEffect, useState } from 'react'
import styles from "./../styles/Admin.module.css";
import Transaction from './../components/Transaction'
import axios from 'axios';

export default function Admin() {

    const [prevTrans, setPrevTrans] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/transactions`).then(res => {
                setPrevTrans(res.data);
            }).catch(err => {
                console.log(err)
            })
      }, [])

    return (
        <div className={styles.container}>
            <div className={styles.head}></div>
            {prevTrans && prevTrans.map((trans, key) => (
                <>
                {trans && !trans.isApproved && <Transaction trans={trans} key={key} admin />}
                </>
            ))}
        </div>
    )
}
