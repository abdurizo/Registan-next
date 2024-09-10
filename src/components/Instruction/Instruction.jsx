import styles from './Instruction.module.css';

import { useTranslation } from 'next-i18next';
import Link from "next/link";

import Card from "@/components/Card/Card";
import CardDuplImg from "@/components/CardDuplImg";
import Up from "@/assets/icon/chevron-up.svg";
import Camera from "@/assets/icon/Camera.svg";
import Play from "@/assets/icon/play_circle_filled.svg";
import Binoculars from "@/assets/icon/binoculars.svg";
import Viewer from "@/assets/icon/360_viewer.svg";
import Sensor from "@/assets/icon/sensor_door.svg";
import Information from "@/assets/icon/Information.svg";
import Audio from "@/assets/icon/audio.svg";
import Sun from "@/assets/icon/sun.svg";
import Moon from "@/assets/icon/moon.svg";
import Now from "@/assets/icon/Now.svg";
import Before from "@/assets/icon/before.svg";
import Menu from "@/assets/icon/menu.svg";
import Map from "@/assets/icon/map.svg";
import Rotation from "@/assets/icon/rotation.svg";
import Music from "@/assets/icon/music.svg";
import Full from "@/assets/icon/full.svg";


function Instruction() {
    const { t } = useTranslation();
    return (<>
        <div className={styles.wrap}>
            <header >
                <div className={styles.instuction_wrap}>
                    <h1 className={styles.instuction}>{t('instuction')}</h1>
                </div>
            </header>
            <section >
                <div className={styles.grid}>
                    <div className={styles.grid_border}>
                        <Card image={Up} title={t('location')} text={t('locationText')} />
                        <Card image={Camera} title={t('photo')} text={t('photoText')} />
                        <Card image={Play} title={t('video')} text={t('videoText')} />
                        <CardDuplImg image={Sun} imageDupl={Moon} title={t('nightMode')} text={t('nightModeText')} />
                        <Card image={Binoculars} title={t('observation')} text={t('observationText')} />
                        <Card image={Viewer} title={t('tracking')} text={t('trackingText')} />
                        <Card image={Sensor} title={t('enter')} text={t('enterText')} />
                        <CardDuplImg image={Before} imageDupl={Now} title={t('PastPresent')} text={t('PastPresentText')} />
                        <Card image={Information} title={t('information')} text={t('informationText')} />
                        <Card image={Audio} title={t('audio')} text={t('audioText')} />
                        <Card image={Menu} title={t('menu')} text={t('menuText')} />
                        <Card image={Map} title={t('map')} text={t('mapText')} />
                        <Card image={Rotation} title={t('rotation')} text={t('rotationText')} />
                        <Card image={Music} title={t('music')} text={t('musicText')} />
                        <Card image={Full} title={t('screen')} text={t('screenText')} />
                    </div>
                </div>
                <div className={styles.link}>

                    <Link href='/' className={styles.continue_left} >
                        {t('back')}
                    </Link>

                    <Link href='/video' className={styles.continue_right} >
                        {t('continue')}
                    </Link>
                </div>

            </section>
        </div>
    </>
    )
}

export default Instruction
