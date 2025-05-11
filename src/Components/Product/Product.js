import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import '../../i18n.js'
import styles from './Product.module.scss'

function Card({}) {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };


    return (
        <div className={styles.cardsList}>
            {cardsList.map((card) => (
                <>
                </>
            ))}
        </div>
    )
}
