import { useRouter } from 'next/router';

import VideoRedirect from '@/components/VideoRedirect/VideoRedirect';

const videos = {
    uz: '/video/uzb.mp4',
    en: '/video/eng.mp4',
    ru: '/video/ru.mp4',
};

const redirects = {
    uz: 'https://registon360.uz/registan/index.html',
    ru: 'https://registon360.uz/ru/index.html',
    en: 'https://registon360.uz/en/index.html',
};
// console.log(redirects)
const VideoPage = () => {
    const router = useRouter();
    const { locale } = router;

    const videoSrc = videos[locale] || videos['uz'];
    const redirectUrl = redirects[locale] || redirects['uz'];
    
    // const videoSrc = '/video/bannerUz.mp4'; // Укажите путь к вашему видео
    // const redirectUrl = 'https://aloqamuzeyi.uz/'; // Укажите URL, на который нужно перенаправить пользователя
    

    return (
        <div>
            <VideoRedirect videoSrc={videoSrc} redirectUrl={redirectUrl} />
        </div>
    );
};

export default VideoPage;